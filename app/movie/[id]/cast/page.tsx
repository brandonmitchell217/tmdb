"use client";
import React from "react";
import { useGetCreditsQuery } from "@/app/GlobalRedux/api/movieSlice";
import Link from "next/link";

export default function CastPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data, error, isLoading } = useGetCreditsQuery(id);

  const cast = data?.cast;
  const crew = data?.crew;

  if (error) return null;

  console.log(data);

  return (
    <>
      {isLoading ? <span>Loading...</span> : null}
      <main>
        <div className="container space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Cast:</h2>
            <ul className="flex flex-col gap-2">
              {cast.map((person: any) => (
                <li key={person.id}>
                  <Link href={`/people/${person.id}`}>{person.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Crew:</h3>
            <ul className="flex flex-col gap-2">
              {crew.map((person: any) => (
                <li key={person.id}>
                  <Link href={`/people/${person.id}`}>{person.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
