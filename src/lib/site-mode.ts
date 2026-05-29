import { headers, cookies } from "next/headers";

export type SiteMode = "pasocorp" | "pasogallery" | "aboutpaso";

export async function getSiteMode(): Promise<SiteMode> {
  // Production: middleware sets x-site-mode based on hostname (pasogallery.com etc.)
  const headersList = await headers();
  const mode = headersList.get("x-site-mode");
  if (mode === "pasogallery") return "pasogallery";
  if (mode === "aboutpaso") return "aboutpaso";

  // Local dev fallback: cookie set by SiteModeCookieSync on /brands/paso-gallery etc.
  // Lets /about, /spaces, /contact render the brand variant when navigated from inside
  // a brand site on localhost (where hostname-based middleware doesn't fire).
  const cookieStore = await cookies();
  const cookieMode = cookieStore.get("site-mode-override")?.value;
  if (cookieMode === "pasogallery") return "pasogallery";
  if (cookieMode === "aboutpaso") return "aboutpaso";

  return "pasocorp";
}
