"use client";

import { Gallery4 } from "@/components/blocks/gallery4";

const cases = [
  {
    id: "artrader",
    title: "Artrader — 미술품 거래 플랫폼",
    description: "1,500만+ 경매 데이터 기반, Artist Index와 정량 리포트로 미술품 투자의 새로운 기준을 제시합니다.",
    href: "/brands/artrader",
    image: "/brands/artrader-platform.jpg",
  },
  {
    id: "paso-art-center",
    title: "PASO Art Center — 마곡 문화 거점",
    description: "마곡의 새로운 문화 공간. 적정가 2차 시장 전시, 글로벌 이머징 작가 전시, 세미나와 커뮤니티.",
    href: "/brands/paso-art-center",
    image: "/brands/paso-artcenter-building.jpg",
  },
  {
    id: "paso-gallery",
    title: "Paso Gallery — 신진작가 플랫폼",
    description: "국내 신진작가 공모전·수상작 전시부터 아트 기반 MD 브랜드까지. 예술의 최전선.",
    href: "https://pasogallery.com",
    image: "/brands/paso-gallery.png",
  },
  {
    id: "paso-agency",
    title: "Paso Agency — IP & 브랜드 콜라보",
    description: "프랜차이즈 아트 콜라보, 캐릭터 IP 라이선싱, 아트토이. 브랜드와 예술의 접점을 설계합니다.",
    href: "/brands/paso-agency",
    image: "/images/projects/cu-dding-collab.jpg",
  },
  {
    id: "artledger",
    title: "Artledger Consulting — 미술 자산 자문",
    description: "증여·상속, 법인 비용·감가, 컬렉션 관리. 미술 자산의 전 생애를 함께합니다.",
    href: "/brands/artledger-consulting",
    image: "/brands/artledger-consulting.jpg",
  },
];

export default function ProjectCases() {
  return (
    <div className="bg-black">
      <Gallery4
        title="Projects"
        description="PASO 생태계를 구성하는 프로젝트들. 데이터, 전시, 자문, 브랜드 — 미술의 모든 것을 연결합니다."
        items={cases}
      />
    </div>
  );
}
