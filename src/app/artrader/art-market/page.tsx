"use client";
import { useState } from "react";
import Link from "next/link";
import { artists } from "@/lib/artists";
import SearchInput from "@/components/artrader/SearchInput";

const sampleArtworks = artists.flatMap((artist) =>
  artist.recentAuctions.map((auction, i) => ({
    id: `${artist.slug}-${i}`,
    title: auction.title,
    artistNameKo: artist.nameKo,
    artistSlug: artist.slug,
    year: auction.year,
    medium: auction.medium,
    size: auction.size,
    price: auction.hammer,
    auctionHouse: auction.auctionHouse,
    date: auction.date,
  }))
);

export default function ArtMarketPage() {
  const [query, setQuery] = useState("");

  const filtered = query
    ? sampleArtworks.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.artistNameKo.includes(query)
      )
    : sampleArtworks;

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
      {/* Search & Sell Button */}
      <div className="mb-10">
        <div className="max-w-2xl">
          <SearchInput variant="hero" />
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold text-white">
          작품 ({filtered.length})
        </h2>
        <Link
          href="/artrader/sell"
          className="px-6 py-3 bg-[#4ade80] text-black font-semibold rounded-full hover:bg-[#3bcc70] transition-colors text-sm"
        >
          작품 판매하기
        </Link>
      </div>

      {/* Artwork Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((artwork) => (
          <Link
            key={artwork.id}
            href={`/artrader/artist/${artwork.artistSlug}`}
            className="group bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#4ade80]/30 transition-colors"
          >
            {/* Thumbnail placeholder */}
            <div className="w-full aspect-[4/3] bg-[#111] flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#333"
                strokeWidth="1"
                className="group-hover:stroke-[#4ade80]/30 transition-colors"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
            <div className="p-5">
              <h3 className="text-base font-medium text-[#e8e8e8] group-hover:text-[#4ade80] transition-colors mb-1 truncate">
                {artwork.title}
              </h3>
              <p className="text-xs text-[#666] mb-1">
                {artwork.artistNameKo} | {artwork.year}
              </p>
              <p className="text-xs text-[#555] mb-3 truncate">{artwork.medium}</p>
              <div className="flex items-end justify-between">
                <p className="text-lg font-semibold text-[#e8e8e8]">
                  {artwork.price}
                </p>
                <span className="text-[10px] text-[#4ade80] bg-[#4ade80]/10 px-2 py-1 rounded">
                  {artwork.auctionHouse}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
