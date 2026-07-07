"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import EcosystemSection from "@/components/EcosystemSection";
import { useLocale } from "@/i18n/LocaleProvider";


const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = (i: number) => ({ ...fadeUp, transition: { duration: 0.6, delay: i * 0.1 } });

const values = [
  { title: "Data-First", desc: "감이 아닌 데이터로. 1,500만 건 거래 데이터에 기반한 의사결정" },
  { title: "Full Ecosystem", desc: "분석-자문-전시-유통-IP를 잇는 완결형 미술 생태계" },
  { title: "Accessibility", desc: "미술을 소수의 전유물이 아닌, 모두가 접근 가능한 자산 클래스로" },
];

export default function AboutContent() {
  const { t, locale } = useLocale();
  const missionCopy =
    locale === "en"
      ? "PASO treats art as an asset class and strategy as a service. From data-driven art transaction advisory to gallery and museum operations, corporate collection consulting, and art-project management — PASO connects every layer of the art ecosystem."
      : "PASO는 미술을 자산으로, 전략을 서비스로. 데이터 기반 미술품 거래 자문부터 갤러리·미술관 운영, 기업 컬렉션 자문과 미술 프로젝트 운용까지, 미술 생태계의 모든 것을 연결합니다.";

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
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-white"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            {t("about.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-lg text-[#888] font-light max-w-xl"
            style={{ wordBreak: "keep-all" }}
          >
            {t("about.lead")}
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <motion.div {...fadeUp} className="text-center">
            <p className="text-base md:text-lg text-[#ccc] font-light leading-relaxed" style={{ wordBreak: "keep-all" }}>
              {missionCopy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Showcase images */}
      <section className="bg-black">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <motion.div {...fadeUp} className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/exhibitions/redegallery/redegallery-3.jpg"
                alt="Project ReDE Gallery"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div {...stagger(1)} className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/exhibitions/forest-of-finity/forest-of-finity-8.jpg"
                alt="Forest of Finity"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <EcosystemSection />

      {/* Wide showcase image */}
      <section className="bg-black">
        <motion.div {...fadeUp} className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <Image
            src="/images/exhibitions/traces-of-light/intermission-new1.jpg"
            alt="Paso Gallery Hanok Exhibition Space"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* About Paso */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>About Paso</motion.h2>

          <motion.div {...fadeUp} className="border-l-2 border-[#b8960b] pl-8 md:pl-12 space-y-8">
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              2013년 &lsquo;푸에스토 (Puesto) 갤러리&rsquo;라는 이름으로 시작된 &lsquo;파소 (Paso) 갤러리&rsquo;는 한국의 신진작가들을 발굴하고 지원하는 것에 주력하였습니다. 현재 10년간 개최하고 있는 &lsquo;신진 아티스트 공모전&rsquo;을 한국의 신진 작가들에게 개인전과 단체전 등 다양한 전시 기회를 지원하고, 작가들과 기업간의 협력 기회를 창출함으로써 유망 작가들의 시장 진출을 다방면으로 확장하는 것을 목표로 합니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              파소의 활동 범위는 B2C(기업과 개인)를 넘어 B2B(기업과 기업)과 B2G(기업과 정부) 분야로 확장하고 있습니다. 파소는 정부 기관과 협력하여 다양한 문화 활동이 집적된 지역을 미술과 문화 컨텐츠로 재생시켜, 생동감 넘치는 예술 공간으로 재단장하는 프로젝트들을 기획합니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              또한, 미술, 패션, 광고 등 문화계의 다양한 주요 협업사들과의 프로젝트를 조성하며, 기업의 ESG 자금 운용 효율성을 높일 수 있는 영향력 있는 프로젝트들을 설계하는 것을 목표로 합니다.
            </p>
            <p className="text-sm md:text-base text-[#ccc] font-light leading-relaxed">
              현재 파소는 신진 작가를 지원하는 것을 넘어 문화 예술계와 기업 / 정부간 협력에서 중추적 역할을 하는 조직으로 성장하고 있습니다. 특히 문화 유산의 글로벌화 및 활성화와 예술계에서 지속 가능한 파트너십 구축에 주요 초점을 맞추어 문화 조직 발전에 앞장서고 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0a0a0a] border-y border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">          <motion.h2 {...fadeUp} className="text-2xl md:text-4xl font-light text-white mb-14" style={{ fontFamily: "var(--font-dutch)" }}>What Drives Us</motion.h2>
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
