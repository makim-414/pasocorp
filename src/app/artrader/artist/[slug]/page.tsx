"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getArtistBySlug, type ArtistAuctionRecord } from "@/lib/artists";
import ArtistCharts from "@/components/artrader/ArtistCharts";
import HeartButton from "@/components/artrader/HeartButton";
import AuctionModal from "@/components/artrader/AuctionModal";
import { useExchangeRate, convertToKRW } from "@/lib/use-exchange-rate";

export default function ArtistPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const artist = getArtistBySlug(slug);
  const [selectedAuction, setSelectedAuction] = useState<ArtistAuctionRecord | null>(null);
  const exchangeRate = useExchangeRate();

  if (!artist) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#888] text-lg mb-4">작가를 찾을 수 없습니다</p>
          <Link href="/artrader" className="text-[#4ade80] text-sm hover:underline">
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
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-xs text-[#555] hover:text-[#4ade80] transition-colors mb-4"
        >
          &larr; 뒤로가기
        </button>
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
        <h2 className="text-lg font-semibold text-white mb-4">작가 소개</h2>
        <p className="text-[#999] leading-relaxed">{artist.bio}</p>
      </div>

      {/* Education & Exhibitions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 md:p-8">
          <h2 className="text-lg font-semibold text-white mb-4">학력</h2>
          <ul className="space-y-2">
            {artist.education.map((edu) => (
              <li key={edu} className="text-sm text-[#999] flex items-start gap-2">
                <span className="text-[#4ade80] mt-1 shrink-0">•</span>
                {edu}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 md:p-8">
          <h2 className="text-lg font-semibold text-white mb-4">주요 전시</h2>
          <ul className="space-y-2">
            {artist.exhibitions.map((exh) => (
              <li key={exh} className="text-sm text-[#999] flex items-start gap-2">
                <span className="text-[#4ade80] mt-1 shrink-0">•</span>
                {exh}
              </li>
            ))}
          </ul>
        </div>
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

      {/* Price trend & Hammer rate charts */}
      <ArtistCharts auctions={artist.recentAuctions} hammerRate={artist.stats.hammerRate} />

      {/* Recent Auctions - Card Layout (click to view + purchase) */}
      <div className="mb-8">
        <div className="border-t border-[#2a2a2a] pt-8 mb-6">
          <h2 className="text-lg font-semibold text-white">유사 옥션 거래 기록</h2>
          <p className="text-xs text-[#555] mt-1">작품을 클릭하면 상세 정보 및 구매 요청이 가능합니다</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {artist.recentAuctions.map((auction, i) => (
            <button
              key={i}
              onClick={() => setSelectedAuction(auction)}
              className="text-left bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#4ade80]/30 transition-all cursor-pointer group"
            >
              <div className="relative w-full aspect-[3/2] bg-[#111] flex items-center justify-center overflow-hidden">
                <div className="absolute top-2 right-2 z-10">
                  <HeartButton artistSlug={slug} auctionIndex={i} size={20} />
                </div>
                {auction.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={auction.imageUrl}
                    alt={auction.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1" className="group-hover:stroke-[#4ade80]/30 transition-colors">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-base font-medium text-[#e8e8e8] group-hover:text-[#4ade80] transition-colors mb-1">{auction.title}</h3>
                <p className="text-xs text-[#666] mb-1">{artist.nameKo} | {auction.size}</p>
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
