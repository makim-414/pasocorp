"use client";
import { useEffect, useState } from "react";
import type { ArtistAuctionRecord } from "@/lib/artists";
import { useExchangeRate, convertToKRW } from "@/lib/use-exchange-rate";

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
  const [showPurchaseConfirm, setShowPurchaseConfirm] = useState(false);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [showConditionDetail, setShowConditionDetail] = useState(false);
  const exchangeRate = useExchangeRate();
  const krwPrice = exchangeRate ? convertToKRW(auction.hammer, exchangeRate) : null;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

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

  const conditionStatus = auction.condition?.status || "양호";
  const hasDamage = conditionStatus === "손상 확인됨";

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

          {/* Info rows */}
          <div className="space-y-3 mb-6">
            {[
              { label: "프로비넌스", value: auction.provenance || "확인됨" },
              { label: "작가 서명", value: auction.signature || "확인됨" },
              { label: "프레임", value: auction.frame || "프레이밍 완료" },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between py-2 border-b border-[#1a1a1a]">
                <span className="text-sm font-medium text-[#888]">{row.label}</span>
                <span className="text-sm text-[#e8e8e8]">{row.value}</span>
              </div>
            ))}

            {/* Condition row - clickable if damaged */}
            <div className="flex items-center justify-between py-2 border-b border-[#1a1a1a]">
              <span className="text-sm font-medium text-[#888]">작품 손상</span>
              {hasDamage ? (
                <button
                  onClick={() => setShowConditionDetail(true)}
                  className="text-sm text-[#888] hover:text-[#ef4444] transition-colors underline decoration-dashed underline-offset-2 cursor-pointer"
                >
                  손상 확인됨
                </button>
              ) : (
                <span className="text-sm text-[#e8e8e8]">양호</span>
              )}
            </div>

            {[
              { label: "에디션", value: auction.edition || "-" },
              { label: "크기", value: auction.size },
              { label: "경매사", value: auction.auctionHouse },
              { label: "경매일", value: auction.date },
              { label: "가격", value: auction.hammer, highlight: true },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between py-2 border-b border-[#1a1a1a]">
                <span className="text-sm font-medium text-[#888]">{row.label}</span>
                <div className="text-right">
                  <span className={`text-sm ${row.highlight ? "text-[#4ade80] font-semibold text-base" : "text-[#e8e8e8]"}`}>
                    {row.value}
                  </span>
                  {row.highlight && krwPrice && (
                    <p className="text-[11px] text-[#666] mt-0.5">{krwPrice}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Purchase button */}
          <button
            onClick={() => setShowPurchaseConfirm(true)}
            className="w-full py-4 bg-[#4ade80] text-black font-semibold rounded-xl hover:bg-[#22c55e] transition-colors text-base mb-8"
          >
            구매 요청하기
          </button>

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
              {[0, 0.25, 0.5, 0.75, 1].map((r) => (
                <line key={r} x1="60" y1={20 + r * 160} x2="740" y2={20 + r * 160} stroke="#1a1a1a" strokeWidth="1" />
              ))}
              <path d={areaPath} fill="url(#modalChartGrad)" />
              <path d={linePath} fill="none" stroke="#4ade80" strokeWidth="2" />
              {points.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={p.isCurrent ? 7 : 4} fill={p.isCurrent ? "#4ade80" : "#0a0a0a"} stroke="#4ade80" strokeWidth={p.isCurrent ? 3 : 1.5} />
              ))}
              {currentPoint && (
                <>
                  <line x1={currentPoint.x} y1={currentPoint.y + 10} x2={currentPoint.x} y2={190} stroke="#4ade80" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
                  <rect x={currentPoint.x - 55} y={currentPoint.y - 32} width="110" height="22" rx="4" fill="#4ade80" />
                  <text x={currentPoint.x} y={currentPoint.y - 17} textAnchor="middle" fill="#000" fontSize="11" fontWeight="600">{auction.hammer}</text>
                </>
              )}
              {points.map((p, i) => (
                <text key={i} x={p.x} y={208} textAnchor="middle" fill="#555" fontSize="10">{p.year}</text>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* Purchase Confirm Modal */}
      {showPurchaseConfirm && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowPurchaseConfirm(false)} />
          <div className="relative bg-[#111] border border-[#2a2a2a] rounded-2xl w-full max-w-sm p-6">
            {!purchaseComplete ? (
              <>
                <h3 className="text-lg font-semibold text-white mb-3">구매 요청 확인</h3>
                <p className="text-sm text-[#888] mb-2">
                  아래 작품의 구매를 요청하시겠습니까?
                </p>
                <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4 mb-6">
                  <p className="text-sm text-[#e8e8e8] font-medium">{auction.title}</p>
                  <p className="text-xs text-[#666] mt-1">{artistName}</p>
                  <p className="text-base text-[#4ade80] font-semibold mt-2">{auction.hammer}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowPurchaseConfirm(false)}
                    className="flex-1 py-3 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg text-sm text-[#888] hover:text-white transition-colors"
                  >
                    취소
                  </button>
                  <button
                    onClick={() => setPurchaseComplete(true)}
                    className="flex-1 py-3 bg-[#4ade80] text-black font-semibold rounded-lg hover:bg-[#22c55e] transition-colors text-sm"
                  >
                    구매 요청
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-center py-4">
                  <div className="w-12 h-12 bg-[#4ade80]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">구매 요청이 완료되었어요</h3>
                  <p className="text-sm text-[#888]">담당자 확인 후 연락드리겠습니다.</p>
                </div>
                <button
                  onClick={() => { setPurchaseComplete(false); setShowPurchaseConfirm(false); }}
                  className="w-full py-3 mt-4 bg-[#4ade80] text-black font-semibold rounded-lg hover:bg-[#22c55e] transition-colors text-sm"
                >
                  확인
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Condition Detail Modal */}
      {showConditionDetail && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowConditionDetail(false)} />
          <div className="relative bg-[#111] border border-[#2a2a2a] rounded-2xl w-full max-w-md p-6">
            <h3 className="text-lg font-semibold text-white mb-1">작품 손상 정보</h3>
            <p className="text-xs text-[#ef4444] mb-4">손상이 확인된 작품입니다</p>

            <div className="bg-[#0a0a0a] border border-[#ef4444]/20 rounded-lg p-5 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#ef4444]/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#e8e8e8] font-medium mb-2">손상 상세</p>
                  <p className="text-sm text-[#999] leading-relaxed">
                    {auction.condition?.details || "상세 정보가 등록되지 않았습니다."}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-[#555] mb-4">
              * 손상 정보는 전문가 검수를 기반으로 작성되었으며, 구매 전 추가 확인을 권장합니다.
            </p>

            <button
              onClick={() => setShowConditionDetail(false)}
              className="w-full py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-sm text-[#e8e8e8] hover:bg-[#222] transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
