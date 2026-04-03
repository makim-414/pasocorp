"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getArtistBySlug } from "@/lib/artists";

export default function ArtistPage() {
  const params = useParams();
  const slug = params.slug as string;
  const artist = getArtistBySlug(slug);

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
        <Link href="/artrader" className="text-xs text-[#555] hover:text-[#4ade80] transition-colors mb-4 inline-block">
          &larr; 홈으로
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

      {/* Price trend chart (mock) */}
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

      {/* Recent Auctions */}
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 md:p-8 mb-8">
        <h2 className="text-lg font-semibold text-white mb-6">
          최근 경매 기록
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-[10px] uppercase tracking-wider text-[#555] border-b border-[#1a1a1a]">
                <th className="text-left py-3 pr-4">작품명</th>
                <th className="text-left py-3 pr-4">제작년도</th>
                <th className="text-left py-3 pr-4">매체</th>
                <th className="text-left py-3 pr-4">크기</th>
                <th className="text-right py-3 pr-4">낙찰가</th>
                <th className="text-left py-3 pr-4">경매사</th>
                <th className="text-left py-3">날짜</th>
              </tr>
            </thead>
            <tbody>
              {artist.recentAuctions.map((auction, i) => (
                <tr key={i} className="border-b border-[#111] hover:bg-[#111] transition-colors">
                  <td className="py-3 pr-4 text-[#e8e8e8] font-medium">{auction.title}</td>
                  <td className="py-3 pr-4 text-[#888]">{auction.year}</td>
                  <td className="py-3 pr-4 text-[#888] text-xs max-w-[200px] truncate">{auction.medium}</td>
                  <td className="py-3 pr-4 text-[#888]">{auction.size}</td>
                  <td className="py-3 pr-4 text-right text-[#4ade80] font-semibold whitespace-nowrap">{auction.hammer}</td>
                  <td className="py-3 pr-4 text-[#888]">{auction.auctionHouse}</td>
                  <td className="py-3 text-[#888]">{auction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
    </div>
  );
}
