"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FlywheelVisual from "./FlywheelVisual";
import { useLocale } from "@/i18n/LocaleProvider";

export default function EcosystemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLocale();

  return (
    <section ref={ref} className="bg-black border-t border-border py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 md:mb-12"
        >          <h2
            className="text-3xl md:text-5xl font-medium text-white mb-4 leading-tight"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            {t("ecosystem.title")}
          </h2>
          <p className="text-sm md:text-base text-muted font-medium" style={{ wordBreak: "keep-all" }}>
            {t("ecosystem.lead")}
          </p>
        </motion.div>

        {/* Flywheel Visual */}
        <div className="max-w-[400px] mx-auto">
          <FlywheelVisual />
        </div>

        {/* Bottom description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center text-xs md:text-sm text-muted font-medium mt-8 md:mt-12 mx-auto leading-relaxed"
          style={{ wordBreak: "keep-all" }}
        >
          {t("ecosystem.note")}
        </motion.p>
      </div>
    </section>
  );
}
