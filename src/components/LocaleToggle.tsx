"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export default function LocaleToggle({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();
  const next = locale === "en" ? "ko" : "en";
  const label = next === "ko" ? "한국어" : "English";

  return (
    <button
      type="button"
      aria-label={t("locale.aria")}
      onClick={() => setLocale(next)}
      className={`text-xs tracking-[0.08em] uppercase text-muted hover:text-[#b8960b] transition-colors duration-300 ${className}`}
    >
      {label}
    </button>
  );
}
