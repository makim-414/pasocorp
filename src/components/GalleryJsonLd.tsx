// Structured data for the standalone pasogallery.com site.
// Rendered only inside the gallery route variants (which are already dynamic),
// so the pasocorp root layout can stay static for artrader / pasocorp pages.
const galleryOrganizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://pasogallery.com/#organization",
  name: "Paso Gallery",
  alternateName: "파소갤러리",
  url: "https://pasogallery.com",
  logo: "https://pasogallery.com/brands/paso-gallery-og.jpg",
  sameAs: ["https://www.instagram.com/pasogallery"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@pasogallery.com",
    telephone: "+82-2-925-3631",
  },
  description: "서울 종로구 한옥에 자리한 현대미술 갤러리. 신진 작가 발굴, 큐레이션 전시, 브랜드 협업.",
};

const galleryWebSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Paso Gallery",
  alternateName: "파소갤러리",
  url: "https://pasogallery.com",
  inLanguage: "ko",
  publisher: { "@id": "https://pasogallery.com/#organization" },
};

const galleryLocalBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ArtGallery"],
  "@id": "https://pasogallery.com/#gallery",
  name: "Paso Gallery",
  alternateName: "파소갤러리",
  description: "서울 종로구 성균관로 한옥 전시 공간. 신진 작가 전시, 브랜드 협업, 프라이빗 뷰잉.",
  url: "https://pasogallery.com",
  image: "https://pasogallery.com/brands/paso-gallery-og.jpg",
  telephone: "+82-2-925-3631",
  email: "info@pasogallery.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "성균관로 92",
    postalCode: "03066",
    addressLocality: "종로구",
    addressRegion: "서울특별시",
    addressCountry: "KR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.5847,
    longitude: 126.9987,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "11:00",
    closes: "19:00",
  },
  sameAs: ["https://www.instagram.com/pasogallery"],
};

const schemas = [galleryOrganizationJsonLd, galleryWebSiteJsonLd, galleryLocalBusinessJsonLd];

export default function GalleryJsonLd() {
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
