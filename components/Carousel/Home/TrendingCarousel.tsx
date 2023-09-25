"use client";
import React, { useState } from "react";
import { useGetTrendingQuery } from "@/app/GlobalRedux/api/movieSlice";
import { useGetTrendingTvSeriesQuery } from "@/app/GlobalRedux/api/tvSlice";
import CarouselHeader from "../CarouselHeader";
import MediaCarousel from "../MediaCarousel";

export default function TrendingCarousel({ title, type, filters, id }: any) {
  const [isFilter, setIsFilter] = useState(filters[0].label);
  const { data, error, isLoading } = useGetTrendingQuery(isFilter);

  console.log(data);

  return (
    <section className="container">
      <CarouselHeader
        title={title}
        filters={filters}
        setIsFilter={setIsFilter}
        id={id}
      />
      {isLoading ? <span>Loading...</span> : null}
      {!error && data ? (
        <MediaCarousel
          data={data.results}
          type={type}
          filter={isFilter}
          id={id}
        />
      ) : null}
    </section>
  );
}
