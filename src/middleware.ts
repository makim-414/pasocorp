import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  // pasogallery.com 루트 접속 시 /brands/paso-gallery 로 rewrite
  if (
    hostname.includes("pasogallery.com") &&
    request.nextUrl.pathname === "/"
  ) {
    return NextResponse.rewrite(new URL("/brands/paso-gallery", request.url));
  }
}

export const config = {
  matcher: ["/"],
};
