import type { Metadata } from "next";
import CookieConsent from "@/components/CookieConsent";
import { LocaleProvider } from "@/lib/i18n/LocaleContext";
import { getServerLocale } from "@/lib/i18n/server";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "파소(PASO) | 데이터 기반 미술 자산 전략", template: "%s — 파소(PASO)" },
  description: "파소(PASO)는 미술품 투자 자문, 갤러리 운영, 아트 컨설팅을 제공합니다. 1,580만 건 데이터 기반 미술 자산 관리.",
  keywords: ["파소", "PASO", "pasocorp", "파소코프", "파소갤러리", "파소아트센터", "파소에이전시", "파소 갤러리", "파소 아트센터", "파소 에이전시", "미술품 투자", "아트 컨설팅", "갤러리", "미술 자산"],
  openGraph: {
    title: "파소(PASO) — Art as an Asset Class",
    description: "파소(PASO) — 데이터 기반 미술품 거래 자문, 갤러리·미술관 운영, 기업 컬렉션 자문. 미술 생태계의 모든 것을 연결합니다.",
    siteName: "파소(PASO)",
    type: "website",
    url: "https://pasocorp.com",
    images: [{ url: "https://pasocorp.com/og-image.jpg", width: 1200, height: 630, alt: "PASO — Art as an Asset Class" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "파소(PASO) | 데이터 기반 미술 자산 전략",
    description: "파소(PASO)는 미술품 투자 자문, 갤러리 운영, 아트 컨설팅을 제공합니다. 1,580만 건 데이터 기반 미술 자산 관리.",
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
  alternateName: "파소",
  url: "https://pasocorp.com",
  logo: "https://pasocorp.com/logo.png",
  sameAs: ["https://www.instagram.com/pasoartcenter"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "makim@ironact.net",
  },
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
  "@id": "https://pasocorp.com/#artcenter",
  name: "파소 아트센터(PASO Art Center)",
  alternateName: "파소 아트센터",
  description: "파소 아트센터 — 서울 성북구. 전시, 대관, 아트살롱. 신진작가와 컬렉터의 커뮤니티 공간.",
  url: "https://pasocorp.com",
  image: "https://pasocorp.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "삼선교로23가길 72 인터블루 1층",
    addressLocality: "서울특별시",
    addressRegion: "성북구",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.5665,
    longitude: 126.8278,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "19:00",
  },
  sameAs: ["https://www.instagram.com/pasoartcenter"],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getServerLocale();
  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Noto+Serif+KR:wght@300;400;500&display=swap" rel="stylesheet" />
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
        <LocaleProvider initialLocale={locale}>
          {children}
          <CookieConsent />
        </LocaleProvider>
      </body>
    </html>
  );
}
