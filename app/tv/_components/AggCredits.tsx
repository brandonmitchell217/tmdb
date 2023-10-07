"use client";
import React from "react";
import { useGetAggCreditsQuery } from "@/app/GlobalRedux/api/tvSlice";
import Image from "next/image";
import { IMG_PATH } from "@/lib/util";
import PersonImgPlaceholder from "@/components/PersonImgPlaceholder";
import Link from "next/link";

export default function AggCredits({ id }: any) {
  const { data: credits, isError, isLoading } = useGetAggCreditsQuery(id);

  if (isError) return null;

  const cast = credits?.cast;
  const crew = credits?.crew;

  console.log(cast, crew);

  return (
    <>
      {isLoading ? <span>Loading...</span> : null}
      <div className="container space-y-16">
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Cast</h2>
          <div className="grid grid-cols-5">
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

                <p className="text-lg">{person.name || person.original_name}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="font-semibold text-2xl">Crew</h2>
          <div className="grid grid-cols-5">
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
                <p className="text-lg">{person.name || person.original_name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
