"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getArtistBySlug, type ArtistAuctionRecord } from "@/lib/artists";
import RelatedNews from "@/components/RelatedNews";
import AuctionModal from "@/components/AuctionModal";
import { useExchangeRate, convertToKRW } from "@/lib/use-exchange-rate";

export default function ArtistPage() {
  const params = useParams();
  const exchangeRate = useExchangeRate();
  const slug = params.slug as string;
  const artist = getArtistBySlug(slug);
  const [selectedAuction, setSelectedAuction] = useState<ArtistAuctionRecord | null>(null);

  if (!artist) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#888] text-lg mb-4">작가를 찾을 수 없습니다</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#2a2a2a] rounded-lg text-sm text-[#888] hover:text-[#4ade80] hover:border-[#4ade80]/30 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-[#111] border border-[#2a2a2a] rounded-lg text-sm text-[#888] hover:text-[#4ade80] hover:border-[#4ade80]/30 transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          뒤로가기
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white" style={{ fontFamily: "var(--font-dutch)" }}>
              {artist.nameKo}
            </h1>
            <p className="text-lg text-[#555] mt-1">{artist.nameEn}</p>
            <div className="flex items-center gap-3 mt-3">
              <span className="text-xs text-[#888]">{artist.nationality}</span>
              <span className="text-[#333]">&middot;</span>
              <span className="text-xs text-[#888]">
                b. {artist.birthYear}
                {artist.deathYear ? ` — ${artist.deathYear}` : ""}
              </span>
              <span className="text-[#333]">&middot;</span>
              <span className="text-[10px] uppercase tracking-wider text-[#4ade80] bg-[#4ade80]/10 px-2 py-0.5 rounded">
                {artist.category}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 md:p-8 mb-8">
        <p className="text-[#999] leading-relaxed">{artist.bio}</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {[
          { label: "평균 거래가", value: artist.stats.avgPrice },
          { label: "총 거래 건수", value: `${artist.stats.totalTransactions.toLocaleString()}건` },
          { label: "낙찰률", value: artist.stats.hammerRate },
          { label: "연간 성장률", value: artist.stats.annualGrowth, isGrowth: true },
          { label: "최고 낙찰가", value: artist.stats.highestPrice },
        ].map((s) => (
          <div key={s.label} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4">
            <p className="text-[10px] tracking-wider text-[#555] uppercase mb-2">{s.label}</p>
            <p className={`text-lg md:text-xl font-semibold ${s.isGrowth ? "text-[#4ade80]" : "text-white"}`}>
              {s.value}
            </p>
          </div>
        ))}
      </div>

      {/* Price trend chart */}
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 md:p-8 mb-8">
        <h2 className="text-lg font-semibold text-white mb-6">
          거래가 추이
        </h2>
        <div className="flex justify-between text-[10px] text-[#555] mb-4">
          {["'16", "'17", "'18", "'19", "'20", "'21", "'22", "'23", "'24"].map((y) => (
            <span key={y}>{y}</span>
          ))}
        </div>
        <div className="relative h-48 md:h-64">
          <svg viewBox="0 0 800 200" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="artistChartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,170 C50,165 100,150 150,145 C200,140 250,120 300,100 C350,85 400,75 450,60 C500,55 550,65 600,50 C650,40 700,30 750,25 L800,20"
              fill="none"
              stroke="#4ade80"
              strokeWidth="2"
            />
            <path
              d="M0,170 C50,165 100,150 150,145 C200,140 250,120 300,100 C350,85 400,75 450,60 C500,55 550,65 600,50 C650,40 700,30 750,25 L800,20 L800,200 L0,200 Z"
              fill="url(#artistChartGrad)"
            />
          </svg>
        </div>
      </div>

      {/* Recent Auctions - Card Layout */}
      <div className="mb-8">
        <div className="border-t border-[#2a2a2a] pt-8 mb-6">
          <h2 className="text-lg font-semibold text-white">
            유사 옥션 거래 기록
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {artist.recentAuctions.map((auction, i) => (
            <button
              key={i}
              onClick={() => setSelectedAuction(auction)}
              className="text-left bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#4ade80]/30 transition-all cursor-pointer group"
            >
              {/* Thumbnail placeholder */}
              <div className="w-full aspect-[3/2] bg-[#111] flex items-center justify-center">
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
      </div>

      {/* Related News */}
      <RelatedNews artistNameKo={artist.nameKo} artistNameEn={artist.nameEn} />

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {artist.tags.map((tag) => (
          <span key={tag} className="text-xs text-[#555] bg-[#0a0a0a] border border-[#1a1a1a] px-3 py-1.5 rounded-lg">
            #{tag}
          </span>
        ))}
      </div>

      {/* Auction Detail Modal */}
      {selectedAuction && (
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
