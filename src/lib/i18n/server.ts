import { cookies, headers } from "next/headers";
import type { Locale } from "./LocaleContext";

const COOKIE_NAME = "paso-locale";

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const cookieValue = cookieStore.get(COOKIE_NAME)?.value;
  if (cookieValue === "en" || cookieValue === "ko") return cookieValue;

  const headerStore = await headers();
  const headerLocale = headerStore.get("x-paso-locale");
  if (headerLocale === "en" || headerLocale === "ko") return headerLocale;

  return "ko";
}
