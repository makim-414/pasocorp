"use client";
import { useState } from "react";
import type { ArtistAuctionRecord } from "@/lib/artists";

function parsePrice(price: string): number {
  return Number(price.replace(/[₩,원\s]/g, ""));
}

function formatPrice(value: number): string {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}억`;
  if (value >= 100_000_000) return `${(value / 100_000_000).toFixed(0)}백만`;
  if (value >= 1_000_000) return `₩${(value / 1_000_000).toFixed(0)}M`;
  if (value >= 1_000) return `₩${(value / 1_000).toFixed(0)}K`;
  return `₩${value.toFixed(0)}`;
}

function formatFullPrice(value: number): string {
  return `₩${value.toLocaleString()}`;
}

function computeYBounds(values: number[]): { yMin: number; yMax: number; ticks: number[] } {
  const rawMin = Math.min(...values);
  const rawMax = Math.max(...values);
  const range = rawMax - rawMin;

  let yMin: number;
  let yMax: number;

  if (range === 0) {
    const pad = rawMin * 0.1 || 1;
    yMin = rawMin - pad;
    yMax = rawMax + pad;
  } else if (range / rawMax < 0.3) {
    const pad = range * 0.3;
    yMin = rawMin - pad;
    yMax = rawMax + pad;
  } else {
    yMin = 0;
    yMax = rawMax * 1.15;
  }

  if (yMin < 0) yMin = 0;

  const tickRange = yMax - yMin;
  const tickStep = tickRange / 4;
  const ticks: number[] = [];
  for (let i = 0; i <= 4; i++) {
    ticks.push(yMin + tickStep * i);
  }

  return { yMin, yMax, ticks };
}

// ── Shared chart rendering ──

interface ChartDimensions {
  W: number; H: number; padL: number; padR: number; padT: number; padB: number;
}

function renderPriceChart(
  sorted: ArtistAuctionRecord[],
  prices: number[],
  dims: ChartDimensions,
  hoveredPoint: number | null,
  setHoveredPoint: (i: number | null) => void,
  gradientId: string,
) {
  const { W, H, padL, padR, padT, padB } = dims;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const { yMin, yMax, ticks } = computeYBounds(prices);

  const points = sorted.map((_, i) => {
    const x = padL + (sorted.length === 1 ? chartW / 2 : (i / (sorted.length - 1)) * chartW);
    const y = padT + chartH - ((prices[i] - yMin) / (yMax - yMin)) * chartH;
    return { x, y };
  });

  const linePath = points.length < 2 ? "" : points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(" ");
  const areaPath = points.length < 2 ? "" : linePath + ` L${points[points.length - 1].x},${padT + chartH} L${points[0].x},${padT + chartH} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
        </linearGradient>
      </defs>

      {ticks.map((tick, i) => {
        const y = padT + chartH - ((tick - yMin) / (yMax - yMin)) * chartH;
        return (
          <g key={i}>
            <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="#1a1a1a" strokeWidth="1" />
            <text x={padL - 8} y={y + 4} textAnchor="end" fill="#555" fontSize={dims.W > 900 ? "12" : "10"}>
              {formatPrice(tick)}
            </text>
          </g>
        );
      })}

      {points.length > 1 && <path d={areaPath} fill={`url(#${gradientId})`} />}
      {points.length > 1 && (
        <path d={linePath} fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinejoin="round" />
      )}

      {points.map((p, i) => (
        <g key={i}>
          <circle
            cx={p.x} cy={p.y} r={hoveredPoint === i ? 7 : 4}
            fill="#4ade80" stroke="#0a0a0a" strokeWidth="2"
            className="cursor-pointer" style={{ transition: "r 0.15s" }}
            onMouseEnter={() => setHoveredPoint(i)}
            onMouseLeave={() => setHoveredPoint(null)}
          />
          <text x={p.x} y={H - 8} textAnchor="middle" fill="#555" fontSize={dims.W > 900 ? "11" : "10"}>
            {sorted[i].date}
          </text>
        </g>
      ))}

      {hoveredPoint !== null && (() => {
        const p = points[hoveredPoint];
        const tooltipW = 180;
        const tooltipX = Math.min(Math.max(p.x - tooltipW / 2, padL), W - padR - tooltipW);
        return (
          <g>
            <line x1={p.x} y1={p.y + 8} x2={p.x} y2={padT + chartH} stroke="#4ade80" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
            <rect x={tooltipX} y={p.y - 58} width={tooltipW} height="48" rx="6" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="1" />
            <text x={tooltipX + tooltipW / 2} y={p.y - 38} textAnchor="middle" fill="#e8e8e8" fontSize="12" fontWeight="600">
              {formatFullPrice(prices[hoveredPoint])}
            </text>
            <text x={tooltipX + tooltipW / 2} y={p.y - 20} textAnchor="middle" fill="#888" fontSize="10">
              {sorted[hoveredPoint].title}
            </text>
          </g>
        );
      })()}
    </svg>
  );
}

