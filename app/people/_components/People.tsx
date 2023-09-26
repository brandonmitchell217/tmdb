"use client";
import React from "react";
import { useGetPopularPeopleQuery } from "@/app/GlobalRedux/api/personSlice";
import { PersonProps } from "@/lib/types";
import PersonCard from "@/components/PersonCard";

export default function People() {
  const { data, error, isLoading } = useGetPopularPeopleQuery("");

  if (error) return null;

  //   console.log(data);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
      {isLoading ? <span>Loading...</span> : null}
      {data?.results.map((person: PersonProps) => (
        <div key={person.id}>
          <PersonCard data={person} type={"person"} />
        </div>
      ))}
    </div>
  );
}
