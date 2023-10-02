"use client";
import React from "react";
import { useGetCreditsQuery } from "@/app/GlobalRedux/api/movieSlice";
import Link from "next/link";

export default function Credits({ id }: any) {
  const { data, error, isLoading } = useGetCreditsQuery(id);

  if (error) return null;
  //   console.log(data);
  return (
    <>
      {isLoading ? <span>Loading...</span> : null}
      <div className="flex items-center gap-4">
        <h3 className="font-semibold text-lg">Cast:</h3>
        <ul className="flex gap-4 text-blue-400">
          {data &&
            data.cast.slice(0, 3).map((person: any) => (
              <li key={person.id}>
                <Link href={`/people/${person.id}`}>{person.name}</Link>
              </li>
            ))}
          <li className="font-semibold">
            <Link href={`/movie/${id}/cast`}>&gt;</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
