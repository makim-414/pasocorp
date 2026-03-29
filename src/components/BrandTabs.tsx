"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TransitionPanel } from "@/components/core/transition-panel";
import Image from "next/image";
import Link from "next/link";

const BRANDS = [
  { title: "Artrader", subtitle: "Data-Driven Art Trading", content: "글로벌 미술 거래 데이터베이스 1,580만+ 건. Artist Index, 종목분석서 스타일 정량 리포트.", image: "/brands/artrader-platform-hd.png", color: "#b8960b", cta: "EXPLORE" },
  { title: "Artledger", subtitle: "Advisory & Tax Strategy", content: "증여·상속, 법인 비용·감가, 컬렉션 관리. 미술 자산의 전 생애를 함께합니다.", image: "/brands/artledger-consulting.jpg", color: "#9ca3af", cta: "EXPLORE" },
  { title: "Gallery", subtitle: "Primary Art Market", content: "국내 신진작가 공모전, 글로벌 이머징 작가 전시. 예술의 최전선.", image: "/brands/paso-gallery.png", color: "#1e3a5f", cta: "EXPLORE" },
  { title: "Agency", subtitle: "IP & Brand Collaboration", content: "브랜드 아트 프로젝트, 캐릭터 IP 라이선싱, 아트토이.", image: "/images/projects/hongdae-flagship/2.jpg", color: "#d4a574", cta: "EXPLORE" },
  { title: "Art Center", subtitle: "Cultural Hub, Magok", content: "마곡의 새로운 문화 거점. 전시, 세미나, 커뮤니티.", image: "/brands/paso-artcenter-building.jpg", color: "#a0522d", cta: "EXPLORE" },
];

export default function BrandTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = BRANDS[activeIndex];

  return (
    <div className="relative overflow-hidden min-h-[350px] md:min-h-[400px]">
      {/* Background image crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          <Image src={active.image} alt={active.title} fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/65" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 px-5 md:px-14 py-10 md:py-24">
        {/* Tab buttons — horizontal scroll on mobile */}
        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar pb-1">
          {BRANDS.map((brand, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="shrink-0 px-3 md:px-4 py-1.5 md:py-2 text-[10px] md:text-xs tracking-[0.08em] uppercase font-medium rounded-full border transition-all duration-300"
              style={{
                borderColor: activeIndex === index ? brand.color : "rgba(255,255,255,0.15)",
                color: activeIndex === index ? brand.color : "rgba(255,255,255,0.5)",
                backgroundColor: activeIndex === index ? `${brand.color}15` : "transparent",
              }}
            >
              {brand.title}
            </button>
          ))}
        </div>

        {/* Content panel */}
        <div className="max-w-xl">
          <TransitionPanel
            activeIndex={activeIndex}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            variants={{
              enter: { opacity: 0, y: -20, filter: "blur(4px)" },
              center: { opacity: 1, y: 0, filter: "blur(0px)" },
              exit: { opacity: 0, y: 20, filter: "blur(4px)" },
            }}
          >
            {BRANDS.map((brand) => (
              <div key={brand.title} className="py-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-px" style={{ backgroundColor: brand.color }} />
                  <span className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase" style={{ color: brand.color }}>{brand.title}</span>
                </div>
                <h3 className="text-xl md:text-3xl font-light text-white mb-3 leading-tight" style={{ fontFamily: "var(--font-dutch)" }}>
                  {brand.subtitle}
                </h3>
                <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed mb-5">{brand.content}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.15em] uppercase font-medium text-white hover:opacity-60 transition-opacity">
                  {brand.cta} <span className="text-base">⟶</span>
                </Link>
              </div>
            ))}
          </TransitionPanel>
        </div>
      </div>
    </div>
  );
}
