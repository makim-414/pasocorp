"use client";
import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "ko" | "en";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const COOKIE_NAME = "paso-locale";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function readCookie(): Locale | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.split("; ").find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  const value = match.split("=")[1];
  return value === "en" || value === "ko" ? value : null;
}

function writeCookie(locale: Locale) {
  if (typeof document === "undefined") return;
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
}

export function LocaleProvider({
  initialLocale,
  children,
}: {
  initialLocale: Locale;
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    const fromCookie = readCookie();
    if (fromCookie && fromCookie !== locale) {
      setLocaleState(fromCookie);
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    writeCookie(l);
    if (typeof document !== "undefined") {
      document.documentElement.lang = l;
    }
  };

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useT() {
  const { locale } = useLocale();
  return function t(strings: { ko: string; en: string }) {
    return strings[locale];
  };
}
