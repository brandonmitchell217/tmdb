import { TMDB_BASE_URL, TMDB_KEY } from "@/lib/util";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const personsApi = createApi({
  reducerPath: "personsApi",
  baseQuery: fetchBaseQuery({ baseUrl: TMDB_BASE_URL }),
  endpoints: (builder) => ({
    getPerson: builder.query({
      query: (id: string) => `person/${id}?api_key=${TMDB_KEY}`,
    }),
    getPopularPeople: builder.query({
      query: (type: string) => `person/popular?api_key=${TMDB_KEY}`,
    }),
  }),
});

export const { useGetPersonQuery, useGetPopularPeopleQuery } = personsApi;
