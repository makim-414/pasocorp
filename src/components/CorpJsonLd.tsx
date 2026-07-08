// Structured data for pasocorp.com / aboutpaso.com (the PASO Corp + Art Center entity).
// Rendered on the pages that represent that entity (corp home, aboutpaso) rather than
// the shared root layout, so it does not leak onto the standalone pasogallery.com site
// and the pasocorp static pages (artrader, privacy, terms, solutions) stay static.
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
  description: "파소 아트센터 서울 성북구. 전시, 아트살롱. 신진작가와 컬렉터의 커뮤니티 공간",
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

const schemas = [organizationJsonLd, webSiteJsonLd, localBusinessJsonLd];

export default function CorpJsonLd() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
