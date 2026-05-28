import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const publicKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
  const serverKey = process.env.WEB3FORMS_KEY ?? "";
  return NextResponse.json({
    ok: true,
    configured: Boolean(publicKey),
    serverKeyAlsoSet: Boolean(serverKey),
    provider: "web3forms",
    mode: "client-side",
    note: publicKey ? undefined : "NEXT_PUBLIC_WEB3FORMS_KEY must be set in Vercel envs for forms to submit (Web3Forms free plan requires client-side calls).",
    ts: new Date().toISOString(),
  });
}
