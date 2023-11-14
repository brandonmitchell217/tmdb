"use client";
import React, { useState, useCallback, useEffect } from "react";
import { useDiscoverQuery } from "@/app/GlobalRedux/api/tvSlice";
import {
  useGetTrendingTvSeriesQuery,
  useGetTopRatedQuery,
  useLazyGetTopRatedQuery,
} from "@/app/GlobalRedux/api/tvSlice";
import Card from "@/components/Card";
import CardSkeleton from "@/components/Media/CardSkeleton";
import { createArrayWithMax, dummyArr } from "@/lib/util";
import { TvResultsProps } from "@/lib/types";
import { BiLoader } from "react-icons/bi";

export default function Shows() {
  const [discover, discoverResp] = useLazyGetTopRatedQuery();
  const [page, setPage] = useState(1);
  const [shows, setShows] = useState<TvResultsProps[]>([]);

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
        setShows(response.data.results);
        // console.log(response);
      } else {
        setShows((prevShows) => [...prevShows, ...response.data.results]);
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

  if (discoverResp.error) return null;

  return (
    <div className="pb-8 flex flex-col items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-10">
        {discoverResp.isLoading &&
          dummyArr.map((i) => (
            <div key={i}>
              <CardSkeleton />
            </div>
          ))}
        {shows.map((show: TvResultsProps) => (
          <div key={show.id} className="min-w-[240px]">
            <Card data={show} type="tv" />
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
      <div className="mt-4 flex justify-center items-center">
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
