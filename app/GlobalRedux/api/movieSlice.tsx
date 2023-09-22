import { TMDB_BASE_URL, TMDB_KEY } from "@/lib/util";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: TMDB_BASE_URL }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: (time: string) => `trending/movie/${time}?api_key=${TMDB_KEY}`,
    }),
    getMovie: builder.query({
      query: (id: string) => `movie/${id}?api_key=${TMDB_KEY}`,
    }),
  }),
});

export const { useGetTrendingQuery, useGetMovieQuery } = moviesApi;
