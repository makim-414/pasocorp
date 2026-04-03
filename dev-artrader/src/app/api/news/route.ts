import { NextRequest, NextResponse } from "next/server";

interface NewsItem {
  title: string;
  source: string;
  date: string;
  link: string;
}

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams.get("q");
  if (!query) {
    return NextResponse.json([]);
  }

  try {
    const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query + " 미술")}+when:6m&hl=ko&gl=KR&ceid=KR:ko`;
    const res = await fetch(rssUrl, { next: { revalidate: 3600 } });
    const xml = await res.text();

    const items: NewsItem[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xml)) !== null && items.length < 10) {
      const block = match[1];
      const title = block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1]
        || block.match(/<title>(.*?)<\/title>/)?.[1]
        || "";
      const link = block.match(/<link>(.*?)<\/link>/)?.[1]
        || block.match(/<link\/>([\s\S]*?)(?=<)/)?.[1]?.trim()
        || "";
      const source = block.match(/<source[^>]*>(.*?)<\/source>/)?.[1] || "";
      const pubDate = block.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";

      if (title) {
        const date = pubDate ? formatDate(pubDate) : "";
        items.push({ title: cleanTitle(title), source, date, link });
      }
    }

    return NextResponse.json(items);
  } catch {
    return NextResponse.json([]);
  }
}

function cleanTitle(title: string): string {
  return title.replace(/ - [^-]+$/, "").trim();
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    const m = d.getMonth() + 1;
    const day = d.getDate();
    return `${m}월 ${day}일`;
  } catch {
    return "";
  }
}
