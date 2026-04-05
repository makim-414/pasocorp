"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import Link from "next/link";
import { searchArtists, artists } from "@/lib/artists";
import { incrementSearchCount } from "@/lib/search-counts";
import SearchInput from "../../components/SearchInput";

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const results = searchArtists(query);

  useEffect(() => {
    if (results.length === 1) {
      router.replace(`/artist/${results[0].slug}`);
    }
    results.forEach((artist) => incrementSearchCount(artist.slug));
  }, [query, results, router]);

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#111] border border-[#2a2a2a] rounded-lg text-sm text-[#888] hover:text-[#4ade80] hover:border-[#4ade80]/30 transition-all"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
        뒤로가기
      </button>
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
        &ldquo;{query}&rdquo; 검색 결과
      </h1>
      <p className="text-sm text-[#555] mb-6">
        {results.length > 0 ? `${results.length}명의 작가를 찾았습니다` : "검색 결과가 없습니다"}
      </p>

      <div className="mb-10 max-w-lg">
        <SearchInput variant="nav" initialQuery={query} />
      </div>

      {results.length === 0 && (
        <div className="py-10">
          <div className="text-center mb-10">
            <p className="text-[#555] text-lg mb-2">일치하는 작가를 찾을 수 없습니다</p>
            <p className="text-[#444] text-sm">다른 검색어를 시도하거나, 아래 추천 작가를 확인해 보세요</p>
          </div>
          <p className="text-xs text-[#555] uppercase tracking-widest mb-4">추천 작가</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {artists.slice(0, 8).map((a) => (
              <Link
                key={a.slug}
                href={`/artist/${a.slug}`}
                className="flex items-center gap-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg px-4 py-3 hover:border-[#4ade80]/30 transition-all group"
              >
                <div className="w-8 h-8 bg-[#111] rounded-full flex items-center justify-center text-xs text-[#4ade80] font-semibold shrink-0">
                  {a.nameKo[0]}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-[#e8e8e8] group-hover:text-[#4ade80] transition-colors truncate">{a.nameKo}</p>
                  <p className="text-[10px] text-[#555] truncate">{a.nameEn}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((artist) => (
          <Link
            key={artist.slug}
            href={`/artist/${artist.slug}`}
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
