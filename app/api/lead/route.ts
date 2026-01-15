import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // Phase 1: log it (Vercel logs) or forward to email service later
  console.log("New lead:", body);

  return NextResponse.json({ ok: true });
}
