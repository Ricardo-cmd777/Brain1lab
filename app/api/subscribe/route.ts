import { NextResponse } from "next/server";
import { KIT_TAGS, type KitTagKey } from "@/lib/kit-tags";

type Payload = {
  email?: string;
  tag?: KitTagKey;
};

const isEmail = (v: string) => /^\S+@\S+\.\S+$/.test(v);

export async function POST(req: Request) {
  try {
    const apiKey = process.env.KIT_V4_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, code: "SERVER_CONFIG", error: "Missing KIT_V4_API_KEY" },
        { status: 500 }
      );
    }

    const body = (await req.json().catch(() => ({}))) as Payload;
    const email = body.email?.trim().toLowerCase();
    const tagKey = body.tag ?? "GENERAL_USER";

    // --- Validation ---
    if (!email) {
      return NextResponse.json(
        { ok: false, code: "BAD_REQUEST", error: "Missing email" },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, code: "INVALID_FORMAT", error: "Invalid email format" },
        { status: 400 }
      );
    }

    const tagId = KIT_TAGS[tagKey];
    if (!tagId) {
      return NextResponse.json(
        { ok: false, code: "UNKNOWN_TAG", error: `Unknown tag: ${tagKey}` },
        { status: 400 }
      );
    }

    // --- 1) Create / upsert subscriber ---
    const createRes = await fetch("https://api.kit.com/v4/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Kit-Api-Key": apiKey,
      },
      body: JSON.stringify({
        email_address: email,
        state: "active",
      }),
    });

    const createJson = await createRes.json().catch(() => ({}));

    if (!createRes.ok) {
      return NextResponse.json(
        {
          ok: false,
          code: createRes.status === 401 ? "AUTH_FAILURE" : "PROVIDER_ERROR",
          status: createRes.status,
          error:
            createJson?.message ??
            createJson?.error ??
            "Failed to create subscriber",
        },
        { status: 502 }
      );
    }

    // --- 2) Tag subscriber by email (idempotent) ---
    const tagRes = await fetch(
      `https://api.kit.com/v4/tags/${tagId}/subscribers`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Kit-Api-Key": apiKey,
        },
        body: JSON.stringify({
          email_address: email,
        }),
      }
    );

    const tagJson = await tagRes.json().catch(() => ({}));

    if (!tagRes.ok) {
      return NextResponse.json(
        {
          ok: false,
          code: tagRes.status === 401 ? "AUTH_FAILURE" : "PROVIDER_ERROR",
          status: tagRes.status,
          error:
            tagJson?.message ??
            tagJson?.error ??
            "Failed to tag subscriber",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("subscribe route crashed:", err);
    return NextResponse.json(
      { ok: false, code: "SERVER_ERROR", error: "Route crashed" },
      { status: 502 }
    );
  }
}
