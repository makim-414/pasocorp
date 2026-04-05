"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { searchArtists, artists, type Artist } from "../lib/artists";

interface SearchInputProps {
  variant?: "hero" | "nav";
  initialQuery?: string;
}

export default function SearchInput({ variant = "nav", initialQuery = "" }: SearchInputProps) {
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState<Artist[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleChange = (value: string) => {
    setQuery(value);
    setSelectedIndex(-1);
    const q = value.trim();
    if (q.length > 0) {
      const results = searchArtists(q);
      const allMatches = artists.filter(
        (a) =>
          a.nameKo.includes(q) ||
          a.nameEn.toLowerCase().includes(q.toLowerCase()) ||
          a.tags.some((t) => t.includes(q))
      );
      const seen = new Set<string>();
      const combined: Artist[] = [];
      for (const a of [...results, ...allMatches]) {
        if (!seen.has(a.slug)) {
          seen.add(a.slug);
          combined.push(a);
        }
      }
      setSuggestions(combined.slice(0, 5));
      setShowSuggestions(combined.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const navigateToArtist = (artist: Artist) => {
    setShowSuggestions(false);
    setQuery(artist.nameKo);
    router.push(`/search?q=${encodeURIComponent(artist.nameKo)}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;

    setShowSuggestions(false);

    if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
      navigateToArtist(suggestions[selectedIndex]);
      return;
    }

    router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  const isHero = variant === "hero";

  return (
    <div ref={wrapperRef} className={isHero ? "w-full" : "flex-1 max-w-md"}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => {
            if (suggestions.length > 0) setShowSuggestions(true);
          }}
          onKeyDown={handleKeyDown}
          placeholder={isHero ? "작가명을 입력하세요 (예: 이우환, 김환기)" : "작가명, 작품명 검색..."}
          className={
            isHero
              ? "w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl px-6 py-4 text-base text-[#e8e8e8] placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
              : "w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-2 text-sm text-[#e8e8e8] placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
          }
          autoFocus={isHero}
          autoComplete="off"
        />
        <button
          type="submit"
          className={`absolute top-1/2 -translate-y-1/2 text-[#555] hover:text-[#4ade80] transition-colors ${isHero ? "right-4" : "right-2"}`}
        >
          <svg width={isHero ? 22 : 18} height={isHero ? 22 : 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-[#111] border border-[#2a2a2a] rounded-lg overflow-hidden z-50 shadow-xl shadow-black/50">
            {suggestions.map((artist, i) => (
              <button
                key={artist.slug}
                type="button"
                onClick={() => navigateToArtist(artist)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  i === selectedIndex ? "bg-[#1a1a1a]" : "hover:bg-[#1a1a1a]"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" className="shrink-0">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-[#e8e8e8] truncate">
                    {artist.nameKo}
                    <span className="text-[#555] ml-2 text-xs">{artist.nameEn}</span>
                  </p>
                  <p className="text-[10px] text-[#555] mt-0.5">{artist.category} · 평균 {artist.stats.avgPrice}</p>
                </div>
                <span className="text-[10px] text-[#4ade80] bg-[#4ade80]/10 px-2 py-0.5 rounded shrink-0">
                  {artist.category}
                </span>
              </button>
            ))}
          </div>
        )}
      </form>
    </div>
  );
}
