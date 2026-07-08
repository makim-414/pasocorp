// Structured data for pasocorp.com / aboutpaso.com (the PASO Corp entity).
// Rendered on the pages that represent that entity (corp home, aboutpaso) rather than
// the shared root layout, so it does not leak onto the standalone pasogallery.com site
// and the pasocorp static pages (artrader, privacy, terms, solutions) stay static.
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
