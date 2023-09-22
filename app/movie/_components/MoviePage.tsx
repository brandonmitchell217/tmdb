"use client";
import React from "react";
import { useGetMovieQuery } from "@/app/GlobalRedux/api/movieSlice";
import { IMG_PATH } from "@/lib/util";

export default function MoviePage({ id }: any) {
  const { data, error, isLoading } = useGetMovieQuery(id);

  console.log(data);

  return (
    <div className="text-white">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {data.original_title ? (
            <h1 className="text-white">{data.original_title}</h1>
          ) : (
            <h1 className="text-white">{data.title}</h1>
          )}

          <img
            src={IMG_PATH + data.backdrop_path}
            alt="asdasfdf"
            className="max-w-[500px] h-auto m-auto"
          />
          <p>{data.overview}</p>
        </>
      )}
    </div>
  );
}
