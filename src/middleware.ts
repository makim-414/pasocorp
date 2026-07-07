import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  // Skip static files (images, etc.)
  if (/\.(png|jpg|jpeg|gif|svg|webp|ico|css|js)$/i.test(pathname)) {
    return NextResponse.next();
  }

  // pasogallery.com → standalone brand site
  if (hostname.includes("pasogallery.com")) {
    const url = request.nextUrl.clone();
    // Legacy/shared URL: the standalone site has no /exhibitions route,
    // exhibitions live on the home page (#exhibitions). Redirect instead of 404.
    if (pathname === "/exhibitions" || pathname.startsWith("/exhibitions/")) {
      url.pathname = "/";
      url.hash = "exhibitions";
      return NextResponse.redirect(url, 308);
    }
    // Rewrite all paths to /brands/paso-gallery (single-brand site)
    if (pathname === "/") {
      url.pathname = "/brands/paso-gallery";
    }
    const response = NextResponse.rewrite(url);
    response.headers.set("x-site-mode", "pasogallery");
    return response;
  }

  // aboutpaso.com → standalone about site
  if (hostname.includes("aboutpaso.com")) {
    const url = request.nextUrl.clone();
    if (pathname === "/") {
      url.pathname = "/about";
    }
    const response = NextResponse.rewrite(url);
    response.headers.set("x-site-mode", "aboutpaso");
    return response;
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
    return response;
  }

  // pasocorp.com → default corporate site
  return NextResponse.next();
}

export const config = {
  // _next 내부 리소스, api, 정적 파일(.확장자)을 제외한 모든 경로에서 실행.
  // artrader.io / pasogallery.com / aboutpaso.com 호스트 분기가 전 경로에 적용되도록 하기 위함.
  matcher: ["/((?!_next/|api/|.*\\.).*)"],
};
