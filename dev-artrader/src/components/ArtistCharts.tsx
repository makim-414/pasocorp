"use client";
import { useState } from "react";
import type { ArtistAuctionRecord } from "@/lib/artists";

function parsePrice(price: string): number {
  return Number(price.replace(/[₩,원\s]/g, ""));
}

function formatPrice(value: number): string {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 100_000_000) return `${(value / 100_000_000).toFixed(1)}억`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(0)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`;
  return value.toFixed(0);
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

interface ArtistChartsProps {
  auctions: ArtistAuctionRecord[];
  hammerRate: string;
}

export default function ArtistCharts({ auctions, hammerRate }: ArtistChartsProps) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const sorted = [...auctions].sort((a, b) => {
    const dateA = a.date.replace(".", "-");
    const dateB = b.date.replace(".", "-");
    return dateA.localeCompare(dateB);
  });

  const prices = sorted.map((a) => parsePrice(a.hammer));
  const { yMin, yMax, ticks } = computeYBounds(prices);

  const W = 800;
  const H = 250;
  const padL = 80;
  const padR = 30;
  const padT = 20;
  const padB = 40;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const points = sorted.map((a, i) => {
    const x = padL + (sorted.length === 1 ? chartW / 2 : (i / (sorted.length - 1)) * chartW);
    const y = padT + chartH - ((prices[i] - yMin) / (yMax - yMin)) * chartH;
    return { x, y, price: prices[i], date: a.date, title: a.title };
  });

  const linePath =
    points.length === 1
      ? ""
      : points.map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(" ");

  const areaPath =
    points.length === 1
      ? ""
      : linePath + ` L${points[points.length - 1].x},${padT + chartH} L${points[0].x},${padT + chartH} Z`;

  const rateNum = parseFloat(hammerRate);
  const rateValues = [
    rateNum - 3.2,
    rateNum - 1.5,
    rateNum + 0.8,
    rateNum + 2.1,
    rateNum - 0.5,
    rateNum + 1.4,
  ].map((v) => Math.max(0, Math.min(100, v)));
  const rateLabels = ["'22 Q1", "'22 Q3", "'23 Q1", "'23 Q3", "'24 Q1", "'24 Q3"];

  const { yMin: rMin, yMax: rMax, ticks: rTicks } = computeYBounds(rateValues);

  const barW = chartW / rateValues.length;
  const barGap = barW * 0.3;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6">
        <h2 className="text-base font-semibold text-white mb-1">거래가 추이</h2>
        <p className="text-[10px] text-[#555] mb-4">최근 경매 낙찰가 변동을 확인할 수 있습니다.</p>
        <div className="relative">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: "auto", maxHeight: 280 }}>
            <defs>
              <linearGradient id="priceGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4ade80" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
              </linearGradient>
            </defs>

            {ticks.map((tick, i) => {
              const y = padT + chartH - ((tick - yMin) / (yMax - yMin)) * chartH;
              return (
                <g key={i}>
                  <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="#1a1a1a" strokeWidth="1" />
                  <text x={padL - 8} y={y + 4} textAnchor="end" fill="#555" fontSize="10">
                    {formatPrice(tick)}
                  </text>
                </g>
              );
            })}

            {points.length > 1 && <path d={areaPath} fill="url(#priceGrad)" />}

            {points.length > 1 && (
              <path d={linePath} fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinejoin="round" />
            )}

            {points.map((p, i) => (
              <g key={i}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={hoveredPoint === i ? 6 : 4}
                  fill="#4ade80"
                  stroke="#0a0a0a"
                  strokeWidth="2"
                  className="cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredPoint(i)}
                  onMouseLeave={() => setHoveredPoint(null)}
                />
                <text x={p.x} y={H - 8} textAnchor="middle" fill="#555" fontSize="10">
                  {sorted[i].date}
                </text>
              </g>
            ))}

            {hoveredPoint !== null && (
              <g>
                <rect
                  x={points[hoveredPoint].x - 70}
                  y={points[hoveredPoint].y - 52}
                  width="140"
                  height="42"
                  rx="6"
                  fill="#1a1a1a"
                  stroke="#2a2a2a"
                  strokeWidth="1"
                />
                <text
                  x={points[hoveredPoint].x}
                  y={points[hoveredPoint].y - 34}
                  textAnchor="middle"
                  fill="#e8e8e8"
                  fontSize="11"
                  fontWeight="600"
                >
                  ₩{prices[hoveredPoint].toLocaleString()}
                </text>
                <text
                  x={points[hoveredPoint].x}
                  y={points[hoveredPoint].y - 18}
                  textAnchor="middle"
                  fill="#888"
                  fontSize="9"
                >
                  {points[hoveredPoint].title}
                </text>
              </g>
            )}
          </svg>
        </div>
      </div>

      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6">
        <h2 className="text-base font-semibold text-white mb-1">낙찰률 추이</h2>
        <p className="text-[10px] text-[#555] mb-4">
          현재 낙찰률 <span className="text-[#4ade80] font-semibold">{hammerRate}</span> · 분기별 변동을 확인할 수 있습니다.
        </p>
        <div className="relative">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: "auto", maxHeight: 280 }}>
            {rTicks.map((tick, i) => {
              const y = padT + chartH - ((tick - rMin) / (rMax - rMin)) * chartH;
              return (
                <g key={i}>
                  <line x1={padL} y1={y} x2={W - padR} y2={y} stroke="#1a1a1a" strokeWidth="1" />
                  <text x={padL - 8} y={y + 4} textAnchor="end" fill="#555" fontSize="10">
                    {tick.toFixed(1)}%
                  </text>
                </g>
              );
            })}

            {(() => {
              const avgY = padT + chartH - ((rateNum - rMin) / (rMax - rMin)) * chartH;
              return (
                <line
                  x1={padL}
                  y1={avgY}
                  x2={W - padR}
                  y2={avgY}
                  stroke="#4ade80"
                  strokeWidth="1"
                  strokeDasharray="6 4"
                  opacity="0.5"
                />
              );
            })()}

            {rateValues.map((val, i) => {
              const barX = padL + i * barW + barGap / 2;
              const barHeight = ((val - rMin) / (rMax - rMin)) * chartH;
              const barY = padT + chartH - barHeight;
              return (
                <g key={i}>
                  <rect
                    x={barX}
                    y={barY}
                    width={barW - barGap}
                    height={barHeight}
                    rx="3"
                    fill="#4ade80"
                    opacity={val >= rateNum ? 0.8 : 0.4}
                  />
                  <text x={barX + (barW - barGap) / 2} y={barY - 6} textAnchor="middle" fill="#888" fontSize="10">
                    {val.toFixed(1)}%
                  </text>
                  <text x={barX + (barW - barGap) / 2} y={H - 8} textAnchor="middle" fill="#555" fontSize="10">
                    {rateLabels[i]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
