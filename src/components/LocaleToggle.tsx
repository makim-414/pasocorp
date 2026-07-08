"use client";

import { useLocale } from "@/i18n/LocaleProvider";

/**
 * Segmented EN / KO toggle. A gold pill slides under the active locale; the
 * whole control flips the locale on click (keyboard-accessible via the button).
 */
export default function LocaleToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();
  const next = locale === "en" ? "ko" : "en";

  return (
    <button
      type="button"
      aria-label={t("locale.aria")}
      onClick={() => setLocale(next)}
      className={`group relative inline-flex items-center rounded-full border border-[#333] p-0.5 text-[10px] tracking-[0.12em] uppercase transition-colors duration-300 hover:border-[#b8960b]/50 ${className}`}
    >
      {/* Sliding gold pill */}
      <span
        aria-hidden
        className="absolute top-0.5 bottom-0.5 w-[calc(50%-2px)] rounded-full bg-[#b8960b] transition-transform duration-300 ease-out"
        style={{ transform: locale === "en" ? "translateX(0)" : "translateX(100%)" }}
      />
      <span className={`relative z-10 px-2.5 py-1 rounded-full transition-colors duration-300 ${locale === "en" ? "text-black" : "text-muted"}`}>
        EN
      </span>
      <span className={`relative z-10 px-2.5 py-1 rounded-full transition-colors duration-300 ${locale === "ko" ? "text-black" : "text-muted"}`}>
        KO
      </span>
    </button>
  );
}
