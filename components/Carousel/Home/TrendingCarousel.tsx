"use client";
import React, { useState } from "react";
import { useGetTrendingQuery } from "@/app/GlobalRedux/api/movieSlice";
import CarouselHeader from "../CarouselHeader";
import MediaCarousel from "../MediaCarousel";

export default function TrendingCarousel({ title, filters, id }: any) {
  const [isFilter, setIsFilter] = useState(filters[0].time);
  const { data, error, isLoading } = useGetTrendingQuery(isFilter);

  //   const movies = data.results;

  //   console.log(movies);
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
          type="movie"
          filter={isFilter}
          id={id}
        />
      ) : null}
    </section>
  );
}
