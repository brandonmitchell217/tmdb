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
      query: (time: string) => `trending/movie/${time}?language=en-US`,
    }),
    getMovie: builder.query({
      query: (id: string) => `movie/${id}`,
    }),
    getNowPlaying: builder.query({
      query: (type: string) => `movie/${type}?language=en-US`,
    }),
    discover: builder.query({
      query: (type: string) =>
        `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en`,
    }),
    discoverTopRated: builder.query({
      query: (page: string | number) =>
        `discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&region=us&sort_by=vote_count.desc`,
    }),
    getCredits: builder.query({
      query: (id: string) => `movie/${id}/credits`,
    }),
    getUpcoming: builder.query({
      query: () => `movie/upcoming?language=en-US&region=us`,
    }),
  }),
});

export const {
  useGetTrendingQuery,
  useGetMovieQuery,
  useGetNowPlayingQuery,
  useDiscoverQuery,
  useGetCreditsQuery,
  useGetUpcomingQuery,
  useDiscoverTopRatedQuery,
  useLazyDiscoverTopRatedQuery,
} = moviesApi;
