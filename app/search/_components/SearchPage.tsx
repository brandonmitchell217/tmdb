import Card from "@/components/Card";
import { DataProps, MovieProps, TvResultsProps } from "@/lib/types";
import React from "react";

// TODO: Loading on cards

export default function SearchPage({ query }: { query: DataProps }) {
  const results = query.results;
  // console.log(query);
  return (
    <div className="py-24 flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {results.map((result: MovieProps | TvResultsProps) => (
          <Card key={result.id} data={result} />
        ))}
      </div>
    </div>
  );
}
