import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALE_COOKIE = "paso-locale";

function detectLocale(request: NextRequest): "ko" | "en" {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale === "en" || cookieLocale === "ko") return cookieLocale;

  const acceptLang = request.headers.get("accept-language") || "";
  // If browser prefers Korean at top, keep ko. Otherwise default to English when
  // any non-Korean locale is preferred first.
  const primary = acceptLang.split(",")[0]?.toLowerCase().trim() || "";
  if (primary.startsWith("ko")) return "ko";
  if (primary) return "en";
  return "ko";
}

function withLocaleCookie(response: NextResponse, locale: "ko" | "en", request: NextRequest) {
  const hadCookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (!hadCookie) {
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }
  response.headers.set("x-paso-locale", locale);
  return response;
}

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // Skip static files (images, etc.)
  if (/\.(png|jpg|jpeg|gif|svg|webp|ico|css|js)$/i.test(pathname)) {
    return NextResponse.next();
  }

  const locale = detectLocale(request);

  // pasogallery.com → standalone brand site
  if (hostname.includes("pasogallery.com")) {
    const url = request.nextUrl.clone();
    // Rewrite all paths to /brands/paso-gallery (single-brand site)
    if (pathname === "/") {
      url.pathname = "/brands/paso-gallery";
    }
    const response = NextResponse.rewrite(url);
    response.headers.set("x-site-mode", "pasogallery");
    return withLocaleCookie(response, locale, request);
  }

  // aboutpaso.com → standalone about site
  if (hostname.includes("aboutpaso.com")) {
    const url = request.nextUrl.clone();
    if (pathname === "/") {
      url.pathname = "/about";
    }
    const response = NextResponse.rewrite(url);
    response.headers.set("x-site-mode", "aboutpaso");
    return withLocaleCookie(response, locale, request);
  }

  // artrader.io → standalone artrader site
  if (hostname.includes("artrader.io")) {
    const url = request.nextUrl.clone();
    if (pathname === "/") {
      url.pathname = "/artrader";
    } else if (!pathname.startsWith("/artrader")) {
      url.pathname = `/artrader${pathname}`;
    }
    const response = NextResponse.rewrite(url);
    response.headers.set("x-site-mode", "artrader");
    return withLocaleCookie(response, locale, request);
  }

  // pasocorp.com → default corporate site
  return withLocaleCookie(NextResponse.next(), locale, request);
}

export const config = {
  // _next 내부 리소스, api, 정적 파일(.확장자)을 제외한 모든 경로에서 실행.
  // artrader.io / pasogallery.com / aboutpaso.com 호스트 분기가 전 경로에 적용되도록 하기 위함.
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
