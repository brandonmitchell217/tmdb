"use client";
import React from "react";
import { useSearchQuery } from "../../GlobalRedux/api/searchSlice";
import SearchPage from "../_components/SearchPage";
import { dummyArr } from "@/lib/util";
import CardSkeleton from "@/components/Media/CardSkeleton";

export default function Index({ params: { id } }: { params: { id: string } }) {
  const { data, error, isLoading } = useSearchQuery(id);

  console.log(data);

  return (
    <div>
      <div className="container px-4 xl:px-0">
        {isLoading ? (
          dummyArr.map((i) => (
            <div key={i}>
              <CardSkeleton />
            </div>
          ))
        ) : (
          <SearchPage query={data} />
        )}
      </div>
    </div>
  );
}
