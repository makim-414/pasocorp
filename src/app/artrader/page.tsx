"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { artists } from "@/lib/artists";
import TrendingArtistsMarquee from "@/components/TrendingArtistsMarquee";

export default function ArtraderHome() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      // Log search to Supabase
      fetch("/api/search-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ artistName: q }),
      }).catch(() => {});

      router.push(`/artrader/search?q=${encodeURIComponent(q)}`);
    }
  };

  const handleArtistClick = (name: string) => {
    // Log click to Supabase
    fetch("/api/search-log", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ artistName: name }),
    }).catch(() => {});

    // Find matching artist slug or search
    const match = artists.find((a) => a.nameKo === name);
    if (match) {
      router.push(`/artrader/artist/${match.slug}`);
    } else {
      router.push(`/artrader/search?q=${encodeURIComponent(name)}`);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4">
          작품, 작가를 검색해보세요
        </h1>
        <p className="text-[#888] text-sm md:text-base mb-12">
          아트레이더는 1,570만 건의 경매 데이터를 기반으로 신뢰할 수 있는 거래 정보를 제공합니다.
        </p>

        <form onSubmit={handleSearch} className="w-full">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="김환기, 이우환, 제프 쿤스 ..."
              className="w-full bg-transparent border border-[#333] rounded-full px-6 py-4 text-base text-[#e8e8e8] placeholder-[#555] focus:outline-none focus:border-[#555] transition-colors"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#888] hover:text-[#4ade80] transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </form>

        <div className="mt-12 text-left">
          <p className="text-sm font-semibold text-white mb-4">지금 인기 있는 작가</p>
        </div>
      </div>

      {/* Full-width marquee */}
      <div className="w-screen mt-2">
        <TrendingArtistsMarquee onArtistClick={handleArtistClick} />
      </div>
    </div>
  );
}
