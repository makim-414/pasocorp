"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.6, delay: i * 0.1 } });

const solutions = [
  {
    brand: "Artrader",
    slug: "artrader",
    title: "Data & Market Intelligence",
    desc: "글로벌 경매·Private Sales 1,500만+ 거래 데이터 기반 시장 분석 플랫폼",
    color: "#ffffff",
    features: ["Artist Index 정량 리포트", "실시간 경매 데이터", "포트폴리오 가치 모니터링", "트렌드 예측 시그널"],
    image: "/brands/artrader-platform-hd.png",
  },
  {
    brand: "Artledger Consulting",
    slug: "artledger-consulting",
    title: "Advisory & Tax Strategy",
    desc: "미술품 증여·상속 절세, 법인 비용처리, 자산 가치 평가, 체계적 컬렉팅 자문",
    color: "#ffffff",
    features: ["절세 전략 수립", "미술품 가치 평가", "컬렉션 포트폴리오 구축", "세미나·강연 프로그램"],
    image: "/brands/artledger-consulting.jpg",
  },
  {
    brand: "PASO Art Center",
    slug: "paso-art-center",
    title: "Exhibition & Community",
    desc: "적정가 2차 시장 Top 30 전시, 글로벌 이머징 작가 전시, 커뮤니티 프로그램",
    color: "#ffffff",
    features: ["기획전 · 상설전", "아트 살롱 · 토크", "레지던시 프로그램"],
    image: "/brands/paso-artcenter-building.jpg",
  },
  {
    brand: "Paso Gallery",
    slug: "paso-gallery",
    title: "Emerging Artists & MD",
    desc: "국내 신진작가 공모전·수상작 전시, 아트 기반 MD 브랜드 운영",
    color: "#ffffff",
    features: ["신진작가 공모전", "수상작 전시", "아트 MD 컬렉션", "작가 레지던시"],
    image: "/brands/paso-gallery.png",
  },
  {
    brand: "Paso Agency",
    slug: "paso-agency",
    title: "IP & Brand Collaboration",
    desc: "캐릭터 IP 라이선싱, 프랜차이즈 아트 콜라보, 아트토이·스트릿 아트",
    color: "#ffffff",
    features: ["캐릭터 IP 개발", "브랜드 콜라보레이션", "아트토이 제작", "공간 아트 큐레이션"],
    image: "/brands/paso-agency.jpg",
  },
];

export default function SolutionsContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/exhibitions/golden-reeds/golden-reeds-1.jpg"
            alt="PASO Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-white"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            Integrated Art Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg text-[#bbb] font-light max-w-2xl"
            style={{ wordBreak: "keep-all" }}
          >
            데이터 분석부터 자문, 전시, IP 라이선싱까지. 미술 생태계의 모든 가치 사슬을 하나로.
          </motion.p>
        </div>
      </section>

      {/* Solutions list */}
      <section className="pb-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-0">
          {solutions.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-[#1a1a1a] grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 md:py-24 items-center"
            >
              <div className={i % 2 ? "lg:order-2" : ""}>
                <p className="text-[10px] uppercase mb-3" style={{ color: s.color }}>{s.brand}</p>
                <h2 className="text-2xl md:text-3xl font-light text-white mb-4" style={{ fontFamily: "var(--font-dutch)" }}>{s.title}</h2>
                <p className="text-base text-[#999] font-normal leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="text-base text-[#ccc] font-normal flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/brands/${s.slug}`}
                  className="inline-block text-xs uppercase border px-6 py-2.5 hover:bg-white/5 transition-colors"
                  style={{ color: s.color, borderColor: `${s.color}40` }}
                >
                  Learn More →
                </Link>
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
