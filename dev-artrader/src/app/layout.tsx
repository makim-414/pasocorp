import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Artrader | PASO Corp", template: "%s — Artrader" },
  description: "글로벌 미술 거래 데이터베이스 · 작가 검색 · 시장 분석",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-black text-[#e8e8e8]">
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
      </body>
    </html>
  );
}

import SearchInput from "../components/SearchInput";

function ArtraderNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-6">
        <a
          href="/"
          className="text-[#e8e8e8] text-sm tracking-normal font-normal shrink-0"
          style={{ fontFamily: "var(--font-dutch)" }}
        >
          <span className="text-[#4ade80] font-semibold">Art</span>rader
        </a>

        <SearchInput variant="nav" />

        <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.08em] uppercase text-[#888] shrink-0">
          <a href="/" className="hover:text-[#4ade80] transition-colors">Home</a>
          <a href="/mypage" className="hover:text-[#4ade80] transition-colors">마이페이지</a>
        </div>
      </div>
    </nav>
  );
}
