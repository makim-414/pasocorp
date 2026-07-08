import type { Metadata } from "next";
import CookieConsent from "@/components/CookieConsent";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "PASO — Art as an Asset Class", template: "%s — PASO" },
  description: "Data-driven art investment advisory, gallery operations, and art consulting. 15M+ auction records powering art valuation, IP licensing, and corporate art programs.",
  keywords: ["PASO", "Paso Gallery", "Paso Agency", "Artrader", "art investment", "art advisory", "art valuation", "art IP licensing", "Korean contemporary art", "Min Sung Kim", "파소", "파소갤러리", "미술품 투자", "아트 컨설팅"],
  openGraph: {
    title: "PASO — Art as an Asset Class",
    description: "Data-driven art investment advisory, gallery operations, IP licensing, and corporate collection consulting. 15M+ auction records · Forbes 30 Under 30.",
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
    description: "Data-driven art investment advisory, gallery operations, and IP licensing. 15M+ auction records.",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "파소(PASO Corp)",
  alternateName: ["파소", "PASO"],
  url: "https://pasocorp.com",
  logo: "https://pasocorp.com/logo.png",
  foundingDate: "2013",
  founder: { "@type": "Person", name: "Min Sung Kim" },
  sameAs: [
    "https://www.instagram.com/pasogallery",
    "https://www.instagram.com/pasoartcenter",
    "https://artrader.io",
    "https://pasogallery.com",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@pasogallery.com",
    telephone: "+82-2-925-3631",
  },
  subOrganization: [
    { "@type": "Organization", name: "Paso Gallery", url: "https://pasogallery.com" },
    { "@type": "Organization", name: "Paso Agency", url: "https://pasocorp.com/brands/paso-agency" },
    { "@type": "Organization", name: "Artrader", url: "https://artrader.io" },
    { "@type": "Organization", name: "Artledger Consulting", url: "https://pasocorp.com/brands/artledger-consulting" },
    { "@type": "Organization", name: "PASO Art Center", url: "https://pasocorp.com/brands/paso-art-center" },
  ],
  description: "파소(PASO) — 데이터 기반 미술 자산 전략. 미술품 투자 자문, 갤러리 운영, 아트 컨설팅.",
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PASO Corp",
  url: "https://pasocorp.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://pasocorp.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://pasocorp.com/#gallery",
  name: "파소 갤러리(Paso Gallery)",
  alternateName: "파소 갤러리",
  description: "서울 종로구 성균관로의 한옥 갤러리. 신진작가 전시, 프라이빗 세일, 공간 대관.",
  url: "https://pasogallery.com",
  image: "https://pasocorp.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "성균관로 92",
    addressLocality: "서울특별시",
    addressRegion: "종로구",
    addressCountry: "KR",
  },
  sameAs: ["https://www.instagram.com/pasogallery", "https://www.instagram.com/pasoartcenter"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Noto+Serif+KR:wght@300;400;500&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
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
