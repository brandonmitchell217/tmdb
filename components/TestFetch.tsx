"use client";
import React, { useState, useEffect, useRef } from "react";
import { getTrending } from "@/lib/util";
import { useGetTrendingQuery } from "@/app/GlobalRedux/api/movieSlice";

const filters = [
  { type: "movie", time: "day" },
  { type: "movie", time: "week" },
];

export default function TestFetch() {
  const [isFilter, setIsFilter] = useState(filters[0].time);
  const { data, error, isLoading } = useGetTrendingQuery(isFilter);

  const movies = data.results;

  console.log(movies);

  // if (!data) return null;

  return (
    <div className="text-white">
      <button onClick={() => setIsFilter(filters[0].time)}>Day</button>
      <button onClick={() => setIsFilter(filters[1].time)}>Week</button>
    </div>
  );
}
