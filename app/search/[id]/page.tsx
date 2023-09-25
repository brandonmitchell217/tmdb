"use client";
import React from "react";
import { useSearchQuery } from "../../GlobalRedux/api/searchSlice";
import SearchPage from "../_components/SearchPage";

export default function Index({ params: { id } }: { params: { id: string } }) {
  const { data, error, isLoading } = useSearchQuery(id); // this does work btw

  console.log(data);

  return (
    <div>
      <div className="container">
        {isLoading ? <span> Loading...</span> : <SearchPage query={data} />}
      </div>
    </div>
  );
}
