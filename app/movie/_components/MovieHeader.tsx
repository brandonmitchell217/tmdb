"use client";
import { useGetMovieQuery } from "@/app/GlobalRedux/api/movieSlice";
import React from "react";
import Image from "next/image";
import { IMG_PATH } from "@/lib/util";
import Credits from "./Credits";

export default function MovieHeader({ id }: any) {
  const { data, error, isLoading } = useGetMovieQuery(id);

  if (error) return null;

  // console.log(data);

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <section>
          <div className="container">
            <div className="flex gap-14">
              <div>
                <Image
                  src={`${IMG_PATH}${data.poster_path}`}
                  alt={`${data.title} poster`}
                  width={300}
                  height={450}
                  className="rounded-xl"
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <h1 className="font-bold text-4xl">{data.title}</h1>
                  <p className="font-semibold text-white/80 text-lg">
                    {data.tagline}
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="font-semibold text-2xl">Overview</h2>
                  <p>{data.overview}</p>
                </div>
                <Credits id={id} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
