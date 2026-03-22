import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandLanding from "./BrandLanding";

const brandsData: Record<string, {
  name: string; slug: string; year: number; desc: string; longDesc: string;
  color: string; image: string; gallery: string[];
  features: { title: string; desc: string; image?: string }[];
}> = {
  artrader: {
    name: "Artrader",
    slug: "artrader",
    year: 2024,
    desc: "해외 1,500만 건·국내 9만여 건의 정제된 옥션 데이터로 실거래가와 적정 매입가를 산출하는 미술품 2차 거래(Private Sales) 플랫폼이자 법인 컬렉션의 구축과 리밸런싱에 특화된 데이터베이스입니다.",
    longDesc: "해외 1,500만 건·국내 9만여 건의 정제된 옥션 데이터로 실거래가와 적정 매입가를 산출하는 Artrader는, 미술품 2차 거래(Private Sales) 플랫폼이자 법인 컬렉션의 구축과 리밸런싱에 특화된 데이터베이스입니다.",
    color: "#b8960b",
    image: "/brands/artrader-platform.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
    features: [
      { title: "Artist Index", desc: "작가별 시장 가치 변동, 거래 빈도, 낙찰가 추이를 한눈에. 종목분석서 스타일의 정량 리포트." },
      { title: "Market Analytics", desc: "글로벌 경매 데이터 실시간 수집·분석. 트렌드 예측과 시장 인사이트." },
      { title: "Portfolio Tracker", desc: "보유 작품의 시장 가치를 실시간 모니터링. 매도 타이밍 시그널 제공." },
    ],
  },
  "paso-art-center": {
    name: "PASO Art Center",
    slug: "paso-art-center",
    year: 2025,
    desc: "해외 이머징 작가부터 국내 유망 작가까지, 전시와 아트토이 발행 등 IP 확장 프로젝트를 전개하며, 상설전에서는 Artrader 데이터로 엄선한 블루칩·옥션 상위권 작품 70여 점을 상시 만날 수 있습니다.",
    longDesc: "해외 이머징 작가부터 국내 유망 작가까지, PASO Art Center는 전시와 아트토이 발행 등 IP 확장 프로젝트를 전개하며, 상설전에서는 Artrader 데이터로 엄선한 블루칩·옥션 상위권 작품 70여 점을 상시 만날 수 있습니다.",
    color: "#a0522d",
    image: "/brands/paso-artcenter-building.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=1600&q=80",
      "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=1600&q=80",
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&q=80",
    ],
    features: [
      { title: "Exhibition Space", desc: "대형 전시를 위한 유연한 공간 구성. 자연광과 인공조명의 조화." },
      { title: "Emerging Artists", desc: "글로벌 이머징 작가를 소개하는 기획전. 신선한 시각과 실험적 표현." },
      { title: "Secondary Market", desc: "적정가 2차 시장 Top 30 작품을 큐레이션하여 전시·판매." },
    ],
  },
  "paso-gallery": {
    name: "Paso Gallery",
    slug: "paso-gallery",
    year: 2021,
    desc: "Art Meets Space — 한옥의 고유한 공간미와 동시대 미술이 만나는 곳. 브랜드 팝업, 프라이빗 이벤트, 아트 어드바이저리까지.",
    longDesc: "서울 종로구 한옥 건축물에 자리한 PASO Gallery는, 전통 공간의 아름다움과 동시대 미술의 실험이 공존하는 독립 갤러리입니다. 브랜드 팝업, VIP 이벤트, 아트 어드바이저리 등 예술과 비즈니스를 잇는 프로그램을 운영합니다.",
    color: "#1e3a5f",
    image: "/brands/paso-gallery.jpg",
    gallery: [
      "/images/gallery/gallery-01.png",
      "/images/gallery/gallery-02.png",
      "/images/gallery/gallery-03.png",
      "/images/gallery/gallery-04.png",
      "/images/gallery/gallery-05.png",
      "/images/gallery/gallery-06.png",
    ],
    features: [
      { title: "Brand Pop-up", desc: "갤러리 공간을 활용한 브랜드 팝업 전시 기획·운영" },
      { title: "Private Events", desc: "VIP 디너, 프라이빗 뷰잉, 기업 이벤트 호스팅" },
      { title: "Art Advisory", desc: "컬렉션 구축부터 공간 큐레이션까지 맞춤 자문" },
      { title: "Global Network", desc: "해외 갤러리·작가·컬렉터 네트워크 연결" },
    ],
  },
  "paso-agency": {
    name: "Paso Agency",
    slug: "paso-agency",
    year: 2023,
    desc: "기업이 미술 기반 IP로 최대의 브랜드 가치를 만들어내고, 작가의 IP가 성장 속에서도 온전히 보호받을 수 있도록—양측 모두에게 지속 가능한 구조를 설계합니다.",
    longDesc: "기업이 미술 기반 IP로 최대의 브랜드 가치를 만들어내고, 작가의 IP가 성장 속에서도 온전히 보호받을 수 있도록—PASO Agency가 양측 모두에게 지속 가능한 구조를 설계합니다.",
    color: "#d4a574",
    image: "/brands/paso-agency.jpg",
    gallery: [
      "/images/projects/cu-dding/cu-2.jpg",
      "/images/projects/cu-dding-collab.jpg",
      "/images/projects/arttoy/1.jpg",
      "/images/projects/twosome-interior.jpg",
      "/images/projects/hongdae-plusship/1.png",
      "/images/projects/dosan-popup/03.png",
    ],
    features: [
      { title: "캐릭터 IP", desc: "오리지널 캐릭터 IP 개발 및 라이선싱" },
      { title: "브랜드 콜라보", desc: "F&B·리테일 브랜드와의 아트 프로젝트" },
      { title: "아트토이", desc: "한정판 아트토이 기획·제작·유통" },
      { title: "공간 아트", desc: "매장·오피스 공간 아트 큐레이션" },
      { title: "팝업 전시", desc: "브랜드 팝업 스토어 아트 디렉팅" },
      { title: "스트릿 아트", desc: "뮤럴·그래피티 아트 매입·기획" },
    ],
  },
  "artledger-consulting": {
    name: "Artledger Consulting",
    slug: "artledger-consulting",
    year: 2025,
    desc: "매입 이후의 세금 처리, 절세 전략, 법인 컬렉션 운용 전반을 설계하고 자문합니다. 개인과 법인 모두, 거래의 전 과정을 전문적으로 지원합니다.",
    longDesc: "매입 이후의 세금 처리, 절세 전략, 법인 컬렉션 운용 전반은 Artledger Consulting이 설계하고 자문합니다. 개인과 법인 모두, 거래의 전 과정을 전문적으로 지원합니다.",
    color: "#9ca3af",
    image: "/brands/artledger-consulting.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1200&q=80",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&q=80",
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=1200&q=80",
    ],
    features: [
      { title: "미술품 절세 자문", desc: "증여·상속세 절세 전략, 법인 비용처리·감가상각 최적화, 세무 리스크 관리.", image: "/images/projects/arttoy/5.jpg" },
      { title: "자산관리 & 평가", desc: "미술품 포트폴리오 구축, 시장가 기반 가치 평가, Private-Sale 거래 중개.", image: "/brands/artledger-consulting.jpg" },
      { title: "컬렉팅 자문", desc: "체계적 컬렉션 전략 수립, 작품 선별·매입 자문, 장기 자산 관리.", image: "/images/services/collecting-advisory.jpg" },
      { title: "세금 & 법률 세미나", desc: "미술품 관련 세무·법률 이슈를 다루는 정기 세미나 프로그램." },
      { title: "컬렉팅 강의", desc: "입문자부터 전문 컬렉터까지, 단계별 컬렉팅 교육 과정." },
      { title: "전문가 네트워킹", desc: "세무사·변호사·큐레이터 등 전문가 초청 강연 및 네트워킹 이벤트." },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(brandsData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const brand = brandsData[slug];
  if (!brand) return { title: "Brand Not Found — 파소(PASO)" };
  const seoOverrides: Record<string, { title: string; description: string }> = {
    artrader: { title: "Artrader | 파소 미술품 데이터 분석 플랫폼", description: "파소(PASO)의 Artrader — 국내외 경매 1,500만 건 데이터. Artist Index와 종목분석서로 미술 투자 의사결정." },
    "paso-art-center": { title: "파소 아트센터 | 성북구 전시·대관·커뮤니티", description: "파소 아트센터(PASO Art Center) — 서울 성북구. 전시, 대관, 아트살롱. 신진작가와 컬렉터의 커뮤니티 공간." },
    "artledger-consulting": { title: "Artledger | 파소 미술 자산 자문·절세 전략", description: "파소(PASO)의 Artledger — 미술품 증여·상속, 법인 감가, 컬렉션 리밸런싱. 미술 자산 전 생애 관리." },
    "paso-agency": { title: "파소 에이전시 | IP·브랜드 아트 콜라보", description: "파소 에이전시(PASO Agency) — 캐릭터 IP 라이선싱, 아트토이, 기업 아트 프로젝트 기획·운영." },
  };
  const seo = seoOverrides[slug];
  return {
    title: seo?.title ?? `${brand.name} — 파소(PASO)`,
    description: seo?.description ?? brand.longDesc,
    openGraph: {
      title: seo?.title ?? `${brand.name} — 파소(PASO)`,
      description: seo?.description ?? brand.desc,
      images: [{ url: brand.image, width: 1600, height: 900 }],
    },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = brandsData[slug];

  if (!brand) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-[#888]">Brand not found</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <BrandLanding brand={brand} />
      <Footer />
    </div>
  );
}
