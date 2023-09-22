export const TMDB_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

export const TMDB_BASE_URL = "https://api.themoviedb.org/3/";

export async function getTrending(type: string, time: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/${type}/${time}?api_key=8fefaeaf9fe78f7f1865d6135d2b3b62`
  );
  return res.json();
}
