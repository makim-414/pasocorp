"use client";
import { useEffect, useState } from "react";

interface NewsItem {
  title: string;
  source: string;
  date: string;
  link: string;
}

export default function RelatedNews({ artistNameKo, artistNameEn }: { artistNameKo: string; artistNameEn: string }) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const [resKo, resEn] = await Promise.all([
          fetch(`/api/news?q=${encodeURIComponent(artistNameKo)}`),
          fetch(`/api/news?q=${encodeURIComponent(artistNameEn)}`),
        ]);
        const [dataKo, dataEn]: [NewsItem[], NewsItem[]] = await Promise.all([resKo.json(), resEn.json()]);

        const seen = new Set<string>();
        const merged: NewsItem[] = [];
        for (const item of [...dataKo, ...dataEn]) {
          if (!seen.has(item.title)) {
            seen.add(item.title);
            merged.push(item);
          }
        }
        setNews(merged.slice(0, 8));
      } catch {
        setNews([]);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, [artistNameKo, artistNameEn]);

  if (loading) {
    return (
      <div className="mb-8">
        <div className="border-t border-[#2a2a2a] pt-8 mb-6">
          <h2 className="text-lg font-semibold text-white">관련 뉴스</h2>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4">
              <div className="h-4 bg-[#1a1a1a] rounded w-3/4 mb-2" />
              <div className="h-3 bg-[#1a1a1a] rounded w-1/3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (news.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="border-t border-[#2a2a2a] pt-8 mb-6">
        <h2 className="text-lg font-semibold text-white">관련 뉴스</h2>
      </div>
      <div className="space-y-3">
        {news.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 hover:border-[#4ade80]/30 transition-all group"
          >
            <p className="text-sm text-[#e8e8e8] group-hover:text-[#4ade80] transition-colors leading-relaxed mb-2">
              {item.title}
            </p>
            <div className="flex items-center gap-3 text-[11px] text-[#555]">
              {item.source && (
                <span className="text-[#4ade80]/70">{item.source}</span>
              )}
              {item.date && (
                <>
                  <span>&middot;</span>
                  <span>{item.date}</span>
                </>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
