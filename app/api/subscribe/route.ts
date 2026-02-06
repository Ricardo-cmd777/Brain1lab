import { NextResponse } from "next/server";
import { KIT_TAGS, type KitTagKey } from "@/lib/kit-tags";

type SubscribePayload = {
  email?: string;
  tag?: KitTagKey; // "COACHES" | "SV_PARS" | etc.
};

const KIT_BASE = "https://api.convertkit.com/v3";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SubscribePayload;
    const email = (body?.email ?? "").toString().trim();
    const tagKey = body?.tag;

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const apiKey = process.env.KIT_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Missing KIT_API_KEY" }, { status: 500 });
    }

    // 1) Create/update subscriber
    const subRes = await fetch(`${KIT_BASE}/subscribers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: apiKey, email }),
    });

    if (!subRes.ok) {
      const detail = await subRes.text();
      return NextResponse.json(
        { error: "Kit subscriber request failed", detail },
        { status: 502 }
      );
    }

    // 2) Apply tag (optional)
    if (tagKey) {
      const tagId = KIT_TAGS[tagKey];
      if (!tagId) {
        return NextResponse.json({ error: "Unknown tag" }, { status: 400 });
      }

      const tagRes = await fetch(`${KIT_BASE}/tags/${tagId}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: apiKey, email }),
      });

      if (!tagRes.ok) {
        const detail = await tagRes.text();
        return NextResponse.json(
          { error: "Kit tag assignment failed", detail },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
