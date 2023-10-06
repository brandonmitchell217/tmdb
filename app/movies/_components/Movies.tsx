"use client";
import React, { useState, useCallback, useEffect } from "react";
import {
  useDiscoverQuery,
  useDiscoverTopRatedQuery,
  useLazyDiscoverTopRatedQuery,
} from "@/app/GlobalRedux/api/movieSlice";
import Card from "@/components/Card";
import { MovieProps } from "@/lib/types";
import { dummyArr } from "@/lib/util";
import CardSkeleton from "@/components/Media/CardSkeleton";
import { useInView } from "react-intersection-observer";
import { BiLoader } from "react-icons/bi";

const SORT = "vote_count.desc";

export default function Movies() {
  const { ref, inView, entry } = useInView({
    delay: 300,
  });
  const [discover, discoverResp] = useLazyDiscoverTopRatedQuery();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieProps[]>([]);

  const hasMore = discoverResp.isSuccess
    ? discoverResp.data?.total_pages > discoverResp.data?.page
    : false;

  const handleData = useCallback(
    async (page: number) => {
      setPage(page);
      const response = await discover(page);
      if (page === 1) {
        setMovies(response.data.results);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      }
    },
    [discover]
  );

  const loadMore = useCallback(() => {
    handleData(page + 1);
  }, [page, handleData]);

  useEffect(() => {
    handleData(1);
  }, [handleData]);

  useEffect(() => {
    if (inView && hasMore) {
      loadMore();
    }
  }, [inView, hasMore, loadMore]);

  if (discoverResp.error) {
    return <div>Error</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
        {discoverResp.isLoading &&
          dummyArr.map((i) => (
            <div key={i}>
              <CardSkeleton />
            </div>
          ))}
        {movies.map((movie: MovieProps) => (
          <div key={movie.id}>
            <Card data={movie} type="movie" />
          </div>
        ))}
      </div>
      {hasMore && (
        <div
          className="w-full py-16 flex justify-center items-center"
          ref={ref}
        >
          <BiLoader size={50} className="text-white animate-spin-slow" />
        </div>
      )}
    </div>
  );
}
