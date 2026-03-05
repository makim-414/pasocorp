"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const verbs = ["Exhibit", "Evaluate", "Trade", "Consult", "Connect", "Invest"];

export default function WeArtHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % verbs.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5">
      {/* "we" */}
      <span className="text-white text-[clamp(1.8rem,5vw,4.5rem)] font-light tracking-tight">
        we
      </span>

      {/* Rotating verb */}
      <div className="relative min-w-[clamp(5.5rem,18vw,14rem)] text-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={verbs[index]}
            initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(10px)" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="block text-[#b8960b] text-[clamp(1.8rem,5vw,4.5rem)] font-medium tracking-tight"
            style={{ fontFamily: "var(--font-dutch)" }}
          >
            {verbs[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* "Art." */}
      <span
        className="text-white text-[clamp(1.8rem,5vw,4.5rem)] font-medium tracking-tight"
        style={{ fontFamily: "var(--font-dutch)" }}
      >
        Art.
      </span>
    </div>
  );
}
