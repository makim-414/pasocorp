const STORAGE_KEY = "artrader_favorites";

export interface FavoriteItem {
  artistSlug: string;
  auctionIndex: number;
  addedAt: string; // ISO date
}

function getFavorites(): FavoriteItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveFavorites(items: FavoriteItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function isFavorite(artistSlug: string, auctionIndex: number): boolean {
  return getFavorites().some(
    (f) => f.artistSlug === artistSlug && f.auctionIndex === auctionIndex
  );
}

export function toggleFavorite(artistSlug: string, auctionIndex: number): boolean {
  const favorites = getFavorites();
  const idx = favorites.findIndex(
    (f) => f.artistSlug === artistSlug && f.auctionIndex === auctionIndex
  );
  if (idx >= 0) {
    favorites.splice(idx, 1);
    saveFavorites(favorites);
    return false; // removed
  } else {
    favorites.push({ artistSlug, auctionIndex, addedAt: new Date().toISOString() });
    saveFavorites(favorites);
    return true; // added
  }
}

export function getAllFavorites(): FavoriteItem[] {
  return getFavorites();
}

export function removeFavorite(artistSlug: string, auctionIndex: number) {
  const favorites = getFavorites().filter(
    (f) => !(f.artistSlug === artistSlug && f.auctionIndex === auctionIndex)
  );
  saveFavorites(favorites);
}
