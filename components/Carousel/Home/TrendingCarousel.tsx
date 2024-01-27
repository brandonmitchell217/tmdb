"use client";
import React, { useState } from "react";
import { useGetTrendingQuery } from "@/app/GlobalRedux/api/movieSlice";
import { useGetTrendingTvSeriesQuery } from "@/app/GlobalRedux/api/tvSlice";
import CarouselHeader from "../CarouselHeader";
import MediaCarousel from "../MediaCarousel";
import { dummyArr } from "@/lib/util";
import CardSkeleton from "@/components/Media/CardSkeleton";
import { FilterProps } from "@/lib/types";

export default function TrendingCarousel({
  title,
  type,
  filters,
  id,
}: {
  title: string;
  type: string;
  filters: FilterProps[];
  id: string;
}) {
  const [isFilter, setIsFilter] = useState<string>(filters[0].label);
  const { data, error, isLoading } = useGetTrendingQuery(isFilter);

  // console.log(data);

  return (
    <section className="container">
      <CarouselHeader
        title={title}
        filters={filters}
        setIsFilter={setIsFilter}
        id={id}
      />
      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
          {dummyArr.slice(0, 5).map((i) => (
            <div key={i}>
              <CardSkeleton />
            </div>
          ))}
        </div>
      ) : (
        <MediaCarousel
          data={data.results}
          type={type}
          filter={isFilter}
          id={id}
        />
      )}
      {/* {!error && data ? (
        <MediaCarousel
          data={data.results}
          type={type}
          filter={isFilter}
          id={id}
        />
      ) : null} */}
    </section>
  );
}
