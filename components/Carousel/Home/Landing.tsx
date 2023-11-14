"use client";
import React from "react";
import NowPlayingCarousel from "../NowPlayingCarousel";
import { useGetNowPlayingQuery } from "@/app/GlobalRedux/api/movieSlice";
import { BiLoader } from "react-icons/bi";

export default function Landing() {
  const { data, error, isLoading } = useGetNowPlayingQuery("now_playing");

  if (error) return null;

  return (
    <section className="pt-24">
      {isLoading ? (
        <div className="h-[60vh] w-full flex justify-center items-center">
          <BiLoader size={150} className="animate-spin-slow" />
        </div>
      ) : (
        <NowPlayingCarousel data={data.results} />
      )}
    </section>
  );
}
