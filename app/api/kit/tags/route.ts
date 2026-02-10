import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.KIT_V4_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { ok: false, error: "Missing KIT_V4_API_KEY" },
      { status: 500 }
    );
  }

  const res = await fetch("https://api.kit.com/v4/tags", {
    headers: { "X-Kit-Api-Key": apiKey },
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    return NextResponse.json(
      { ok: false, status: res.status, error: data },
      { status: 502 }
    );
  }

  // Return only what you need
  const tags =
    (data?.tags ?? []).map((t: any) => ({ id: t.id, name: t.name })) ?? [];

  return NextResponse.json({ ok: true, tags });
}
