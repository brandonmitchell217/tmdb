"use client";
import React from "react";
import Image from "next/image";
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
          <h1 className="text-white">
            {data.original_title ? data.original_title : data.original_name}
          </h1>
          <Image
            src={IMG_PATH + data.backdrop_path}
            alt="asdasfdf"
            width={500}
            height={750}
          />
          <p>{data.overview}</p>
        </div>
      )}
    </div>
  );
}
