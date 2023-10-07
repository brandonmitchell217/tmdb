"use client";
import { useGetMovieQuery } from "@/app/GlobalRedux/api/movieSlice";
import React from "react";
import Image from "next/image";
import { IMG_PATH, formatNumber } from "@/lib/util";
import Credits from "./Credits";

export default function MovieHeader({ id }: any) {
  const { data, error, isLoading } = useGetMovieQuery(id);

  if (error) return null;

  console.log(data);

  return (
    <>
      {isLoading ? (
        <span>Loading...</span>
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
                  <h1 className="font-bold text-4xl">{data.title}</h1>
                  <p className="font-semibold text-white/80 text-lg">
                    {data.tagline}
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
                      {data.genres.map((genre: any) => (
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
                      <h3 className="font-semibold">Release Date:</h3>
                      <p>{data.release_date}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <h3 className="font-semibold">Budget:</h3>
                      <p>${formatNumber(data.budget)}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <h3 className="font-semibold">Revenue:</h3>
                      <p>${formatNumber(data.revenue)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
