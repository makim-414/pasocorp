import type { Metadata, Viewport } from "next";
import CookieConsent from "@/components/CookieConsent";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "PASO — Art as an Asset Class", template: "%s — PASO" },
  description: "Data-driven art investment advisory, gallery operations, and art consulting. 15.8M auction records powering art valuation, IP licensing, and corporate art programs.",
  keywords: ["PASO", "Paso Gallery", "Paso Agency", "Artrader", "Artledger", "PASO Art Center", "art investment", "art advisory", "art valuation", "art IP licensing", "Korean contemporary art", "Min Sung Kim", "파소", "파소갤러리", "미술품 투자", "아트 컨설팅"],
  openGraph: {
    title: "PASO — Art as an Asset Class",
    description: "Data-driven art investment advisory, gallery operations, IP licensing, and corporate collection consulting. 15.8M auction records · Forbes 30 Under 30.",
    siteName: "PASO",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    url: "https://pasocorp.com",
    images: [{ url: "https://pasocorp.com/og-image.jpg", width: 1200, height: 630, alt: "PASO — Art as an Asset Class" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PASO — Art as an Asset Class",
    description: "Data-driven art investment advisory, gallery operations, and IP licensing. 15.8M auction records.",
    images: ["https://pasocorp.com/og-image.jpg"],
  },
  metadataBase: new URL("https://pasocorp.com"),
  alternates: { canonical: "https://pasocorp.com" },
  verification: {
    google: "e2KKY1zNTP2oZ3Uy7fNojeDjV4Yydl3gmYc_L4_ilj4",
    other: {
      "naver-site-verification": ["e46c46bec7a8edda0d8be0b4cb0942977c6a3e5b"],
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Noto+Serif+KR:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-black text-[#e8e8e8]">
        <LocaleProvider>
          {children}
          <CookieConsent />
        </LocaleProvider>
      </body>
    </html>
  );
}
