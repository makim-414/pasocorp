"use client";
import { useEffect } from "react";
import type { ArtistAuctionRecord } from "@/lib/artists";

interface Props {
  auction: ArtistAuctionRecord;
  allAuctions: ArtistAuctionRecord[];
  artistName: string;
  onClose: () => void;
}

function parsePrice(hammer: string): number {
  const num = hammer.replace(/[^0-9]/g, "");
  return parseInt(num, 10) || 0;
}

function parseYear(date: string): number {
  const m = date.match(/(\d{4})/);
  return m ? parseInt(m[1], 10) : 2024;
}

export default function AuctionModal({ auction, allAuctions, artistName, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const currentPrice = parsePrice(auction.hammer);
  const prices = allAuctions.map((a) => ({
    price: parsePrice(a.hammer),
    year: parseYear(a.date),
    title: a.title,
    isCurrent: a === auction,
  })).sort((a, b) => a.year - b.year);

  const maxPrice = Math.max(...prices.map((p) => p.price));
  const minYear = Math.min(...prices.map((p) => p.year));
  const maxYear = Math.max(...prices.map((p) => p.year));
  const yearSpan = maxYear - minYear || 1;

  const points = prices.map((p) => ({
    ...p,
    x: 60 + ((p.year - minYear) / yearSpan) * 680,
    y: 20 + (1 - p.price / maxPrice) * 160,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
  const areaPath = `${linePath} L${points[points.length - 1].x},190 L${points[0].x},190 Z`;

  const currentPoint = points.find((p) => p.isCurrent);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#111] border border-[#2a2a2a] text-[#888] hover:text-white hover:border-[#4ade80]/30 transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Artwork image placeholder */}
        <div className="w-full aspect-[4/3] bg-[#111] flex items-center justify-center rounded-t-2xl">
          <div className="text-center px-6">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1" className="mx-auto mb-3">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
            <p className="text-[#444] text-sm">작품 이미지</p>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 md:p-8">
          <p className="text-[#4ade80] text-sm mb-1">{artistName}</p>
          <h2 className="text-2xl font-semibold text-white mb-1">{auction.title}</h2>
          <p className="text-sm text-[#666] mb-6">{auction.medium} | {auction.year}</p>

          <div className="space-y-3 mb-8">
            {[
              { label: "크기", value: auction.size },
              { label: "경매사", value: auction.auctionHouse },
              { label: "경매일", value: auction.date },
              { label: "낙찰가", value: auction.hammer, highlight: true },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between py-2 border-b border-[#1a1a1a]">
                <span className="text-sm font-medium text-[#888]">{row.label}</span>
                <span className={`text-sm ${row.highlight ? "text-[#4ade80] font-semibold text-base" : "text-[#e8e8e8]"}`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Price position chart */}
          <div className="bg-[#111] border border-[#1a1a1a] rounded-lg p-5">
            <h3 className="text-sm font-semibold text-white mb-4">전체 거래가 추이에서의 위치</h3>
            <svg viewBox="0 0 800 220" className="w-full" style={{ height: "200px" }}>
              <defs>
                <linearGradient id="modalChartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4ade80" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((r) => (
                <line key={r} x1="60" y1={20 + r * 160} x2="740" y2={20 + r * 160} stroke="#1a1a1a" strokeWidth="1" />
              ))}

              {/* Area + line */}
              <path d={areaPath} fill="url(#modalChartGrad)" />
              <path d={linePath} fill="none" stroke="#4ade80" strokeWidth="2" />

              {/* All points */}
              {points.map((p, i) => (
                <circle
                  key={i}
                  cx={p.x}
                  cy={p.y}
                  r={p.isCurrent ? 7 : 4}
                  fill={p.isCurrent ? "#4ade80" : "#0a0a0a"}
                  stroke={p.isCurrent ? "#4ade80" : "#4ade80"}
                  strokeWidth={p.isCurrent ? 3 : 1.5}
                />
              ))}

              {/* Current point label */}
              {currentPoint && (
                <>
                  <line
                    x1={currentPoint.x}
                    y1={currentPoint.y + 10}
                    x2={currentPoint.x}
                    y2={190}
                    stroke="#4ade80"
                    strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity="0.5"
                  />
                  <rect
                    x={currentPoint.x - 55}
                    y={currentPoint.y - 32}
                    width="110"
                    height="22"
                    rx="4"
                    fill="#4ade80"
                  />
                  <text
                    x={currentPoint.x}
                    y={currentPoint.y - 17}
                    textAnchor="middle"
                    fill="#000"
                    fontSize="11"
                    fontWeight="600"
                  >
                    {auction.hammer}
                  </text>
                </>
              )}

              {/* Year labels */}
              {points.map((p, i) => (
                <text key={i} x={p.x} y={208} textAnchor="middle" fill="#555" fontSize="10">
                  {p.year}
                </text>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
