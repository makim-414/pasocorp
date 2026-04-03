import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

const FALLBACK_ARTISTS = [
  "윤형근", "이우환", "이배", "천경자", "에디 마르티네즈",
  "우국원", "앤디 워홀", "김환기", "박서보", "이중섭",
  "쿠사마 야요이", "데이비드 호크니", "게르하르트 리히터",
  "장 미셸 바스키아", "키스 해링", "무라카미 다카시", "조지 콘도", "KAWS",
];

export async function GET() {
  const { data, error } = await supabase.rpc("get_trending_artists");

  if (error || !data || data.length === 0) {
    return NextResponse.json(
      FALLBACK_ARTISTS.map((name) => ({ artist_name: name, search_count: 0 })),
    );
  }

  return NextResponse.json(data);
}
