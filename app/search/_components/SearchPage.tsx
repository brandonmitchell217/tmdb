import Card from "@/components/Card";
import { IMG_PATH } from "@/lib/util";
import Image from "next/image";
import React from "react";

export default function SearchPage({ query }: any) {
  const results = query.results;
  // console.log(query);
  return (
    <div className="py-24 flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {results.map((result: any) => (
          <Card key={result.id} data={result} />
          // <div key={result.id}>
          //   <div className="relative h-72 md:h-56 lg:h-72 xl:h-80">
          //     <Image
          //       src={`${IMG_PATH}${
          //         result.poster_path ? result.poster_path : result.backdrop_path
          //       }`}
          //       alt={`result poster`}
          //       fill
          //       sizes="100%"
          //       className="rounded-md object-cover"
          //     />
          //   </div>
          //   {/* <h3 className="text-lg">{result.original_title ? result.original_title : result.title}</h3> */}
          // </div>
        ))}
      </div>
    </div>
  );
}
