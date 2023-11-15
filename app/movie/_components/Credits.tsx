"use client";
import React from "react";
import { useGetCreditsQuery } from "@/app/GlobalRedux/api/movieSlice";
import Link from "next/link";
import Image from "next/image";
import { IMG_PATH } from "@/lib/util";
import PersonImgPlaceholder from "@/components/PersonImgPlaceholder";
import { BiLoader } from "react-icons/bi";

export default function Credits({ id }: any) {
  const { data, error, isLoading } = useGetCreditsQuery(id);

  if (error) return null;

  const cast = data?.cast;
  const crew = data?.crew;

  console.log(cast, crew);

  return (
    <>
      {isLoading ? (
        <div className="h-[60vh] w-full flex gap-14">
          <div className="h-[450px] w-[300px] flex justify-center items-center">
            <BiLoader size={50} className="animate-spin-slow" />
          </div>
        </div>
      ) : (
        <section className="container space-y-12">
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Cast</h2>
            <div className="grid grid-cols-5 px-8">
              {cast?.slice(0, 5).map((person: any, index: number) => (
                <Link
                  key={index}
                  href={`/people/${person.id}`}
                  className="flex flex-col justify-center items-center"
                >
                  {person.profile_path ? (
                    <Image
                      src={`${IMG_PATH}${person.profile_path}`}
                      alt={person.name || person.original_name}
                      height={150}
                      width={150}
                      className="rounded-full h-[150px] w-[150px] object-cover"
                    />
                  ) : (
                    <PersonImgPlaceholder className="w-[150px] h-[150px] rounded-full" />
                  )}

                  <p className="text-lg">
                    {person.name || person.original_name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="font-semibold text-2xl">Crew</h2>
            <div className="grid grid-cols-5 px-8">
              {crew?.slice(0, 5).map((person: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center"
                >
                  {person.profile_path ? (
                    <Image
                      src={`${IMG_PATH}${person.profile_path}`}
                      alt={person.name || person.original_name}
                      height={150}
                      width={150}
                      className="rounded-full h-[150px] w-[150px] object-cover"
                    />
                  ) : (
                    <PersonImgPlaceholder className="w-[150px] h-[150px] rounded-full" />
                  )}
                  <p className="text-lg">
                    {person.name || person.original_name}
                  </p>
                  <p className="text-sm">{person.job}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
