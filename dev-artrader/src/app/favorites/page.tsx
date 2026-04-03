"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getAllFavorites, removeFavorite, type FavoriteItem } from "@/lib/favorites";
import { getArtistBySlug, type Artist, type ArtistAuctionRecord } from "@/lib/artists";

interface FavoriteWithData extends FavoriteItem {
  artist: Artist;
  auction: ArtistAuctionRecord;
}

function parsePrice(price: string): number {
  return Number(price.replace(/[₩,원\s]/g, ""));
}

function formatPrice(value: number): string {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}억`;
  if (value >= 100_000_000) return `${(value / 100_000_000).toFixed(0)}백만`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(0)}M`;
  return value.toLocaleString();
}

function MiniPriceChart({ auctions }: { auctions: ArtistAuctionRecord[] }) {
  const sorted = [...auctions].sort((a, b) => a.date.localeCompare(b.date));
  const prices = sorted.map((a) => parsePrice(a.hammer));
  if (prices.length < 2) return null;

  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min;
  const pad = range === 0 ? min * 0.1 || 1 : range * 0.2;
  const yMin = Math.max(0, min - pad);
  const yMax = max + pad;

  const W = 200;
  const H = 50;

  const points = prices.map((p, i) => {
    const x = (i / (prices.length - 1)) * W;
    const y = H - ((p - yMin) / (yMax - yMin)) * H;
    return `${x},${y}`;
  });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-12">
      <defs>
        <linearGradient id="miniGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={points.join(" ")} fill="none" stroke="#4ade80" strokeWidth="2" />
      <polygon points={`${points.join(" ")} ${W},${H} 0,${H}`} fill="url(#miniGrad)" />
    </svg>
  );
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteWithData[]>([]);

  const loadFavorites = useCallback(() => {
    const raw = getAllFavorites();
    const withData: FavoriteWithData[] = [];
    for (const fav of raw) {
      const artist = getArtistBySlug(fav.artistSlug);
      if (artist && artist.recentAuctions[fav.auctionIndex]) {
        withData.push({ ...fav, artist, auction: artist.recentAuctions[fav.auctionIndex] });
      }
    }
    setFavorites(withData);
  }, []);

  useEffect(() => {
    loadFavorites();
    window.addEventListener("favorites-changed", loadFavorites);
    return () => window.removeEventListener("favorites-changed", loadFavorites);
  }, [loadFavorites]);

  const handleRemove = (artistSlug: string, auctionIndex: number) => {
    removeFavorite(artistSlug, auctionIndex);
    loadFavorites();
  };

  const grouped = favorites.reduce<Record<string, FavoriteWithData[]>>((acc, fav) => {
    if (!acc[fav.artistSlug]) acc[fav.artistSlug] = [];
    acc[fav.artistSlug].push(fav);
    return acc;
  }, {});

  const allPrices = favorites.map((f) => parsePrice(f.auction.hammer));
  const totalValue = allPrices.reduce((sum, p) => sum + p, 0);
  const avgPrice = allPrices.length > 0 ? totalValue / allPrices.length : 0;

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
      <div className="mb-10">
        <Link href="/" className="text-xs text-[#555] hover:text-[#4ade80] transition-colors mb-4 inline-block">
          &larr; 홈으로
        </Link>
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">관심작품</h1>
        <p className="text-sm text-[#555]">하트를 누른 작품의 가격 추이와 변동사항을 한눈에 확인하세요</p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-20">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1.5" className="mx-auto mb-4">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <p className="text-[#555] text-lg mb-2">등록된 관심작품이 없습니다</p>
          <p className="text-[#444] text-sm mb-6">작가 페이지에서 하트를 눌러 관심작품을 등록하세요</p>
          <Link href="/" className="inline-block px-6 py-3 bg-[#4ade80] text-black rounded-lg text-sm font-semibold hover:bg-[#3ecf73] transition-colors">
            작가 검색하기
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4">
              <p className="text-[10px] tracking-wider text-[#555] uppercase mb-2">관심작품 수</p>
              <p className="text-xl font-semibold text-white">{favorites.length}건</p>
            </div>
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4">
              <p className="text-[10px] tracking-wider text-[#555] uppercase mb-2">관심 작가 수</p>
              <p className="text-xl font-semibold text-white">{Object.keys(grouped).length}명</p>
            </div>
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4">
              <p className="text-[10px] tracking-wider text-[#555] uppercase mb-2">평균 낙찰가</p>
              <p className="text-xl font-semibold text-white">₩{formatPrice(avgPrice)}</p>
            </div>
            <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-4">
              <p className="text-[10px] tracking-wider text-[#555] uppercase mb-2">총 가치</p>
              <p className="text-xl font-semibold text-[#4ade80]">₩{formatPrice(totalValue)}</p>
            </div>
          </div>

          {Object.entries(grouped).map(([slug, items]) => {
            const artist = items[0].artist;
            return (
              <div key={slug} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <Link href={`/artist/${slug}`} className="group">
                    <h2 className="text-lg font-semibold text-white group-hover:text-[#4ade80] transition-colors">
                      {artist.nameKo}
                      <span className="text-sm text-[#555] ml-2 font-normal">{artist.nameEn}</span>
                    </h2>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[10px] text-[#4ade80] bg-[#4ade80]/10 px-2 py-0.5 rounded">{artist.category}</span>
                      <span className="text-xs text-[#555]">연간 {artist.stats.annualGrowth}</span>
                      <span className="text-xs text-[#555]">낙찰률 {artist.stats.hammerRate}</span>
                    </div>
                  </Link>
                  <div className="w-32">
                    <MiniPriceChart auctions={artist.recentAuctions} />
                  </div>
                </div>
                <div className="space-y-3">
                  {items.map((fav) => (
                    <div key={`${fav.artistSlug}-${fav.auctionIndex}`} className="flex items-center justify-between bg-[#111] rounded-lg p-4 hover:bg-[#151515] transition-colors">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[#e8e8e8] font-medium truncate">{fav.auction.title}</p>
                        <p className="text-xs text-[#555] mt-0.5">{fav.auction.medium} · {fav.auction.size} · {fav.auction.date}</p>
                      </div>
                      <div className="flex items-center gap-4 shrink-0 ml-4">
                        <div className="text-right">
                          <p className="text-sm font-semibold text-[#4ade80]">{fav.auction.hammer}</p>
                          <p className="text-[10px] text-[#555]">{fav.auction.auctionHouse}</p>
                        </div>
                        <button onClick={() => handleRemove(fav.artistSlug, fav.auctionIndex)} className="p-1.5 text-red-500 hover:text-red-400 transition-colors" title="관심작품 해제">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
