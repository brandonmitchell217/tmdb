"use client";
import {
  useGetTvSeriesQuery,
  useGetAggCreditsQuery,
} from "@/app/GlobalRedux/api/tvSlice";
import React from "react";
import Image from "next/image";
import { IMG_PATH } from "@/lib/util";
import { BiLoader } from "react-icons/bi";
import { GenreProps } from "@/lib/types";

export default function TvHeader({ id }: { id: string }) {
  const { data, error, isLoading } = useGetTvSeriesQuery(id);
  const { data: credits } = useGetAggCreditsQuery(id);

  if (error) return null;

  // console.log(credits);

  return (
    <>
      {isLoading ? (
        <div className="h-[60vh] w-full flex gap-14">
          <div className="h-[450px] w-[300px] flex justify-center items-center">
            <BiLoader size={50} className="animate-spin-slow" />
          </div>
          <div className="h-full w-full flex items-center justify-center">
            <BiLoader size={50} className="animate-spin-slow" />
          </div>
        </div>
      ) : (
        <section className="py-16">
          <div className="container">
            <div className="flex gap-14">
              <div>
                <Image
                  src={`${IMG_PATH}${data.poster_path}`}
                  alt={`${data.title} poster`}
                  width={300}
                  height={450}
                  className="rounded-md"
                  priority={true}
                />
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <h1 className="font-bold text-4xl">
                    {data.name || data.original_name}
                  </h1>
                  <p className="font-semibold text-white/80 text-lg">
                    {data.type}
                  </p>
                </div>
                <div className="space-y-2">
                  <h2 className="font-semibold text-2xl">Overview</h2>
                  <p>{data.overview}</p>
                </div>

                <div className="py-4 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">Genres:</h3>
                    <ul className="flex gap-1">
                      {data.genres.map((genre: GenreProps) => (
                        <li
                          key={genre.id}
                          className="bg-white/80 rounded-full text-black text-[12px] px-4 py-1"
                        >
                          {genre.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <h3 className="font-semibold">First Air Date:</h3>
                      <p>{data.first_air_date}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <h3 className="font-semibold">Number of Episodes</h3>
                      <p>{data.number_of_episodes}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <h3 className="font-semibold">Number of Seasons</h3>
                      <p>{data.number_of_seasons}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* {data.created_by.length > 0 && (
              <div className="py-8 space-y-2">
                <h4 className="text-lg font-semibold">Created by</h4>

                <Credits credits={data.created_by} />
              </div>
            )} */}
          </div>
        </section>
      )}
    </>
  );
}
