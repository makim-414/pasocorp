import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StandaloneNav from "@/components/StandaloneNav";
import SiteModeCookieSync from "@/components/SiteModeCookieSync";
import StandaloneFooter from "@/components/StandaloneFooter";
import BrandLanding from "./BrandLanding";
import { getSiteMode } from "@/lib/site-mode";

const brandsData: Record<string, {
  name: string; slug: string; year: number; desc: string; longDesc: string;
  color: string; image: string; heroImages?: string[]; gallery: string[];
  features: { title: string; desc: string; image?: string }[];
}> = {
  artrader: {
    name: "Artrader",
    slug: "artrader",
    year: 2024,
    desc: "해외 1,500만 건·국내 9만여 건의 정제된 옥션 데이터로 실거래가와 적정 매입가를 산출하는 Artrader는, 미술품 2차 거래(Private Sales) 플랫폼이자 법인 컬렉션의 구축과 리밸런싱에 특화된 데이터베이스입니다.",
    longDesc: "해외 1,500만 건·국내 9만여 건의 정제된 옥션 데이터로 실거래가와 적정 매입가를 산출하는 Artrader는, 미술품 2차 거래(Private Sales) 플랫폼이자 법인 컬렉션의 구축과 리밸런싱에 특화된 데이터베이스입니다.",
    color: "#b8960b",
    image: "/brands/artrader-platform-hd.png",
    gallery: [
      "/brands/artrader-search-screen.png",
      "/brands/artrader-platform.jpg",
      "/brands/artrader-hero-bg.png",
    ],
    features: [
      { title: "Artist Index", desc: "작가별 시장 가치 변동, 거래 빈도, 낙찰가 추이를 한눈에. 종목분석서 스타일의 정량 리포트." },
      { title: "Market Analytics", desc: "글로벌 경매 데이터 실시간 수집·분석. 트렌드 예측과 시장 인사이트." },
      { title: "Portfolio Tracker", desc: "보유 작품의 시장 가치를 실시간 모니터링. 매도 타이밍 시그널 제공." },
    ],
  },
  "paso-gallery": {
    name: "Paso Gallery",
    slug: "paso-gallery",
    year: 2021,
    desc: "Art Meets Space — 한옥의 고유한 공간미와 동시대 미술이 만나는 곳. 신진 작가 발굴부터 브랜드 협업까지.",
    longDesc: "서울 종로구 한옥 건축물에 자리한 PASO Gallery는, 전통 공간의 아름다움과 동시대 미술의 실험이 공존하는 독립 갤러리입니다. 신진 작가 발굴, 큐레이션 전시, 브랜드 협업 등 예술과 시장을 잇는 프로그램을 운영합니다.",
    color: "#1e3a5f",
    image: "/brands/paso-gallery.png",
    gallery: [
      "/images/gallery/gallery-01.jpg",
      "/images/gallery/gallery-02.jpg",
      "/images/gallery/gallery-03.jpg",
      "/images/gallery/gallery-04.jpg",
      "/images/gallery/gallery-05.jpg",
      "/images/gallery/gallery-06.jpg",
    ],
    features: [
      { title: "HINO salon", desc: "" },
      { title: "VAKKI private viewing", desc: "" },
      { title: "SOHO preview", desc: "" },
      { title: "Global Network", desc: "해외 갤러리·작가·컬렉터 네트워크 연결" },
    ],
  },
  "paso-agency": {
    name: "Paso Agency",
    slug: "paso-agency",
    year: 2023,
    desc: "기업이 미술 기반 IP로 최대의 브랜드 가치를 만들어내고, 작가의 IP가 성장 속에서도\n온전히 보호받을 수 있도록 양측 모두에게 지속 가능한 구조를 설계합니다.",
    longDesc: "기업이 미술 기반 IP로 최대의 브랜드 가치를 만들어내고, 작가의 IP가 성장 속에서도 온전히 보호받을 수 있도록—PASO Agency가 양측 모두에게 지속 가능한 구조를 설계합니다.",
    color: "#d4a574",
    image: "/images/agency/agency-bg-2.jpg",
    heroImages: [
      "/images/agency/agency-bg-2.jpg",
      "/images/agency/agency-bg-3.jpg",
      "/images/agency/agency-bg-4.jpg",
    ],
    gallery: [
      "/images/projects/cu2.jpg",
      "/images/projects/cu-wine.jpg",
      "/Group 13499.png",
      "/images/projects/hongdae-flagship/1.jpg",
    ],
    features: [
      { title: "장띵", desc: "CU 델라페 18종 X 장띵" },
      { title: "CU X PASO", desc: "와인 라벨 패키지 공모전" },
      { title: "TWOSOME PLACE", desc: "투썸플레이스 홍대서교점 X 강한" },
      { title: "CHOWOO", desc: "CHOWOO 홍대 플래그쉽 스토어" },
    ],
  },
};

