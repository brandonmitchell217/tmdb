"use client";
import React from "react";
import { useGetTvSeriesQuery } from "@/app/GlobalRedux/api/tvSlice";
import { IMG_PATH } from "@/lib/util";

export default function TvPage({ id }: any) {
  const { data, error, isLoading } = useGetTvSeriesQuery(id);

  console.log(data);

  return (
    <div className="text-white">
      {isLoading ? (
        <span> Loading...</span>
      ) : (
        <div className="text-white">
          <h1 className="text-white">{data.original_title || "title"}</h1>
          <img
            src={IMG_PATH + data.backdrop_path}
            alt="asdasfdf"
            className="max-w-[500px] h-auto m-auto"
          />
          <p>{data.overview}</p>
        </div>
      )}
    </div>
  );
}
