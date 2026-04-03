"use client";
import { useState, useEffect } from "react";
import { isFavorite, toggleFavorite } from "../lib/favorites";

interface HeartButtonProps {
  artistSlug: string;
  auctionIndex: number;
  size?: number;
}

export default function HeartButton({ artistSlug, auctionIndex, size = 18 }: HeartButtonProps) {
  const [liked, setLiked] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setLiked(isFavorite(artistSlug, auctionIndex));
  }, [artistSlug, auctionIndex]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nowLiked = toggleFavorite(artistSlug, auctionIndex);
    setLiked(nowLiked);
    if (nowLiked) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
    }
    window.dispatchEvent(new Event("favorites-changed"));
  };

  return (
    <button
      onClick={handleClick}
      className={`p-1.5 rounded-full transition-all ${
        liked ? "text-red-500 hover:text-red-400" : "text-[#555] hover:text-red-400"
      } ${animate ? "scale-125" : "scale-100"}`}
      title={liked ? "관심작품 해제" : "관심작품 등록"}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}
