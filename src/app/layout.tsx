import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "PASO Corp | 데이터 기반 미술 자산 전략", template: "%s — PASO" },
  description: "미술품 투자 자문, 갤러리 운영, 아트 컨설팅. 1,580만 건 데이터 기반 미술 자산 관리.",
  openGraph: {
    title: "PASO — Art as an Asset Class",
    description: "데이터 기반 미술품 거래 자문, 갤러리·미술관 운영, 기업 컬렉션 자문. 미술 생태계의 모든 것을 연결합니다.",
    siteName: "PASO",
    type: "website",
    url: "https://pasocorp.com",
    images: [{ url: "https://pasocorp.com/og-image.jpg", width: 1200, height: 630, alt: "PASO — Art as an Asset Class" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PASO Corp | 데이터 기반 미술 자산 전략",
    description: "미술품 투자 자문, 갤러리 운영, 아트 컨설팅. 1,580만 건 데이터 기반 미술 자산 관리.",
  },
  metadataBase: new URL("https://pasocorp.com"),
  alternates: { canonical: "https://pasocorp.com" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PASO Corp",
  url: "https://pasocorp.com",
  logo: "https://pasocorp.com/logo.png",
  sameAs: ["https://www.instagram.com/pasoartcenter"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "makim@ironact.net",
  },
  description: "데이터 기반 미술 자산 전략. 미술품 투자 자문, 갤러리 운영, 아트 컨설팅.",
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
  name: "PASO Art Center",
  description: "서울 마곡 아트센터. 전시, 대관, 아트살롱. 신진작가와 컬렉터의 커뮤니티 공간.",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
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
      <body className="font-sans bg-black text-[#e8e8e8]">{children}</body>
    </html>
  );
}
