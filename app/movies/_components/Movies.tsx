"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useLazyDiscoverTopRatedQuery } from "@/app/GlobalRedux/api/movieSlice";
import Card from "@/components/Card";
import { MovieProps } from "@/lib/types";
import { createArrayWithMax, dummyArr } from "@/lib/util";
import CardSkeleton from "@/components/Media/CardSkeleton";
// import { useInView } from "react-intersection-observer";
import { BiLoader } from "react-icons/bi";

const SORT = "vote_count.desc";

export default function Movies() {
  const [discover, discoverResp] = useLazyDiscoverTopRatedQuery();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  // const [totalPages, setTotalPages] = useState(() => createArrayWithMax(0));

  const hasMore = discoverResp.isSuccess
    ? discoverResp.data?.total_pages > discoverResp.data?.page
    : false;

  const handleData = useCallback(
    async (page: number) => {
      setPage(page);
      const response = await discover(page);
      // setTotalPages(createArrayWithMax(response.data.total_pages));
      // console.log(totalPages);
      if (page === 1) {
        setMovies(response.data.results);
        // console.log(response);
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

  // useEffect(() => {
  //   if (inView && hasMore) {
  //     loadMore();
  //   }
  // }, [inView, hasMore, loadMore]);

  // console.log(totalPages);

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
      {/* <div className="space-x-1">
        {totalPages.slice(0, 9).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handleData(pageNum)}
            className={`w-12 h-12 text-[12px] rounded-full ${
              pageNum === page
                ? "bg-white text-blue-400"
                : "bg-blue-400 text-white"
            }`}
          >
            {pageNum}
          </button>
        ))}
      </div> */}
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={loadMore}
          className="bg-green-400 py-2 px-8 text-black rounded-lg"
        >
          Load More
        </button>
      </div>
      {/* {hasMore && (
        <div
          className="w-full py-16 flex justify-center items-center"
          ref={ref}
        >
          <BiLoader size={50} className="text-white animate-spin-slow" />
        </div>
      )} */}
    </div>
  );
}
