import { DataProps, MovieProps } from "@/lib/types";
import { IMG_PATH } from "@/lib/util";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  data: DataProps["results"];
  type?: string | undefined;
}
// profile_path
export default function Card({ data, type }: Props) {
  const image = data.poster_path ? data.poster_path : data.backdrop_path;

  // console.log(data);

  return (
    <article className="w-full flex flex-col relative group">
      <Link href={`/${type}/${data.id}`} className="relative h-72 xl:h-80">
        <Image
          src={`${IMG_PATH}${image}`}
          alt={`${data.title} poster`}
          fill
          sizes="100vw"
          className="rounded-md object-cover"
        />
        {/* <span className="absolute bottom-2 right-2 bg-black/60 w-10 h-10 text-white flex justify-center items-center text-lg rounded-full">
          {data.vote_average}
        </span> */}
      </Link>
      <div>
        <Link href={`/${type}/${data.id}`}>
          <h5>{data.title}</h5>
        </Link>
      </div>
    </article>
  );
}
