"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  useDiscoverQuery,
  useDiscoverTopRatedQuery,
  useLazyDiscoverTopRatedQuery,
} from "@/app/GlobalRedux/api/movieSlice";
import Card from "@/components/Card";
import { MovieProps } from "@/lib/types";
import { BiLoader } from "react-icons/bi";

const SORT = "vote_count.desc";

export default function Movies() {
  const [discover, discoverResp] = useLazyDiscoverTopRatedQuery();
  const [page, setPage] = useState(1);

  const handleData = useCallback(
    (page: number) => {
      setPage(page);

      return discover(page);
    },
    [discover]
  );

  const loadMore = useCallback(async () => {
    await handleData(page + 1);
  }, [page, handleData]);

  useEffect(() => {
    handleData(1);
  }, [handleData]);

  const hasMore = discoverResp.isSuccess
    ? discoverResp.data?.total_pages > page
    : false;

  if (discoverResp.error) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
      {!discoverResp.isLoading
        ? Array(5).map((_, i) => (
            <div
              key={i}
              className="w-full h-72 xl:h-80 bg-slate-400 text-slate-700"
            >
              <BiLoader size={50} />
            </div>
          ))
        : null}

      {discoverResp.data?.results.map((movie: MovieProps) => (
        <div key={movie.id}>
          <Card data={movie} type="movie" />
        </div>
      ))}
    </div>
  );
}
