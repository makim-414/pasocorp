"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const mainBrands = [
  {
    name: "Paso Gallery",
    slug: "paso-gallery",
    externalUrl: "https://pasogallery.com",
    year: 2021,
    desc: "국내외 신진·라이징 작가를 엄선하여 소개하며, 영 컬렉터를 위한 프라이빗 프로그램을 통해 컬렉팅의 첫 걸음을 함께합니다.",
    activity: "",
    image: "/brands/paso-gallery.png",
    color: "#1e3a5f",
  },
  {
    name: "PASO Art Center",
    slug: "paso-art-center",
    year: 2025,
    desc: "해외 이머징 작가부터 국내 유망 작가까지, 전시와 아트토이 발행 등 IP 확장 프로젝트를 전개하며, 상설전에서는 Artrader 데이터로 엄선한 블루칩·옥션 상위권 작품 70여 점을 상시 만날 수 있습니다.",
    activity: "2025 오픈 예정 (with Mass C&G)",
    image: "/brands/paso-artcenter.jpg",
    color: "#a0522d",
  },
  {
    name: "Artrader",
    slug: "artrader",
    year: 2024,
    desc: "해외 1,500만 건·국내 9만여 건의 정제된 옥션 데이터로 실거래가와 적정 매입가를 산출하는 미술품 2차 거래(Private Sales) 플랫폼이자 법인 컬렉션의 구축과 리밸런싱에 특화된 데이터베이스입니다.",
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
    desc: "기업이 미술 기반 IP로 최대의 브랜드 가치를 만들어내고, 작가의 IP가 성장 속에서도 온전히 보호받을 수 있도록—양측 모두에게 지속 가능한 구조를 설계합니다.",
    activity: "신규: 프랜차이즈 아트 콜라보 프로젝트",
    image: "/images/projects/hongdae-flagship/2.jpg",
    color: "#d4a574",
  },
  {
    name: "Artledger Consulting",
    slug: "artledger-consulting",
    year: 2025,
    desc: "매입 이후의 세금 처리, 절세 전략, 법인 컬렉션 운용 전반을 설계하고 자문합니다. 개인과 법인 모두, 거래의 전 과정을 전문적으로 지원합니다.",
    activity: "신규 런칭: 법인 미술품 절세 패키지",
    image: "/brands/artledger-consulting.jpg",
    color: "#9ca3af",
  },
];

const titleWords = "Five Brands, One Vision".split(" ");

export default function BrandHub() {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section id="brands" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-3 sm:mb-4"
        >
          Our Brands
        </motion.p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 sm:mb-12 md:mb-16 leading-tight" style={{ fontFamily: "var(--font-dutch)" }}>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {mainBrands.map((brand, i) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={brand.externalUrl || `/brands/${brand.slug}`}
                {...(brand.externalUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`group block relative bg-[#0a0a0a] border border-[#1a1a1a] overflow-hidden transition-all duration-500 hover:border-white/[0.08] hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] ${hovered !== null && hovered !== i ? "md:blur-[2px] md:scale-[0.97] md:opacity-60" : ""}`}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-cover transition-all duration-[1.2s] ease-out group-hover:scale-[1.08]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/25 transition-colors duration-700" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700" style={{ background: `linear-gradient(135deg, ${brand.color}40, transparent)` }} />
                  <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <p className="text-xs tracking-[0.15em] text-[#b8960b] mb-2 sm:mb-3">{brand.year}</p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light text-white mb-2 group-hover:text-[#e8e8e8] transition-colors leading-tight" style={{ fontFamily: "var(--font-dutch)" }}>{brand.name}</h3>
                  <p className="text-xs sm:text-sm text-[#888] font-light leading-relaxed mb-3 sm:mb-4 line-clamp-3">{brand.desc}</p>
                  <p className="text-xs text-[#555] font-light tracking-wide line-clamp-2">{brand.activity}</p>
                  <div className="mt-3 sm:mt-4 w-0 group-hover:w-8 sm:group-hover:w-12 h-px transition-all duration-500" style={{ backgroundColor: brand.color }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bento: bottom row 2 compact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
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
                className={`group block relative bg-[#0a0a0a] border border-[#1a1a1a] overflow-hidden transition-all duration-500 hover:border-[#333] ${hovered !== null && hovered !== i + 3 ? "md:blur-[2px] md:scale-[0.97] md:opacity-60" : ""}`}
                onMouseEnter={() => setHovered(i + 3)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative h-40 sm:h-48 md:h-auto md:w-2/5 overflow-hidden shrink-0">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col justify-center">
                    <p className="text-xs tracking-[0.15em] text-[#b8960b] mb-2">{brand.year}</p>
                    <h3 className="text-base sm:text-lg font-light text-white mb-2 group-hover:text-[#e8e8e8] transition-colors leading-tight" style={{ fontFamily: "var(--font-dutch)" }}>{brand.name}</h3>
                    <p className="text-xs sm:text-sm text-[#888] font-light leading-relaxed mb-2 line-clamp-3">{brand.desc}</p>
                    <p className="text-xs text-[#555] font-light tracking-wide line-clamp-2">{brand.activity}</p>
                    <div className="mt-3 w-0 group-hover:w-8 sm:group-hover:w-10 h-px transition-all duration-500" style={{ backgroundColor: brand.color }} />
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
