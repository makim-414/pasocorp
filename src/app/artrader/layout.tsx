"use client";
import Link from "next/link";
import SearchInput from "@/components/artrader/SearchInput";

function ArtraderNav() {
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

        <SearchInput variant="nav" />

        <div className="hidden md:flex items-center gap-6 text-xs tracking-[0.08em] uppercase text-[#888] shrink-0">
          <Link href="/artrader" className="hover:text-[#4ade80] transition-colors">홈</Link>
          <Link href="/artrader/about-us" className="hover:text-[#4ade80] transition-colors">소개</Link>
          <Link href="/artrader/favorites" className="hover:text-[#4ade80] transition-colors flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            관심작품
          </Link>
          <Link href="/artrader/user" className="hover:text-[#4ade80] transition-colors">마이페이지</Link>
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
