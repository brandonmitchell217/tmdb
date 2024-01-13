"use client";
import React, { useState } from "react";
import {
  useGetPopularQuery,
  useGetDiscoverQuery,
} from "@/app/GlobalRedux/api/popularSlice";
import CarouselHeader from "../CarouselHeader";
import MediaCarousel from "../MediaCarousel";
import { dummyArr } from "@/lib/util";
import CardSkeleton from "@/components/Media/CardSkeleton";
import { FilterProps } from "@/lib/types";

export default function PopularCarousel({
  title,
  filters,
  id,
}: {
  title: string;
  filters: FilterProps[];
  id: string;
}) {
  const [isFilter, setIsFilter] = useState<string>(filters[0].type);
  const { data, error, isLoading } = useGetDiscoverQuery(isFilter);

  // console.log(data);

  return (
    <section className="container">
      <CarouselHeader
        title={title}
        filters={filters}
        setIsFilter={setIsFilter}
        id={id}
      />
      {isLoading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
          {dummyArr.slice(0, 5).map((i) => (
            <div key={i}>
              <CardSkeleton />
            </div>
          ))}
        </div>
      )}
      {!error && data ? (
        <MediaCarousel
          data={data.results}
          type={isFilter}
          filter={isFilter}
          id={id}
        />
      ) : null}
    </section>
  );
}
