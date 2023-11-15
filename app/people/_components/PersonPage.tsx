"use client";
import React from "react";
import { useGetPersonQuery } from "@/app/GlobalRedux/api/personSlice";
import { PersonDetailsProps } from "@/lib/types";
import Image from "next/image";
import { IMG_PATH, personPlaceHolder } from "@/lib/util";
import PersonSocial from "./PersonSocial";
import { BiLoader } from "react-icons/bi";

export default function PersonPage({ id }: any) {
  const { data, error, isLoading } = useGetPersonQuery(id);

  const person = data as PersonDetailsProps;

  if (error) return null;

  return (
    <section>
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
        <div className="flex gap-14">
          <div>
            <Image
              src={
                isLoading
                  ? personPlaceHolder
                  : `${IMG_PATH}${person.profile_path as string}`
              }
              alt={`${person.name} profile image`}
              width={300}
              height={450}
              className="rounded-md"
            />
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex justify-between">
              <h1 className="font-bold text-3xl">{person.name}</h1>
              <PersonSocial id={id} />
            </div>
            <div className="space-y-3">
              <h2 className="font-bold text-xl">Biography</h2>
              <div className="space-y-3">
                <p>{person.biography}</p>
                <ul className="space-y-3">
                  <li>
                    <span className="font-bold mr-3">Birthday:</span>{" "}
                    {person.birthday}
                  </li>
                  <li>
                    <span className="font-bold mr-3">Place of birth:</span>{" "}
                    {person.place_of_birth}
                  </li>
                  <li>
                    <span className="font-bold mr-3">Known for:</span>{" "}
                    {person.known_for_department}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
