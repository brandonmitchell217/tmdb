import { TMDB_AUTH, TMDB_BASE_URL, TMDB_KEY } from "@/lib/util";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tvApi = createApi({
  reducerPath: "tvApi",
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${TMDB_AUTH}`);
    },
  }),
  endpoints: (builder) => ({
    getTrendingTvSeries: builder.query({
      query: (time: string) => `trending/tv/${time}?language=en-US`,
    }),
    getTvSeries: builder.query({
      query: (id: string) => `tv/${id}`,
    }),
    discover: builder.query({
      query: (type: string) =>
        `discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en`,
    }),
    getTopRated: builder.query({
      query: (page: string | number) =>
        `discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=vote_count.desc&watch_region=us`,
    }),
    getAggCredits: builder.query({
      query: (id: string) => `tv/${id}/aggregate_credits?language=en-US`,
    }),
  }),
});

export const {
  useGetTrendingTvSeriesQuery,
  useGetTvSeriesQuery,
  useDiscoverQuery,
  useGetTopRatedQuery,
  useLazyGetTopRatedQuery,
  useGetAggCreditsQuery,
} = tvApi;
