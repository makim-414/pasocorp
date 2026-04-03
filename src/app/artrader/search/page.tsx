"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { searchArtists } from "@/lib/artists";

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = searchArtists(query);

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2" style={{ fontFamily: "var(--font-dutch)" }}>
        &ldquo;{query}&rdquo; 검색 결과
      </h1>
      <p className="text-sm text-[#555] mb-10">
        {results.length > 0 ? `${results.length}명의 작가를 찾았습니다` : "검색 결과가 없습니다"}
      </p>

      {results.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[#555] text-lg mb-4">일치하는 작가를 찾을 수 없습니다</p>
          <p className="text-[#444] text-sm">다른 검색어를 시도해 보세요</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((artist) => (
          <Link
            key={artist.slug}
            href={`/artrader/artist/${artist.slug}`}
            className="group block bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#4ade80]/30 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-white group-hover:text-[#4ade80] transition-colors">
                  {artist.nameKo}
                </h2>
                <p className="text-sm text-[#555]">{artist.nameEn}</p>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#4ade80] bg-[#4ade80]/10 px-2 py-1 rounded">
                {artist.category}
              </span>
            </div>

            <p className="text-xs text-[#666] mb-4 line-clamp-2">{artist.bio}</p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-[#111] rounded p-3">
                <p className="text-[9px] text-[#555] uppercase tracking-wider">평균 거래가</p>
                <p className="text-sm font-semibold text-[#e8e8e8] mt-1">{artist.stats.avgPrice}</p>
              </div>
              <div className="bg-[#111] rounded p-3">
                <p className="text-[9px] text-[#555] uppercase tracking-wider">낙찰률</p>
                <p className="text-sm font-semibold text-[#e8e8e8] mt-1">{artist.stats.hammerRate}</p>
              </div>
              <div className="bg-[#111] rounded p-3">
                <p className="text-[9px] text-[#555] uppercase tracking-wider">총 거래</p>
                <p className="text-sm font-semibold text-[#e8e8e8] mt-1">{artist.stats.totalTransactions.toLocaleString()}건</p>
              </div>
              <div className="bg-[#111] rounded p-3">
                <p className="text-[9px] text-[#555] uppercase tracking-wider">연간 성장률</p>
                <p className="text-sm font-semibold text-[#4ade80] mt-1">{artist.stats.annualGrowth}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {artist.tags.map((tag) => (
                <span key={tag} className="text-[10px] text-[#555] bg-[#111] px-2 py-0.5 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-[#1a1a1a] rounded w-64 mb-4" />
            <div className="h-4 bg-[#1a1a1a] rounded w-32 mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
