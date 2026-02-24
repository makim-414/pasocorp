"use client";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TextGenerateEffect({ words }: { words: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const wordArray = words.split(" ");

  useEffect(() => {
    if (!isInView) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDisplayedWords(wordArray);
      return;
    }
    wordArray.forEach((_, i) => {
      setTimeout(() => {
        setDisplayedWords((prev) => [...prev, wordArray[i]]);
      }, i * 150);
    });
  }, [isInView]);

  return (
    <span ref={ref} className="inline">
      {displayedWords.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.4 }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
