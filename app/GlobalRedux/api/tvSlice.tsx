import { TMDB_BASE_URL, TMDB_KEY } from "@/lib/util";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tvApi = createApi({
  reducerPath: "tvApi",
  baseQuery: fetchBaseQuery({ baseUrl: TMDB_BASE_URL }),
  endpoints: (builder) => ({
    getTrendingTvSeries: builder.query({
      query: (time: string) => `trending/tv/${time}?api_key=${TMDB_KEY}`,
    }),
    getTvSeries: builder.query({
      query: (id: string) => `movie/${id}?api_key=${TMDB_KEY}`,
    }),
  }),
});

export const { useGetTrendingTvSeriesQuery, useGetTvSeriesQuery } = tvApi;
