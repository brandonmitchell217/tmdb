import Link from "next/link";
import Image from "next/image";
import React from "react";
import { IMG_PATH } from "@/lib/util";
import PersonImgPlaceholder from "@/components/PersonImgPlaceholder";
import { PersonDetailsProps } from "@/lib/types";

export default function Credits({
  credits,
}: {
  credits: PersonDetailsProps[];
}) {
  // console.log(credits);
  return (
    <div className="flex gap-4 items-center">
      {credits.map((person: PersonDetailsProps) => (
        <Link
          key={person.id}
          href={`/people/${person.id}`}
          className="flex flex-col justify-center items-center gap-2"
        >
          {person.profile_path ? (
            <Image
              src={`${IMG_PATH}${person.profile_path}`}
              alt={`${person.name}`}
              width={100}
              height={100}
              className="h-[100px] w-[100px] object-cover rounded-full"
            />
          ) : (
            <PersonImgPlaceholder className="w-[100px] h-[100px] rounded-full" />
          )}
          <p className="font-semibold">{person.name}</p>
        </Link>
      ))}
    </div>
  );
}
