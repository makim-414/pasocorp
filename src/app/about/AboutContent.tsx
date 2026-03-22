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

      {/* About Paso */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">About</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>About Paso</motion.h2>

          <motion.div {...fadeUp} className="border-l-2 border-[#b8960b] pl-8 md:pl-12 space-y-8">
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              2013년 &lsquo;푸에스토 (Puesto) 갤러리&rsquo;라는 이름으로 시작된 &lsquo;파소 (Paso) 갤러리&rsquo;는 한국의 신진작가들을 발굴하고 지원하는 것에 주력하였습니다. 현재 10년간 개최하고 있는 &lsquo;신진 아티스트 공모전&rsquo;을 한국의 신진 작가들에게 개인전과 단체전 등 다양한 전시 기회를 지원하고, 작가들과 기업간의 협력 기회를 창출함으로써 유망 작가들의 시장 진출을 다방면으로 확장하는 것을 목표로 합니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              파소의 활동 범위는 B2C(기업과 개인)를 넘어 B2B(기업과 기업)과 B2G(기업과 정부) 분야로 확장하고 있습니다. 파소는 정부 기관과 협력하여 다양한 문화 활동이 집적된 지역을 미술과 문화 컨텐츠로 재생시켜, 생동감 넘치는 예술 공간으로 재단장하는 프로젝트들을 기획합니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              또한, 미술, 패션, 광고 등 문화계의 다양한 주요 협업사들과의 프로젝트를 조성하며, 기업의 ESG시급 운용 효율성을 높일 수 있는 영향력 있는 프로젝트들을 설계하는 것을 목표로 합니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              현재 파소는 신진 작가를 지원하는 것을 넘어 문화 예술계와 기업 / 정부간 협력에서 중추적 역할을 하는 조직으로 성장하고 있습니다. 특히 문화 유산의 글로벌화 및 활성화와 예술계에서 지속 가능한 파트너십 구축에 주요 초점을 맞추어 문화 조직 발전에 앞장서고 있습니다.
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

      {/* Vision */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.p {...fadeUp} className="text-[10px] tracking-[0.2em] uppercase text-[#b8960b] mb-4">Vision</motion.p>
          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>Walking Gallery</motion.h2>

          {/* Korean */}
          <motion.div {...fadeUp} className="mb-16">
            <div className="border-l-2 border-[#b8960b] pl-8 md:pl-12 space-y-6">
              <p className="text-lg md:text-xl text-white font-light leading-relaxed" style={{ fontFamily: "var(--font-dutch)" }}>
                사람들은 창에 투영된 무언가를 관찰한다.
              </p>
              <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
                파소 갤러리의 &lsquo;파소&rsquo;는 &lsquo;걸음&rsquo;이라는 의미의 스페인어를 차용하여, 패션 시장과 미술 시장의 접점이 되어 작품을 옷에 녹여 걸어다니는 갤러리를 실현시킨다.
              </p>
              <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
                이를 입는 고객들은 작품의 매체가 되고, 그들을 지나치는 무작위한 관중들에게 작품을 무의식 중에 노출시키는 &lsquo;창&rsquo; 역할을 한다.
              </p>
              <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
                이로써, 파소 갤러리는 무작위한 관중들에게 미적 영감을 전달하여 무의식 속 그들의 시각적 감수를 깨우고, 작가들에게는 패션 시장과의 접점에 머물며 새로운 무대와 시장을 창출하는 데에 비전이 있다.
              </p>
            </div>
          </motion.div>

          {/* English */}
          <motion.div {...fadeUp}>
            <div className="border-l-2 border-[#333] pl-8 md:pl-12 space-y-6">
              <p className="text-lg md:text-xl text-[#888] font-light leading-relaxed italic" style={{ fontFamily: "var(--font-dutch)" }}>
                Ones observe something that is projected through the frame.
              </p>
              <p className="text-sm md:text-base text-[#666] font-light leading-relaxed">
                Paso Gallery is derived from the Spanish term &lsquo;Paso&rsquo;, which means &lsquo;Step&rsquo;. Paso Gallery aims to be the point of intersection between fashion and art industries, and become the &lsquo;Walking Gallery&rsquo;.
              </p>
              <p className="text-sm md:text-base text-[#666] font-light leading-relaxed">
                Individuals who wear the Paso Gallery are the medium of the artwork. They act as a &lsquo;Frame&rsquo; that expose and deliver the artwork to the subconscious minds of the random observers.
              </p>
              <p className="text-sm md:text-base text-[#666] font-light leading-relaxed">
                Hereby, Paso Gallery awakens the artistic inspiration of random observers to activate their visual receptivity in an unconscious state, and we vision to create a new market for artists by positioning our brand into the intersection between fashion industry and art industry.
              </p>
            </div>
          </motion.div>
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
              <div className="max-w-[360px] mb-6 overflow-hidden">
                <img src="/team/abel-ko.png" alt="Abel Ko" className="w-full object-cover" />
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
              <div className="max-w-[360px] mb-6 overflow-hidden">
                <img src="/team/mark-kim.png" alt="Mark Kim" className="w-full object-cover" />
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