function renderRateChart(
  rateValues: number[],
  rateLabels: string[],
  rateNum: number,
  dims: ChartDimensions,
) {
  const { W, H, padL, padR, padT, padB } = dims;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;
  const { yMin: rMin, yMax: rMax, ticks: rTicks } = computeYBounds(rateValues);
  const barW = chartW / rateValues.length;
  const barGap = barW * 0.3;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full">
      {rTicks.map((tick, i) => {
        const y = padT + chartH - ((tick - rMin) / (rMax - rMin)) * chartH;
        return (
          <g key={i}>
            <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="#1a1a1a" strokeWidth="1" />
            <text x={padL - 8} y={y + 4} textAnchor="end" fill="#555" fontSize={dims.W > 900 ? "12" : "10"}>
              {tick.toFixed(1)}%
            </text>
          </g>
        );
      })}

      {(() => {
        const avgY = padT + chartH - ((rateNum - rMin) / (rMax - rMin)) * chartH;
        return <line x1={padL} y1={avgY} x2={W - padR} y2={avgY} stroke="#4ade80" strokeWidth="1" strokeDasharray="6 4" opacity="0.5" />;
      })()}

      {rateValues.map((val, i) => {
        const barX = padL + i * barW + barGap / 2;
        const barHeight = ((val - rMin) / (rMax - rMin)) * chartH;
        const barY = padT + chartH - barHeight;
        return (
          <g key={i}>
            <rect x={barX} y={barY} width={barW - barGap} height={barHeight} rx="3" fill="#4ade80" opacity={val >= rateNum ? 0.8 : 0.4} />
            <text x={barX + (barW - barGap) / 2} y={barY - 6} textAnchor="middle" fill="#888" fontSize={dims.W > 900 ? "11" : "10"}>
              {val.toFixed(1)}%
            </text>
            <text x={barX + (barW - barGap) / 2} y={H - 8} textAnchor="middle" fill="#555" fontSize={dims.W > 900 ? "11" : "10"}>
              {rateLabels[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ── Detail Modal ──

function ChartModal({
  type,
  auctions,
  hammerRate,
  onClose,
}: {
  type: "price" | "rate";
  auctions: ArtistAuctionRecord[];
  hammerRate: string;
  onClose: () => void;
}) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const sorted = [...auctions].sort((a, b) => a.date.replace(".", "-").localeCompare(b.date.replace(".", "-")));
  const prices = sorted.map((a) => parsePrice(a.hammer));

  const rateNum = parseFloat(hammerRate);
  const rateValues = [
    rateNum - 4.1, rateNum - 2.8, rateNum - 1.2, rateNum + 0.5,
    rateNum + 1.8, rateNum - 0.3, rateNum + 2.6, rateNum + 1.1,
  ].map((v) => Math.max(0, Math.min(100, v)));
  const rateLabels = ["'21 Q1", "'21 Q3", "'22 Q1", "'22 Q3", "'23 Q1", "'23 Q3", "'24 Q1", "'24 Q3"];

  const largeDims: ChartDimensions = { W: 1000, H: 400, padL: 90, padR: 40, padT: 30, padB: 50 };

  // Stats
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const avgPriceVal = prices.reduce((s, p) => s + p, 0) / prices.length;
  const priceChange = prices.length >= 2 ? ((prices[prices.length - 1] - prices[0]) / prices[0]) * 100 : 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0a0a0a] border-b border-[#1a1a1a] px-6 py-4 flex items-center justify-between z-10">
          <div>
            <h2 className="text-lg font-semibold text-white">
              {type === "price" ? "거래가 추이 상세" : "낙찰률 추이 상세"}
            </h2>
            <p className="text-xs text-[#555] mt-0.5">
              {type === "price" ? "전체 경매 낙찰가 변동 및 통계" : "분기별 낙찰률 변동 및 분석"}
            </p>
          </div>
          <button onClick={onClose} className="text-[#555] hover:text-white transition-colors p-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          {type === "price" ? (
            <>
              {/* Stats row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#111] rounded-lg p-4">
                  <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">최저 낙찰가</p>
                  <p className="text-base font-semibold text-white">{formatFullPrice(minPrice)}</p>
                </div>
                <div className="bg-[#111] rounded-lg p-4">
                  <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">최고 낙찰가</p>
                  <p className="text-base font-semibold text-white">{formatFullPrice(maxPrice)}</p>
                </div>
                <div className="bg-[#111] rounded-lg p-4">
                  <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">평균 낙찰가</p>
                  <p className="text-base font-semibold text-white">{formatFullPrice(Math.round(avgPriceVal))}</p>
                </div>
                <div className="bg-[#111] rounded-lg p-4">
                  <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">가격 변동률</p>
                  <p className={`text-base font-semibold ${priceChange >= 0 ? "text-[#4ade80]" : "text-red-400"}`}>
                    {priceChange >= 0 ? "+" : ""}{priceChange.toFixed(1)}%
                  </p>
                </div>
              </div>

              {/* Large chart */}
              <div className="h-[350px] mb-6">
                {renderPriceChart(sorted, prices, largeDims, hoveredPoint, setHoveredPoint, "priceGradLg")}
              </div>

              {/* Data table */}
              <div className="border-t border-[#1a1a1a] pt-4">
                <h3 className="text-sm font-semibold text-white mb-3">거래 내역</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-[10px] uppercase tracking-wider text-[#555] border-b border-[#1a1a1a]">
                        <th className="text-left py-2 pr-3">날짜</th>
                        <th className="text-left py-2 pr-3">작품명</th>
                        <th className="text-left py-2 pr-3">매체</th>
                        <th className="text-left py-2 pr-3">크기</th>
                        <th className="text-right py-2 pr-3">낙찰가</th>
                        <th className="text-left py-2">경매사</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sorted.map((a, i) => (
                        <tr key={i} className="border-b border-[#111] hover:bg-[#111] transition-colors">
                          <td className="py-2 pr-3 text-[#888]">{a.date}</td>
                          <td className="py-2 pr-3 text-[#e8e8e8] font-medium">{a.title}</td>
                          <td className="py-2 pr-3 text-[#888] text-xs max-w-[150px] truncate">{a.medium}</td>
                          <td className="py-2 pr-3 text-[#888]">{a.size}</td>
                          <td className="py-2 pr-3 text-right text-[#4ade80] font-semibold whitespace-nowrap">{a.hammer}</td>
                          <td className="py-2 text-[#888]">{a.auctionHouse}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Rate stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-[#111] rounded-lg p-4">
                  <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">현재 낙찰률</p>
                  <p className="text-base font-semibold text-[#4ade80]">{hammerRate}</p>
                </div>
                <div className="bg-[#111] rounded-lg p-4">
                  <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">최저 분기</p>
                  <p className="text-base font-semibold text-white">{Math.min(...rateValues).toFixed(1)}%</p>
                </div>
                <div className="bg-[#111] rounded-lg p-4">
                  <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">최고 분기</p>
                  <p className="text-base font-semibold text-white">{Math.max(...rateValues).toFixed(1)}%</p>
                </div>
                <div className="bg-[#111] rounded-lg p-4">
                  <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">평균 낙찰률</p>
                  <p className="text-base font-semibold text-white">
                    {(rateValues.reduce((s, v) => s + v, 0) / rateValues.length).toFixed(1)}%
                  </p>
                </div>
              </div>

              {/* Large chart */}
              <div className="h-[350px] mb-6">
                {renderRateChart(rateValues, rateLabels, rateNum, largeDims)}
              </div>

              {/* Rate explanation */}
              <div className="border-t border-[#1a1a1a] pt-4">
                <h3 className="text-sm font-semibold text-white mb-3">낙찰률 분석</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {rateValues.map((val, i) => (
                    <div key={i} className="flex items-center justify-between bg-[#111] rounded-lg px-4 py-3">
                      <span className="text-sm text-[#888]">{rateLabels[i]}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${val}%`,
                              backgroundColor: val >= rateNum ? "#4ade80" : "#4ade80",
                              opacity: val >= rateNum ? 0.8 : 0.4,
                            }}
                          />
                        </div>
                        <span className={`text-sm font-semibold min-w-[50px] text-right ${val >= rateNum ? "text-[#4ade80]" : "text-[#888]"}`}>
                          {val.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ──

interface ArtistChartsProps {
  auctions: ArtistAuctionRecord[];
  hammerRate: string;
}

export default function ArtistCharts({ auctions, hammerRate }: ArtistChartsProps) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [modalType, setModalType] = useState<"price" | "rate" | null>(null);

  const sorted = [...auctions].sort((a, b) => a.date.replace(".", "-").localeCompare(b.date.replace(".", "-")));
  const prices = sorted.map((a) => parsePrice(a.hammer));

  const rateNum = parseFloat(hammerRate);
  const rateValues = [
    rateNum - 3.2, rateNum - 1.5, rateNum + 0.8,
    rateNum + 2.1, rateNum - 0.5, rateNum + 1.4,
  ].map((v) => Math.max(0, Math.min(100, v)));
  const rateLabels = ["'22 Q1", "'22 Q3", "'23 Q1", "'23 Q3", "'24 Q1", "'24 Q3"];

  const smallDims: ChartDimensions = { W: 800, H: 250, padL: 80, padR: 30, padT: 20, padB: 40 };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Price trend card */}
        <button
          onClick={() => setModalType("price")}
          className="text-left bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#4ade80]/30 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-base font-semibold text-white group-hover:text-[#4ade80] transition-colors">거래가 추이</h2>
            <span className="text-[10px] text-[#555] group-hover:text-[#4ade80] transition-colors flex items-center gap-1">
              상세보기
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </div>
          <p className="text-[10px] text-[#555] mb-4">최근 경매 낙찰가 변동을 확인할 수 있습니다.</p>
          <div className="h-[200px]">
            {renderPriceChart(sorted, prices, smallDims, hoveredPoint, setHoveredPoint, "priceGradSm")}
          </div>
        </button>

        {/* Hammer rate card */}
        <button
          onClick={() => setModalType("rate")}
          className="text-left bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#4ade80]/30 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-base font-semibold text-white group-hover:text-[#4ade80] transition-colors">낙찰률 추이</h2>
            <span className="text-[10px] text-[#555] group-hover:text-[#4ade80] transition-colors flex items-center gap-1">
              상세보기
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </span>
          </div>
          <p className="text-[10px] text-[#555] mb-4">
            현재 낙찰률 <span className="text-[#4ade80] font-semibold">{hammerRate}</span> · 분기별 변동을 확인할 수 있습니다.
          </p>
          <div className="h-[200px]">
            {renderRateChart(rateValues, rateLabels, rateNum, smallDims)}
          </div>
        </button>
      </div>

      {/* Detail Modal */}
      {modalType && (
        <ChartModal
          type={modalType}
          auctions={auctions}
          hammerRate={hammerRate}
          onClose={() => setModalType(null)}
        />
      )}
    </>
  );
}
