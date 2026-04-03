"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FALLBACK_ARTISTS = [
  "윤형근", "이우환", "이배", "천경자", "에디 마르티네즈",
  "우국원", "앤디 워홀", "김환기", "박서보", "이중섭",
  "쿠사마 야요이", "데이비드 호크니", "게르하르트 리히터",
  "장 미셸 바스키아", "키스 해링", "무라카미 다카시", "조지 콘도", "KAWS",
];

export default function TrendingArtistsMarquee() {
  const [artists, setArtists] = useState<string[]>(FALLBACK_ARTISTS);

  useEffect(() => {
    fetch("/api/trending-artists")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const names = data.map((d: { artist_name: string }) => d.artist_name);
          if (names.length > 0) setArtists(names);
        }
      })
      .catch(() => {});
  }, []);

  // Duplicate for seamless loop
  const doubled = [...artists, ...artists];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ x: { duration: 25, repeat: Infinity, ease: "linear" } }}
        className="flex gap-3 w-max"
      >
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="inline-block px-5 py-2.5 border border-[#333] rounded-full text-sm text-white whitespace-nowrap hover:border-[#4ade80] hover:text-[#4ade80] transition-colors cursor-pointer"
          >
            {name}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
