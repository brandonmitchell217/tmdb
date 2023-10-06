"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
  useDiscoverTopRatedQuery,
  useLazyDiscoverTopRatedQuery,
} from "@/app/GlobalRedux/api/movieSlice";
import Card from "@/components/Card";
import Loading from "./Loading";

export default function InfiniteScroll({ initial }: any) {
  const [items, setItems] = useState(initial);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [discover, discoverResp] = useLazyDiscoverTopRatedQuery();

  function LoadMore() {
    //  const next = page + 1;
    setPage(page + 1);
    discover(page);

    if (items?.length) {
      setItems((prev: any) => [
        ...(prev?.length ? prev : []),
        discoverResp.data?.results,
      ]);
      console.log(items);
    }
  }

  useEffect(() => {
    if (inView) {
      LoadMore();
    }
  }, [inView]);

  return (
    <>
      {/* {items?.length
        ? items?.map((item: any) => (
            <div key={item.id}>
              <Card data={item} type="movie" />
            </div>
          ))
        : null} */}
      <div className="bg-red-300 h-screen w-full"></div>
      <div className="flex justify-center items-center" ref={ref}>
        <Loading />
      </div>
    </>
  );
}
