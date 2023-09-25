import { TMDB_BASE_URL, TMDB_KEY, TMDB_AUTH } from "@/lib/util";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${TMDB_AUTH}`);
    },
  }),
  endpoints: (builder) => ({
    search: builder.query({
      query: (query: string) =>
        `search/multi?query=${query}&include_adult=false`,
    }),
  }),
});

export const { useSearchQuery } = searchApi;
