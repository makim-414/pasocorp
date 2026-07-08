// SOURCE: IRONACT design-system primitives/code/hero/text-scramble.tsx (adapted for PASO: auto prop)
"use client";

import { useState, useCallback, useRef, useEffect } from "react";

import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
const NBSP = " ";

interface TextScrambleProps {
  text: string;
  className?: string;
  /** Scramble once on mount (hero taglines), in addition to hover. */
  auto?: boolean;
}

/**
 * Hover-scramble headline — mirrors pa-web's components/ui/text-scramble.tsx
 * so the /start onboarding and the pa-landing free-audit share the exact same
 * CTA treatment. (pa-landing is an independent build with no pa-web import, so
 * this is a deliberate copy.)
 */
export function TextScramble({ text, className = "", auto = false }: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const frameRef = useRef(0);

  const scramble = useCallback(() => {
    setIsScrambling(true);
    frameRef.current = 0;
    const duration = text.length * 3;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      frameRef.current++;
      const progress = frameRef.current / duration;
      const revealedLength = Math.floor(progress * text.length);

      const newText = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealedLength) return text[i];
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");

      setDisplayText(newText);

      if (frameRef.current >= duration) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
        setIsScrambling(false);
      }
    }, 30);
  }, [text]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    scramble();
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    if (!auto) return;
    const timer = setTimeout(scramble, 600);
    return () => clearTimeout(timer);
  }, [auto, scramble]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span
      className={cn(
        "group relative inline-flex flex-col select-none",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative font-mono tracking-widest uppercase">
        {displayText.split("").map((char, i) => {
          const isSpace = char === " ";
          return (
            <span
              key={i}
              className={cn(
                "inline-block transition-all duration-150",
                isScrambling && char !== text[i] ? "scale-110" : "",
              )}
              style={{ transitionDelay: `${i * 10}ms` }}
            >
              {isSpace ? NBSP : char}
            </span>
          );
        })}
      </span>

      {/* Animated underline */}
      <span className="relative mt-1 h-px w-full overflow-hidden">
        <span
          className={cn(
            "absolute inset-0 origin-left bg-current transition-transform duration-500 ease-out",
            isHovering ? "scale-x-100" : "scale-x-0",
          )}
        />
        <span className="absolute inset-0 bg-current opacity-20" />
      </span>

      {/* Subtle glow */}
      <span
        className={cn(
          "absolute -inset-4 -z-10 rounded-lg bg-white/5 transition-opacity duration-300",
          isHovering ? "opacity-100" : "opacity-0",
        )}
      />
    </span>
  );
}
