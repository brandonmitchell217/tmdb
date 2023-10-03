"use client";
import React from "react";
import { useDiscoverQuery } from "@/app/GlobalRedux/api/tvSlice";
import {
  useGetTrendingTvSeriesQuery,
  useGetTopRatedQuery,
} from "@/app/GlobalRedux/api/tvSlice";
import Card from "@/components/Card";
import { TvResultsProps } from "@/lib/types";

export default function Shows() {
  const { data, error, isLoading } = useGetTopRatedQuery("");

  if (error) return null;
  console.log(data);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
      {isLoading ? <span>Loading...</span> : null}
      {data?.results.map((show: TvResultsProps) => (
        <div key={show.id}>
          <Card data={show} type="tv" />
        </div>
      ))}
    </div>
  );
}
