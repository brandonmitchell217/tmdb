export const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export const TMDB_AUTH = process.env.NEXT_PUBLIC_TMDB_AUTH;
export const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export const personPlaceHolder = "https://placehold.co/300x450";

export const TMDB_BASE_URL = "https://api.themoviedb.org/3/";

export async function getTrending(type: string, time: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/${type}/${time}?api_key=8fefaeaf9fe78f7f1865d6135d2b3b62`
  );
  return res.json();
}

export const formatNumber = (num: number) =>
  !Number.isNaN(Number(num)) ? Number(num).toLocaleString() : num;

export const dummyArr = Array.from({ length: 7 }, (_, i) => i);
