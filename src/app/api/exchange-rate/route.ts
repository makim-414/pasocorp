import { NextResponse } from "next/server";

const FALLBACK_RATE = 1380;

export async function GET() {
  try {
    const res = await fetch(
      "https://open.er-api.com/v6/latest/USD",
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    const krw = data?.rates?.KRW || FALLBACK_RATE;
    return NextResponse.json({ rate: krw, updated: data?.time_last_update_utc || "" });
  } catch {
    return NextResponse.json({ rate: FALLBACK_RATE, updated: "" });
  }
}
