"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import EcosystemSection from "@/components/EcosystemSection";


const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.6, delay: i * 0.1 } });

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
            src="/brands/paso-gallery-about.jpg"
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
            <p className="text-lg md:text-2xl text-[#ccc] font-light leading-relaxed">
              PASO는 미술을 자산으로, 전략을 서비스로. 데이터 기반 미술품 거래 자문부터 갤러리·미술관 운영, 기업 컬렉션 자문과 미술 프로젝트 운용까지, 미술 생태계의 모든 것을 연결합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ecosystem */}
      <EcosystemSection />

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


    </>
  );
}
