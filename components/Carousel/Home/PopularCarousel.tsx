"use client";
import React, { useState } from "react";
import { useGetPopularQuery } from "@/app/GlobalRedux/api/popularSlice";
import CarouselHeader from "../CarouselHeader";
import MediaCarousel from "../MediaCarousel";

export default function PopularCarousel({ title, filters, id }: any) {
  const [isFilter, setIsFilter] = useState(filters[0].type);
  const { data, error, isLoading } = useGetPopularQuery(isFilter);

  // console.log(data);

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
          type="tv"
          filter={isFilter}
          id={id}
        />
      ) : null}
    </section>
  );
}
