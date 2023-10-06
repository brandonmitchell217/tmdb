"use client";
import React, { useState } from "react";
import {
  useGetPopularQuery,
  useGetDiscoverQuery,
} from "@/app/GlobalRedux/api/popularSlice";
import { useGetUpcomingQuery } from "@/app/GlobalRedux/api/movieSlice";
import CarouselHeader from "../CarouselHeader";
import MediaCarousel from "../MediaCarousel";

export default function UpcomingCarousel({ title, id }: any) {
  //   const [isFilter, setIsFilter] = useState(filters[0].type);
  const { data, error, isLoading } = useGetUpcomingQuery("");

  // console.log(data);

  return (
    <section className="container">
      <CarouselHeader title={title} id={id} />
      {isLoading ? <span>Loading...</span> : null}
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
