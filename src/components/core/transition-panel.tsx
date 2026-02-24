"use client";

import { AnimatePresence, motion, type Variant, type Transition } from "framer-motion";
import React from "react";

interface TransitionPanelProps {
  children: React.ReactNode[];
  activeIndex: number;
  transition?: Transition;
  variants?: {
    enter?: Variant;
    center?: Variant;
    exit?: Variant;
  };
}

export function TransitionPanel({
  children,
  activeIndex,
  transition = { duration: 0.2, ease: "easeInOut" },
  variants = {
    enter: { opacity: 0, y: -50, filter: "blur(4px)" },
    center: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: 50, filter: "blur(4px)" },
  },
}: TransitionPanelProps) {
  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={activeIndex}
        initial="enter"
        animate="center"
        exit="exit"
        variants={variants}
        transition={transition}
      >
        {children[activeIndex]}
      </motion.div>
    </AnimatePresence>
  );
}
