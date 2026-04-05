"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { searchArtists, type ArtistAuctionRecord } from "@/lib/artists";
import { incrementSearchCount } from "@/lib/search-counts";
import AuctionModal from "@/components/AuctionModal";
import HeartButton from "@/components/HeartButton";
import { useExchangeRate, convertToKRW } from "@/lib/use-exchange-rate";
import SearchInput from "../../components/SearchInput";

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const results = searchArtists(query);
  const artist = results[0] ?? null;
  const exchangeRate = useExchangeRate();
  const [selectedAuction, setSelectedAuction] = useState<ArtistAuctionRecord | null>(null);

  useEffect(() => {
    results.forEach((a) => incrementSearchCount(a.slug));
  }, [query, results]);

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
        {artist
          ? `${artist.nameKo}의 작품 ${artist.recentAuctions.length}점`
          : "검색 결과가 없습니다"}
      </p>

      <div className="mb-10 max-w-lg">
        <SearchInput variant="nav" initialQuery={query} />
      </div>

      {!artist && (
        <div className="text-center py-20">
          <p className="text-[#555] text-lg mb-4">일치하는 작가를 찾을 수 없습니다</p>
          <p className="text-[#444] text-sm">다른 검색어를 시도해 보세요</p>
        </div>
      )}

      {artist && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {artist.recentAuctions.map((auction, i) => (
            <button
              key={i}
              onClick={() => setSelectedAuction(auction)}
              className="text-left bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#4ade80]/30 transition-all cursor-pointer group"
            >
              <div className="relative w-full aspect-[3/2] bg-[#111] flex items-center justify-center">
                <div className="absolute top-2 right-2 z-10">
                  <HeartButton artistSlug={artist.slug} auctionIndex={i} size={20} />
                </div>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1" className="group-hover:stroke-[#4ade80]/30 transition-colors">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="m21 15-5-5L5 21" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className="text-base font-medium text-[#e8e8e8] group-hover:text-[#4ade80] transition-colors mb-1">{auction.title}</h3>
                <p className="text-xs text-[#666] mb-1">
                  {artist.nameKo} | {auction.size}
                </p>
                <p className="text-xs text-[#555] mb-4">{auction.medium}</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] text-[#555] mb-0.5">{auction.date}</p>
                    <p className="text-lg font-semibold text-[#e8e8e8]">{auction.hammer}</p>
                    {exchangeRate && (() => {
                      const krw = convertToKRW(auction.hammer, exchangeRate);
                      return krw ? <p className="text-[11px] text-[#666] mt-0.5">{krw}</p> : null;
                    })()}
                  </div>
                  <span className="text-[10px] text-[#4ade80] bg-[#4ade80]/10 px-2 py-1 rounded">
                    {auction.auctionHouse}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {selectedAuction && artist && (
        <AuctionModal
          auction={selectedAuction}
          allAuctions={artist.recentAuctions}
          artistName={artist.nameKo}
          onClose={() => setSelectedAuction(null)}
        />
      )}
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
