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
    <div className="flex items-center justify-center gap-4 md:gap-6">
      {/* "we" - white, lowercase */}
      <span className="text-white text-[clamp(2rem,6vw,5rem)] font-light tracking-tight">
        we
      </span>

      {/* Rotating verb with gold line */}
      <div className="relative flex items-center min-w-[clamp(6rem,20vw,16rem)]">
        {/* Gold line */}
        <motion.div
          className="absolute left-0 right-0 top-1/2 h-[2px] bg-[#b8960b] rounded-full"
          style={{ transform: "translateY(-50%)" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        {/* Gold dot */}
        <motion.div
          className="absolute right-0 top-1/2 w-[6px] h-[6px] bg-[#b8960b] rounded-full"
          style={{ transform: "translateY(-50%)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
        />

        {/* Verb text */}
        <div className="relative w-full text-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={verbs[index]}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="block text-[#b8960b] text-[clamp(2rem,6vw,5rem)] font-medium tracking-tight"
              style={{ fontFamily: "var(--font-dutch)" }}
            >
              {verbs[index]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* "Art." - white, fixed */}
      <span
        className="text-white text-[clamp(2rem,6vw,5rem)] font-medium tracking-tight"
        style={{ fontFamily: "var(--font-dutch)" }}
      >
        Art.
      </span>
    </div>
  );
}
