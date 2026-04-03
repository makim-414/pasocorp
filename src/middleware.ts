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
  matcher: ["/", "/brands/:path*", "/about/:path*", "/contact", "/solutions", "/spaces", "/artrader/:path*", "/search/:path*", "/artist/:path*"],
};
