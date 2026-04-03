const STORAGE_KEY = "artrader_search_counts";

export function getSearchCounts(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function incrementSearchCount(slug: string) {
  const counts = getSearchCounts();
  counts[slug] = (counts[slug] || 0) + 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
}

export function getPopularSlugs(): string[] {
  const counts = getSearchCounts();
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([slug]) => slug);
}
