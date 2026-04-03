import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { artistName } = await req.json();
    if (!artistName || typeof artistName !== "string" || artistName.trim().length === 0) {
      return NextResponse.json({ error: "Invalid artist name" }, { status: 400 });
    }

    const { error } = await supabase
      .from("search_logs")
      .insert({ artist_name: artistName.trim() });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
