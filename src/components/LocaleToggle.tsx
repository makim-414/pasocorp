"use client";
import { useLocale } from "@/lib/i18n/LocaleContext";

export default function LocaleToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={`flex items-center gap-1 text-[10px] tracking-[0.15em] uppercase text-[#888] ${className}`}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("ko")}
        aria-pressed={locale === "ko"}
        className={`px-2 py-1 transition-colors duration-300 ${
          locale === "ko" ? "text-[#e8e8e8]" : "hover:text-[#b8960b]"
        }`}
      >
        KO
      </button>
      <span className="text-[#333]">|</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`px-2 py-1 transition-colors duration-300 ${
          locale === "en" ? "text-[#e8e8e8]" : "hover:text-[#b8960b]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
