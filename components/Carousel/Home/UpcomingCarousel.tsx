"use client";
import React, { useState } from "react";
import {
  useGetPopularQuery,
  useGetDiscoverQuery,
} from "@/app/GlobalRedux/api/popularSlice";
import { useGetUpcomingQuery } from "@/app/GlobalRedux/api/movieSlice";
import CarouselHeader from "../CarouselHeader";
import MediaCarousel from "../MediaCarousel";
import { dummyArr } from "@/lib/util";
import CardSkeleton from "@/components/Media/CardSkeleton";

export default function UpcomingCarousel({
  title,
  id,
}: {
  title: string;
  id: string;
}) {
  //   const [isFilter, setIsFilter] = useState(filters[0].type);
  const { data, error, isLoading } = useGetUpcomingQuery("");

  // console.log(data);

  return (
    <section className="container">
      <CarouselHeader title={title} id={id} />
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
        //   <MediaCarousel
        //     data={data.results}
        //     type={'movie'}
        //     filter={'isFilter'}
        //     id={id}
        //   />
        <MediaCarousel data={data.results} type={"movie"} id={id} />
      ) : null}
    </section>
  );
}
