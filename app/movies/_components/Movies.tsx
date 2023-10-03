"use client";
import React from "react";
import {
  useDiscoverQuery,
  useDiscoverTopRatedQuery,
} from "@/app/GlobalRedux/api/movieSlice";
import Card from "@/components/Card";
import { MovieProps } from "@/lib/types";

export default function Movies() {
  const { data, error, isLoading } = useDiscoverTopRatedQuery("");

  if (error) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
      {isLoading ? <span>Loading...</span> : null}
      {data?.results.map((movie: MovieProps) => (
        <div key={movie.id}>
          <Card data={movie} type="movie" />
        </div>
      ))}
    </div>
  );
}
