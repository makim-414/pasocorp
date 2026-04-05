"use client";
import { useState } from "react";
import Link from "next/link";
import { artists } from "@/lib/artists";
import SearchInput from "@/components/artrader/SearchInput";
import { useExchangeRate, convertToKRW } from "@/lib/use-exchange-rate";

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
    imageUrl: auction.imageUrl,
  }))
);

export default function ArtMarketPage() {
  const [query, setQuery] = useState("");
  const exchangeRate = useExchangeRate();

  const filtered = query
    ? sampleArtworks.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.artistNameKo.includes(query)
      )
    : sampleArtworks;

  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
      {/* Centered pill search */}
      <div className="flex justify-center mb-8">
        <div className="w-full max-w-xl">
          <SearchInput variant="market" />
        </div>
      </div>

      {/* Sell button - right aligned */}
      <div className="flex justify-end mb-10">
        <Link
          href="/artrader/sell"
          className="px-8 py-3 bg-[#4ade80] text-black font-semibold rounded-full hover:bg-[#3bcc70] transition-colors text-sm shadow-lg shadow-[#4ade80]/10"
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
            className="group bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#4ade80]/30 transition-colors"
          >
            {/* Thumbnail */}
            <div className="w-full aspect-square bg-[#111] flex items-center justify-center overflow-hidden">
              {artwork.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={artwork.imageUrl}
                  alt={artwork.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
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
              )}
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold text-[#e8e8e8] group-hover:text-[#4ade80] transition-colors mb-1 truncate">
                {artwork.title}
              </h3>
              <p className="text-xs text-[#888] mb-4">
                {artwork.artistNameKo} | {artwork.size}
              </p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-[#555] mb-0.5">{artwork.date}</p>
                  <p className="text-base font-semibold text-[#e8e8e8]">
                    {artwork.price}
                  </p>
                  {exchangeRate && (() => {
                    const krw = convertToKRW(artwork.price, exchangeRate);
                    return krw ? <p className="text-[11px] text-[#666] mt-0.5">{krw}</p> : null;
                  })()}
                </div>
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
