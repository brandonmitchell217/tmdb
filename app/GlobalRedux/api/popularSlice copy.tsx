import { TMDB_BASE_URL, TMDB_KEY } from "@/lib/util";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const popularApi = createApi({
  reducerPath: "popularApi",
  baseQuery: fetchBaseQuery({ baseUrl: TMDB_BASE_URL }),
  endpoints: (builder) => ({
    getPopular: builder.query({
      query: (type: string) => `${type}/popular?api_key=${TMDB_KEY}`,
    }),
  }),
});

export const { useGetPopularQuery } = popularApi;
