import { headers } from "next/headers";

export type SiteMode = "pasocorp" | "pasogallery" | "aboutpaso" | "artrader";

export async function getSiteMode(): Promise<SiteMode> {
  const headersList = await headers();
  const mode = headersList.get("x-site-mode");
  if (mode === "pasogallery") return "pasogallery";
  if (mode === "aboutpaso") return "aboutpaso";
  if (mode === "artrader") return "artrader";
  return "pasocorp";
}
