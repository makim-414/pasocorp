"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { artists } from "@/lib/artists";

export default function ArtraderHome() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/artrader/search?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-light text-white mb-4" style={{ fontFamily: "var(--font-dutch)" }}>
          <span className="text-[#4ade80] font-semibold">Art</span>rader
        </h1>
        <p className="text-[#888] text-sm md:text-base mb-12">
          글로벌 미술 거래 데이터베이스 &middot; 작가 검색 &middot; 시장 분석
        </p>

        <form onSubmit={handleSearch} className="w-full">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="작가명을 입력하세요 (예: 이우환, 김환기)"
              className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-6 py-4 text-base text-[#e8e8e8] placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#4ade80] transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </form>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "거래 데이터", value: "15M+" },
            { label: "분석 작가", value: "120K+" },
            { label: "커버 경매사", value: "2,800+" },
            { label: "리포트 발행", value: "5,000+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-light text-[#4ade80]" style={{ fontFamily: "var(--font-dutch)" }}>{s.value}</p>
              <p className="mt-1 text-[10px] tracking-[0.15em] uppercase text-[#555]">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-xs text-[#555] uppercase tracking-widest mb-6">인기 작가</p>
          <div className="flex flex-wrap justify-center gap-3">
            {artists.slice(0, 6).map((artist) => (
              <button
                key={artist.slug}
                onClick={() => router.push(`/artrader/artist/${artist.slug}`)}
                className="px-4 py-2 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg text-sm text-[#888] hover:text-[#4ade80] hover:border-[#4ade80]/30 transition-all"
              >
                {artist.nameKo}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
