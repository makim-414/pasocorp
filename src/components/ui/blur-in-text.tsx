"use client";

import { motion, Variants } from "framer-motion";

interface BlurInTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  characterDelay?: number;
}

export default function BlurInText({
  text,
  className = "",
  delay = 0,
  duration = 0.8,
  characterDelay = 0.03,
}: BlurInTextProps) {
  const characters = text.split("");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: characterDelay,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 8,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
      className={`inline-flex ${className}`}
    >
      {characters.map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          variants={child}
          className="inline-block"
          style={{ whiteSpace: char === " " ? "pre" : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