// Folded/retired brand surfaces (strategy 2026-07): Artledger absorbed into Artrader,
// Magok Art Center closed. Keep old URLs alive via permanent redirects.
const retiredSlugRedirects: Record<string, string> = {
  "artledger-consulting": "/brands/artrader",
  "paso-art-center": "/brands/paso-gallery",
};

export function generateStaticParams() {
  return Object.keys(brandsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = brandsData[slug];
  if (!brand) return { title: "Brand Not Found — PASO" };
  const seoOverrides: Record<string, { title: string; description: string; image?: string }> = {
    artrader: { title: "Artrader | PASO Art Market Data Platform", description: "PASO's Artrader — 15M+ global auction records. Artist Index, quantitative reports, and art-asset advisory for investment decisions." },
    "paso-agency": { title: "PASO Agency | IP & Brand Art Collaborations", description: "PASO Agency — character IP licensing, art toys, corporate art projects, end-to-end planning and execution." },
    "paso-gallery": { title: "Paso Gallery — Art Meets Space", description: "한옥의 고유한 공간미와 동시대 미술이 만나는 곳. 신진작가 발굴부터 브랜드 콜라보레이션까지.", image: "/brands/paso-gallery-og.jpg" },
  };
  const seo = seoOverrides[slug];
  const ogImage = seo?.image ?? brand.image;
  return {
    title: seo?.title ?? `${brand.name} — PASO`,
    description: seo?.description ?? brand.longDesc,
    openGraph: {
      title: seo?.title ?? `${brand.name} — PASO`,
      description: seo?.description ?? brand.desc,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo?.title ?? `${brand.name} — PASO`,
      description: seo?.description ?? brand.desc,
      images: [ogImage],
    },
  };
}

// Standalone site configs for brand domains
const standaloneSiteConfig: Record<string, {
  siteName: string;
  navLinks: { label: string; href: string; isButton?: boolean }[];
  address: string;
  addressDetail: string;
  instagram: string;
  accentColor: string;
}> = {
  pasogallery: {
    siteName: "Paso Gallery",
    navLinks: [
      { label: "Exhibitions", href: "/#exhibitions" },
      { label: "Spaces", href: "/spaces" },
      { label: "About", href: "/about" },
      { label: "Request", href: "/contact", isButton: true },
    ],
    address: "92, Seonggyungwan-ro, Jongno-gu",
    addressDetail: "Seoul, Hanok Building",
    instagram: "https://www.instagram.com/pasogallery",
    accentColor: "#e5e5e5",
  },
};

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (retiredSlugRedirects[slug]) permanentRedirect(retiredSlugRedirects[slug]);
  const brand = brandsData[slug];
  const siteMode = await getSiteMode();

  if (!brand) notFound();

  // Use standalone nav when on a standalone domain (siteMode) OR when slug matches a standalone site
  // (so localhost/brands/paso-gallery also shows the Paso Gallery branded nav)
  const slugToSiteMode: Record<string, string> = { "paso-gallery": "pasogallery" };
  const standaloneConfig = standaloneSiteConfig[siteMode] ?? standaloneSiteConfig[slugToSiteMode[slug] ?? ""];

  // Standalone brand site (e.g., pasogallery.com OR localhost/brands/paso-gallery)
  if (standaloneConfig) {
    const slugSiteMode = slugToSiteMode[slug];
    const isSlugBased = !standaloneSiteConfig[siteMode] && !!slugSiteMode;
    // On the actual standalone domain, "/" is the home; on slug-based access (dev),
    // home should be the slug page itself so the user stays inside the brand site
    const homeHref = standaloneSiteConfig[siteMode] ? "/" : `/brands/${slug}`;
    // On localhost (slug-based), rewrite /contact -> /gallery-contact so we don't
    // collide with pasocorp's /contact page. On the real standalone domain the
    // middleware can map /contact -> the gallery variant.
    const onStandaloneDomain = !!standaloneSiteConfig[siteMode];
    const navLinks = standaloneConfig.navLinks.map((link) =>
      !onStandaloneDomain && link.href === "/contact"
        ? { ...link, href: "/gallery-contact" }
        : link
    );
    return (
      <div className="bg-black min-h-screen">
        {isSlugBased && <SiteModeCookieSync siteMode={slugSiteMode} />}
        <StandaloneNav
          siteName={standaloneConfig.siteName}
          homeHref={homeHref}
          links={navLinks}
          accentColor={standaloneConfig.accentColor}
        />
        <BrandLanding brand={brand} />
        <StandaloneFooter
          siteName={standaloneConfig.siteName}
          address={standaloneConfig.address}
          addressDetail={standaloneConfig.addressDetail}
          instagram={standaloneConfig.instagram}
        />
      </div>
    );
  }

  // Default: pasocorp.com layout
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <BrandLanding brand={brand} />
      <Footer />
    </div>
  );
}
