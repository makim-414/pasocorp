"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.6, delay: i * 0.1 } });

const timeline = [
  { year: "2020", event: "PASO Inc. 설립" },
  { year: "2021", event: "Paso Gallery 오픈 (종로구)" },
  { year: "2023", event: "Paso Agency 론칭 — 캐릭터 IP·B2B 프로젝트" },
  { year: "2024", event: "Artrader 플랫폼 런칭 — 1,500만+ 거래 데이터" },
  { year: "2025", event: "PASO Art Center 오픈 (with Mass C&G)\nArtledger Consulting 런칭" },
];

const team = [
  { name: "Leadership", role: "CEO & Founder", desc: "미술 시장 데이터 분석 전문가. 금융·테크 배경으로 미술 자산화 전략을 설계합니다." },
  { name: "Advisory Board", role: "세무·법률·큐레이션", desc: "세무사, 변호사, 큐레이터로 구성된 자문단이 전문 서비스를 지원합니다." },
];

const values = [
  { title: "Data-First", desc: "감이 아닌 데이터로. 1,500만 건 거래 데이터에 기반한 의사결정." },
  { title: "Full Ecosystem", desc: "분석-자문-전시-유통-IP를 잇는 완결형 미술 생태계." },
  { title: "Accessibility", desc: "미술을 소수의 전유물이 아닌, 모두가 접근 가능한 자산 클래스로." },
];

export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/brands/paso-artcenter-building.jpg"
            alt="PASO"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pb-16 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-light text-white"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            About PASO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg text-[#888] font-light max-w-xl"
          >
            Precision-based Art Strategy & Operation
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="border-l-2 border-[#b8960b] pl-8 md:pl-12">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-6">Mission</p>
            <p className="text-lg md:text-2xl text-[#ccc] font-light leading-relaxed" style={{ fontFamily: "var(--font-dutch)" }}>
              PASO는 미술을 자산으로, 전략을 서비스로. 데이터 기반 미술품 거래 자문부터 갤러리·미술관 운영, 기업 컬렉션 자문과 미술 프로젝트 운용까지, 미술 생태계의 모든 것을 연결합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Values</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>What Drives Us</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} {...stagger(i)} className="border border-[#1a1a1a] p-8 hover:border-[#333] transition-colors">
                <h3 className="text-lg text-white font-light mb-3" style={{ fontFamily: "var(--font-dutch)" }}>{v.title}</h3>
                <p className="text-sm text-[#888] font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">History</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>Our Journey</motion.h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <motion.div key={item.year} {...stagger(i)} className="flex gap-8 items-start py-6 border-b border-[#1a1a1a] last:border-0">
                <span className="text-2xl font-light text-[#b8960b] shrink-0 w-16" style={{ fontFamily: "var(--font-dutch)" }}>{item.year}</span>
                <p className="text-sm text-[#888] font-light leading-relaxed whitespace-pre-line">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Team</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>Leadership</motion.h2>

          {/* Co-Founders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Abel Ko */}
            <motion.div {...stagger(0)}>
              <div className="relative aspect-[3/4] max-w-[360px] mb-6 border-2 border-[#2a6fff] overflow-hidden">
                <Image src="/team/abel-ko.jpg" alt="Abel Ko" fill className="object-cover" />
              </div>
              <h3 className="text-2xl text-white font-light mb-1" style={{ fontFamily: "var(--font-dutch)" }}>Abel Ko</h3>
              <p className="text-xs tracking-[0.15em] uppercase text-[#b8960b] mb-5">CO-FOUNDER &nbsp;|&nbsp; PRODUCT & ENGINEERING</p>
              <p className="text-sm text-[#ccc] font-light italic mb-4">&ldquo;사람을 위한 기술로 위대한 기업을 만들어가는 여정&rdquo;</p>
              <ul className="space-y-1.5 text-sm text-[#888] font-light leading-relaxed">
                <li className="flex gap-2"><span className="text-[#555]">·</span><span>전 토스(Viva Republica) · 뱅크샐러드 Senior Software Engineer</span></li>
                <li className="flex gap-2"><span className="text-[#555]">·</span><span>8년 이상 대규모 서비스 환경에서의 제품 개발 경험</span></li>
                <li className="flex gap-2"><span className="text-[#555]">·</span><span>초기 단계부터 Series G에 이르기까지, 다양한 스케일과 도메인의 스타트업 환경에서 문제 해결과 제품 개발을 수행해온 경험을 보유하고 있습니다.</span></li>
                <li className="flex gap-2"><span className="text-[#555]">·</span><span>Prompt Architect에서 GEO 엔진·프롬프트 예측·Visibility/SoV 대시보드 영역의 설계를 총괄합니다.</span></li>
              </ul>
            </motion.div>

            {/* Mark Kim */}
            <motion.div {...stagger(1)}>
              <div className="relative aspect-[3/4] max-w-[360px] mb-6 overflow-hidden">
                <Image src="/team/mark-kim.jpg" alt="Mark Kim" fill className="object-cover" />
              </div>
              <h3 className="text-2xl text-white font-light mb-1" style={{ fontFamily: "var(--font-dutch)" }}>Mark Kim</h3>
              <p className="text-xs tracking-[0.15em] uppercase text-[#b8960b] mb-5">CO-FOUNDER &nbsp;|&nbsp; BUSINESS, STRATEGY & DATA</p>
              <p className="text-sm text-[#ccc] font-light italic mb-4">&ldquo;시장이 이해할 수 있도록 데이터를 설계합니다&rdquo;</p>
              <ul className="space-y-1.5 text-sm text-[#888] font-light leading-relaxed">
                <li className="flex gap-2"><span className="text-[#555]">·</span><span>5년 이상 데이터 · IP · 대체투자 자산 영역에서 다수의 사업 실행 및 운영</span></li>
                <li className="flex gap-2"><span className="text-[#555]">·</span><span>대형 금융사·투자기관을 대상으로 비정형 데이터와 전략적 데이터를 구매 의사결정과 리밸런싱에 쓰이는 데이터 구조로 전환하여 공급해왔습니다.</span></li>
                <li className="flex gap-2"><span className="text-[#555]">·</span><span>해외 컨설팅펌 벤처 아키텍팅 자문, 국내외 B2B 프로젝트 등의 형태로 데이터 기반 Market Intelligence를 제공해왔습니다.</span></li>
                <li className="flex gap-2"><span className="text-[#555]">·</span><span>Prompt Architect에서 BIM 등의 Core Intelligence 설계와 GEO 사업개발 영역을 총괄합니다.</span></li>
              </ul>
            </motion.div>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((t, i) => (
              <motion.div key={t.name} {...stagger(i + 2)} className="p-8 border border-[#1a1a1a]">
                <p className="text-xs tracking-[0.15em] uppercase text-[#b8960b] mb-2">{t.role}</p>
                <h3 className="text-xl text-white font-light mb-3" style={{ fontFamily: "var(--font-dutch)" }}>{t.name}</h3>
                <p className="text-sm text-[#888] font-light leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
