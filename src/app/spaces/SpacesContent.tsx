"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function SpacesContent() {
  return (
    <main className="pt-16">
      {/* ── Hero with Background Image ── */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <Image
          src="/images/gallery/slide-hero.png"
          alt="Paso Gallery Heritage 외관"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div {...fadeUp}>            <h1
              className="text-3xl md:text-5xl font-medium text-white mb-4"
              style={{ fontFamily: "var(--font-dutch)" }}
            >
              Space Introduction
            </h1>
            <p className="text-[#d4d4d4] font-medium leading-relaxed max-w-2xl text-lg" style={{ wordBreak: "keep-all" }}>
              서울 종로구에 위치한 한옥 갤러리. 전통 건축의 고유한 공간미 위에 동시대 미술이 펼쳐지는 독립 전시 공간입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PASO Event Partner ── */}
      <section className="py-28 md:py-36 bg-black border-b border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp}>
            <img
              src="/images/logos/paso-logo.png"
              alt="PASO"
              className="h-12 md:h-16 w-auto mx-auto mb-4"
            />
            <p className="text-sm md:text-base text-[#bbb] mb-12" style={{ fontFamily: "var(--font-sans)" }}>
              Your Event Partner for Exhibition
            </p>
            <div className="max-w-[680px] mx-auto space-y-6 text-left text-[#e5e5e5] font-normal text-base md:text-[17px]" style={{ wordBreak: "keep-all", overflowWrap: "break-word", lineHeight: 1.9 }}>
              <p>
                파소 갤러리 헤리티지는 성북동 초입에 위치한 70년 전통의 종가를 모던하게 개조하여 운영하는 파소의 전시 공간입니다.
              </p>
              <p>
                고유한 역사와 현대적 감각이 조화된 이 공간은 프라이빗하고 세련된 행사를 위한 최적의 장소로, 웨딩, VIP 이벤트, 기업 B2B 행사 등 다양한 형태의 행사에 활용 가능합니다.
              </p>
              <p>
                파소 갤러리는 지난 10년간 신진 작가 공모전과 여러 아티스트 및 브랜드와의 협업을 통해 깊이 있는 전시 노하우를 구축해 왔습니다. 또한 작가들의 작업을 IP 형태로 제공하는 파소 에이전시와 미술 VIP 커뮤니티 운영을 통해 기업 고객과의 다양한 협력 경험을 갖추고 있습니다.
              </p>
              <p>
                본 공간 소개서는 행사 기획사와의 협업을 통해 전시 공간에서 독창적이고 품격 있는 행사를 기획하실 수 있도록 제안드리기 위해 제작되었습니다.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-white text-xl mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}>Paso Gallery</p>
                <div className="text-[11px] text-[#bbb] font-normal space-y-0.5">
                  <p>전시 기획 및 미술품 판매</p>
                  <p>작품 기반 제품 제작 (에디션, 판화 큐레이션)</p>
                </div>
              </div>
              <div>
                <p className="text-white text-xl mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}>Paso Agency</p>
                <div className="text-[11px] text-[#bbb] font-normal space-y-0.5">
                  <p>B2B IP 프로젝트 (미가 커미션 작업)</p>
                  <p>외부 전시 기획</p>
                </div>
              </div>
              <div>
                <p className="text-white text-xl mb-2" style={{ fontFamily: "var(--font-sans)", fontWeight: 700 }}>Paso Gallery<br /><span className="text-sm text-[#d4d4d4]" style={{ fontWeight: 400 }}>Heritage</span></p>
                <div className="text-[11px] text-[#bbb] font-normal space-y-0.5">
                  <p>기업행사 협력기획</p>
                  <p>전시 기획</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Brochure Download ── */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-b border-[#1a1a1a]">
        <div className="max-w-[700px] mx-auto px-6 md:px-12 text-center">
          <motion.p {...fadeUp} className="text-xs text-[#bbb] uppercase mb-4">Brochure</motion.p>
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}>
            공간 안내서
          </motion.h2>
          <motion.p {...fadeUp} className="text-[#d4d4d4] text-sm md:text-base mb-10" style={{ wordBreak: "keep-all", lineHeight: 1.85 }}>
            행사 기획에 필요한 공간 구성, 도면, 이용 안내가 담겨 있습니다.
          </motion.p>
          <motion.div {...fadeUp}>
            <a
              href="/docs/paso-gallery-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 rounded-full bg-[#b8960b] text-black text-sm font-medium hover:opacity-85 transition-all duration-300"
            >
              안내서 PDF 다운로드
            </a>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12 rounded-lg overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a]">
            <iframe
              src="/docs/paso-gallery-brochure.pdf#view=FitH"
              title="Paso Gallery 안내서 미리보기"
              className="w-full h-[70vh] md:h-[85vh]"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Private Programs ── */}
      <section className="py-32 md:py-44 bg-black border-y border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <motion.div {...fadeUp}>
            <h2
              className="text-3xl md:text-5xl font-medium text-white mb-8"
              style={{ fontFamily: "var(--font-dutch)" }}
            >
              Private Programs
            </h2>
            <div className="w-16 h-[3px] bg-white mx-auto mb-12" />
            <div className="space-y-8 text-[#d4d4d4] font-medium leading-relaxed text-sm md:text-base">
              <p>
                Space by PASO는 파소의 첫 번째 전시 공간으로,<br />
                성북동 초입의 성균관 유생 종가를 현대적으로 재건축한 전시 공간입니다.
              </p>
              <p>
                파소는 지난 10여 년간 꾸준히 이어온 신진 작가 발굴과 지원의 철학을 담아,<br />
                작가들에게 상업적 가능성을 실험하고 시장과 만날 수 있는 기회를 제공하였습니다.
              </p>
              <p>
                현재 Space by PASO는 전시와 더불어 브랜드 협업 및 다양한 문화 행사를 유연하게 수용하는 기획 공간으로 운영됩니다.
              </p>
              <p>
                파소는 미술 시장 전반의 다양한 영역에서 비즈니스를 전개하며,<br />
                예술의 새로운 가능성을 모색하고 있습니다.
              </p>
              <p>
                더 많은 정보는 파소의 공식 웹사이트에서 확인하실 수 있습니다.<br />
                <a href="https://pasocorp.com" target="_blank" rel="noopener noreferrer" className="text-[#b8960b] hover:text-white transition-colors">www.pasocorp.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Location Info ── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Location", value: "92, Seonggyungwan-ro\nJongno-gu, Seoul" },
              { label: "Hours", value: "Tue Sat\n11:00 19:00" },
              { label: "Contact", value: "makim@ironact.net\n+82 10-6432-4471" },
              { label: "Instagram", value: "@pasogallery" },
            ].map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              >
                <p className="text-[10px] uppercase text-[#555] mb-3">{info.label}</p>
                <p className="text-sm text-[#d4d4d4] font-medium whitespace-pre-line">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
