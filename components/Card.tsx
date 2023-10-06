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
    <article className="w-full flex flex-col gap-1 relative group">
      <Link href={`/${type}/${data.id}`} className="relative h-72 xl:h-80">
        {image ? (
          <Image
            src={`${IMG_PATH}${image}`}
            alt={`${data.title} poster`}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
            className="rounded-md object-cover"
          />
        ) : (
          <div className="h-full w-full relative bg-gray-400 rounded-md flex justify-center items-center">
            <p className="max-w-[7ch] m-auto text-center font-medium text-gray-700 text-sm">
              No Image Found
            </p>
          </div>
        )}

        {/* <span className="absolute bottom-2 right-2 bg-black/60 w-10 h-10 text-white flex justify-center items-center text-lg rounded-full">
          {data.vote_average}
        </span> */}
      </Link>
      <div>
        <Link href={`/${type}/${data.id}`}>
          <h5>{data.title || data.name}</h5>
        </Link>
      </div>
    </article>
  );
}
