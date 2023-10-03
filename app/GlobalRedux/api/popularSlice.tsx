import { TMDB_AUTH, TMDB_BASE_URL, TMDB_KEY } from "@/lib/util";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const popularApi = createApi({
  reducerPath: "popularApi",
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${TMDB_AUTH}`);
    },
  }),
  endpoints: (builder) => ({
    getPopular: builder.query({
      query: (type: string) => `${type}/popular`,
    }),
    getDiscover: builder.query({
      query: (type: string) =>
        `discover/${type}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_original_language=en`,
    }),
  }),
});

export const { useGetPopularQuery, useGetDiscoverQuery } = popularApi;
