import { TMDB_AUTH, TMDB_BASE_URL, TMDB_KEY } from "@/lib/util";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const personsApi = createApi({
  reducerPath: "personsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: TMDB_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${TMDB_AUTH}`);
    },
  }),
  endpoints: (builder) => ({
    getPerson: builder.query({
      query: (id: string) => `person/${id}`,
    }),
    getPopularPeople: builder.query({
      query: (page: string | number) =>
        `person/popular?language=en-US&page=${page}`,
    }),
    personSocial: builder.query({
      query: (personId) => ({
        url: `person/${personId}/external_ids`,
      }),
    }),
  }),
});

export const {
  useGetPersonQuery,
  useGetPopularPeopleQuery,
  useLazyGetPopularPeopleQuery,
  usePersonSocialQuery,
} = personsApi;
