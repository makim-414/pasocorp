"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FlywheelVisual from "./FlywheelVisual";

export default function EcosystemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-black border-t border-[#1a1a1a] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#b8960b] mb-4">
            Ecosystem
          </p>
          <h2
            className="text-3xl md:text-5xl font-light text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            PASO Integrated Ecosystem
          </h2>
          <p className="text-sm md:text-base text-[#888] font-light">
            갤러리를 중심으로, 데이터·자문·전시·IP가 하나로 연결됩니다.
          </p>
        </motion.div>

        {/* Flywheel Visual — Gallery active by default */}
        <div className="max-w-[400px] mx-auto">
          <FlywheelVisual defaultActive="gallery" />
        </div>

        {/* Bottom description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center text-xs md:text-sm text-[#888] font-light mt-8 md:mt-12 max-w-lg mx-auto leading-relaxed"
        >
          Paso Gallery는 PASO 생태계의 핵심 브랜드로, 신진작가 발굴부터 시장 연결까지를 담당합니다.
        </motion.p>
      </div>
    </section>
  );
}
