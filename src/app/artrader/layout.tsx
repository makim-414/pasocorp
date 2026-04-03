"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

function ArtraderNav() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/artrader/search?q=${encodeURIComponent(q)}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-6">
        <Link
          href="/artrader"
          className="text-[#e8e8e8] text-sm tracking-normal font-normal shrink-0"
          style={{ fontFamily: "var(--font-dutch)" }}
        >
          <span className="text-[#4ade80] font-semibold">Art</span>rader
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="작가명, 작품명 검색..."
              className="w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-2 text-sm text-[#e8e8e8] placeholder-[#555] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[#555] hover:text-[#4ade80] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>
          </div>
        </form>

        <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.08em] uppercase text-[#888] shrink-0">
          <Link href="/artrader" className="hover:text-[#4ade80] transition-colors">Home</Link>
        </div>
      </div>
    </nav>
  );
}

export default function ArtraderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black min-h-screen">
      <ArtraderNav />
      <main className="pt-16">{children}</main>
      <footer className="border-t border-[#1a1a1a] py-12">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#555]">
            <span className="text-[#4ade80]">Art</span>rader &copy; {new Date().getFullYear()} PASO Corp.
          </p>
          <p className="text-xs text-[#444]">Powered by PASO Data Engine</p>
        </div>
      </footer>
    </div>
  );
}
