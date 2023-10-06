"use client";
import React from "react";
import NowPlayingCarousel from "../NowPlayingCarousel";
import { useGetNowPlayingQuery } from "@/app/GlobalRedux/api/movieSlice";

export default function Landing() {
  const { data, error, isLoading } = useGetNowPlayingQuery("now_playing");

  if (error) return null;

  return (
    <section className="pt-24">
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <NowPlayingCarousel data={data.results} />
      )}
    </section>
  );
}
