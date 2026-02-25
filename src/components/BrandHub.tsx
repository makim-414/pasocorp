"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const mainBrands = [
  {
    name: "Paso Gallery",
    slug: "paso-gallery",
    year: 2021,
    desc: "국내 신진작가 공모전·수상작 전시, 아트 기반 MD 브랜드",
    activity: "현재 전시: 2025 신진작가 공모전 수상작전",
    image: "/brands/paso-gallery.jpg",
    color: "#1e3a5f",
  },
  {
    name: "PASO Art Center",
    slug: "paso-art-center",
    year: 2025,
    desc: "적정가 2차 시장 전시, 글로벌 이머징 작가 전시",
    activity: "2025 오픈 예정 (with Mass C&G)",
    image: "/brands/paso-artcenter.jpg",
    color: "#a0522d",
  },
  {
    name: "Artrader",
    slug: "artrader",
    year: 2024,
    desc: "글로벌 미술 거래 데이터베이스·시장 분석 플랫폼",
    activity: "1,500만+ 거래 데이터 실시간 분석",
    image: "/brands/artrader.jpg",
    color: "#b8960b",
  },
];

const subBrands = [
  {
    name: "Paso Agency",
    slug: "paso-agency",
    year: 2023,
    desc: "캐릭터 IP 라이센싱, B2B 아트 프로젝트",
    activity: "신규: 프랜차이즈 아트 콜라보 프로젝트",
    image: "/brands/paso-agency.jpg",
    color: "#d4a574",
  },
  {
    name: "Artledger Consulting",
    slug: "artledger-consulting",
    year: 2025,
    desc: "미술품 절세 자문, Private-Sale 거래",
    activity: "신규 런칭: 법인 미술품 절세 패키지",
    image: "/brands/artledger-consulting.jpg",
    color: "#9ca3af",
  },
];

const titleWords = "Five Brands, One Vision".split(" ");

export default function BrandHub() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section id="brands" className="py-32 md:py-40 bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4"
        >
          Our Brands
        </motion.p>
        <h2 className="text-3xl md:text-5xl font-light text-white mb-16" style={{ fontFamily: "var(--font-dutch)" }}>
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* Bento: top row 3 large */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {mainBrands.map((brand, i) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/brands/${brand.slug}`}
                className={`group block relative bg-[#0a0a0a] border border-[#1a1a1a] overflow-hidden transition-all duration-500 hover:border-white/[0.08] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] ${hovered !== null && hovered !== i ? "blur-[2px] scale-[0.97] opacity-60" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/25 transition-colors duration-700" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700" style={{ background: `linear-gradient(135deg, ${brand.color}40, transparent)` }} />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs tracking-[0.15em] text-[#b8960b] mb-3">{brand.year}</p>
                  <h3 className="text-xl md:text-2xl font-light text-white mb-2 group-hover:text-[#e8e8e8] transition-colors" style={{ fontFamily: "var(--font-dutch)" }}>{brand.name}</h3>
                  <p className="text-sm text-[#888] font-light leading-relaxed mb-4">{brand.desc}</p>
                  <p className="text-xs text-[#555] font-light tracking-wide">{brand.activity}</p>
                  <div className="mt-4 w-0 group-hover:w-12 h-px transition-all duration-500" style={{ backgroundColor: brand.color }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bento: bottom row 2 compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subBrands.map((brand, i) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i + 3) * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/brands/${brand.slug}`}
                className={`group block relative bg-[#0a0a0a] border border-[#1a1a1a] overflow-hidden transition-all duration-500 hover:border-[#333] ${hovered !== null && hovered !== i + 3 ? "blur-[2px] scale-[0.97] opacity-60" : ""}`}
                onMouseEnter={() => setHovered(i + 3)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative h-48 sm:h-auto sm:w-2/5 overflow-hidden shrink-0">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <p className="text-xs tracking-[0.15em] text-[#b8960b] mb-2">{brand.year}</p>
                    <h3 className="text-lg font-light text-white mb-2 group-hover:text-[#e8e8e8] transition-colors" style={{ fontFamily: "var(--font-dutch)" }}>{brand.name}</h3>
                    <p className="text-sm text-[#888] font-light leading-relaxed mb-2">{brand.desc}</p>
                    <p className="text-xs text-[#555] font-light tracking-wide">{brand.activity}</p>
                    <div className="mt-3 w-0 group-hover:w-10 h-px transition-all duration-500" style={{ backgroundColor: brand.color }} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
