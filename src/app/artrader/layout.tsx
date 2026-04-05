import type { Metadata } from "next";
import ArtraderNav from "./ArtraderNav";

export const metadata: Metadata = {
  title: { default: "Artrader — 글로벌 미술 거래 데이터", template: "%s — Artrader" },
  description:
    "Artrader — 글로벌 미술 거래 데이터베이스. 작가 검색, 시세 분석, 안전한 거래 환경을 제공합니다.",
  openGraph: {
    title: "Artrader — Art Market Data",
    description: "글로벌 미술 거래 데이터베이스. 작가 검색 · 시장 분석 · 안전한 거래.",
    siteName: "Artrader",
    type: "website",
    url: "https://artrader.io",
    images: [
      {
        url: "https://artrader.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Artrader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artrader — Art Market Data",
    description: "글로벌 미술 거래 데이터베이스. 작가 검색 · 시장 분석 · 안전한 거래.",
  },
  metadataBase: new URL("https://artrader.io"),
  alternates: { canonical: "https://artrader.io" },
};

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
