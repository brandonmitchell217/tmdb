import { TMDB_AUTH, TMDB_BASE_URL, TMDB_KEY } from "@/lib/util";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${TMDB_AUTH}`);
    },
  }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: (time: string) => `trending/movie/${time}`,
    }),
    getMovie: builder.query({
      query: (id: string) => `movie/${id}`,
    }),
    getNowPlaying: builder.query({
      query: (type: string) => `movie/${type}`,
    }),
    discover: builder.query({
      query: (type: string) => `discover/movie`,
    }),
    getCredits: builder.query({
      query: (id: string) => `movie/${id}/credits`,
    }),
  }),
});

export const {
  useGetTrendingQuery,
  useGetMovieQuery,
  useGetNowPlayingQuery,
  useDiscoverQuery,
  useGetCreditsQuery,
} = moviesApi;
