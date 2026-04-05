"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { artists, type Artist, type ArtistAuctionRecord } from "@/lib/artists";

type SortOption = "recent" | "price-high" | "price-low" | "artist";

function parsePrice(price: string): number {
  return Number(price.replace(/[₩,원\s]/g, ""));
}

interface ArtworkItem {
  artist: Artist;
  auction: ArtistAuctionRecord;
  auctionIndex: number;
}

export default function ArtMarketPage() {
  const [sortBy, setSortBy] = useState<SortOption>("recent");
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  // Flatten all auctions into artwork items
  const allArtworks: ArtworkItem[] = useMemo(() => {
    const items: ArtworkItem[] = [];
    for (const artist of artists) {
      artist.recentAuctions.forEach((auction, i) => {
        items.push({ artist, auction, auctionIndex: i });
      });
    }
    return items;
  }, []);

  // Categories
  const categories = useMemo(() => {
    const cats = new Set(artists.map((a) => a.category));
    return ["전체", ...Array.from(cats)];
  }, []);

  // Filter & sort
  const filtered = useMemo(() => {
    let items = allArtworks;
    if (selectedCategory !== "전체") {
      items = items.filter((item) => item.artist.category === selectedCategory);
    }

    switch (sortBy) {
      case "recent":
        return [...items].sort((a, b) => b.auction.date.localeCompare(a.auction.date));
      case "price-high":
        return [...items].sort((a, b) => parsePrice(b.auction.hammer) - parsePrice(a.auction.hammer));
      case "price-low":
        return [...items].sort((a, b) => parsePrice(a.auction.hammer) - parsePrice(b.auction.hammer));
      case "artist":
        return [...items].sort((a, b) => a.artist.nameKo.localeCompare(b.artist.nameKo));
      default:
        return items;
    }
  }, [allArtworks, sortBy, selectedCategory]);

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: "recent", label: "최근 등록순" },
    { value: "price-high", label: "가격 높은순" },
    { value: "price-low", label: "가격 낮은순" },
    { value: "artist", label: "작가명순" },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">작품 마켓</h1>
        <p className="text-sm text-[#555]">경매 낙찰 작품을 탐색하고 관심작품을 등록하세요</p>
      </div>

      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                selectedCategory === cat
                  ? "bg-[#4ade80] text-black font-semibold"
                  : "bg-[#111] border border-[#2a2a2a] text-[#888] hover:text-white hover:border-[#555]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort dropdown — always visible text */}
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" className="shrink-0">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
          </svg>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-2 text-sm text-[#e8e8e8] focus:outline-none focus:border-[#4ade80]/50 transition-colors appearance-none pr-8 cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 12px center",
            }}
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-[#111] text-[#e8e8e8]">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      <p className="text-xs text-[#555] mb-6">{filtered.length}개 작품</p>

      {/* Artwork grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((item, i) => (
          <Link
            key={`${item.artist.slug}-${item.auctionIndex}-${i}`}
            href={`/artist/${item.artist.slug}`}
            className="group bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#4ade80]/30 transition-all"
          >
            {/* Image placeholder */}
            <div className="w-full aspect-[4/3] bg-[#111] flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1" className="group-hover:stroke-[#4ade80]/30 transition-colors">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>

            <div className="p-4">
              {/* Artist */}
              <p className="text-[10px] text-[#4ade80] uppercase tracking-wider mb-1">{item.artist.nameKo}</p>
              {/* Title */}
              <h3 className="text-sm font-medium text-[#e8e8e8] group-hover:text-[#4ade80] transition-colors mb-1 line-clamp-1">
                {item.auction.title}
              </h3>
              {/* Details */}
              <p className="text-[11px] text-[#555] mb-3 line-clamp-1">
                {item.auction.medium} · {item.auction.size}
              </p>
              {/* Price & date */}
              <div className="flex items-end justify-between">
                <p className="text-base font-semibold text-white">{item.auction.hammer}</p>
                <p className="text-[10px] text-[#555]">{item.auction.date}</p>
              </div>
              {/* Auction house */}
              <p className="text-[10px] text-[#555] mt-1">{item.auction.auctionHouse}</p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-[#555] text-lg mb-2">해당 카테고리의 작품이 없습니다</p>
          <p className="text-[#444] text-sm">다른 카테고리를 선택해 보세요</p>
        </div>
      )}
    </div>
  );
}
