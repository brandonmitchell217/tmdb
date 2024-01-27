"use client";
import React from "react";
import NowPlayingCarousel from "../NowPlayingCarousel";
import { useGetNowPlayingQuery } from "@/app/GlobalRedux/api/movieSlice";
import { BiLoader } from "react-icons/bi";

export default function Landing({ session }: { session: any }) {
  const { data, error, isLoading } = useGetNowPlayingQuery("now_playing");

  if (error) return null;

  const UserSession = () => {
    return session?.user?.name ? (
      <div className="container mt-8 space-y-2 text-center">
        <h1 className="text-4xl font-bold">Welcome {session?.user?.name}</h1>
        <p>Find new movies or shows!</p>
      </div>
    ) : (
      <div className="container mt-8 space-y-2 text-center">
        <h1 className="text-4xl font-bold ">Welcome</h1>
        <p>You should sign in!</p>
      </div>
    );
  };

  return (
    <section className="pt-24">
      {isLoading ? (
        <div className="h-[75vh] w-full flex justify-center items-center">
          <BiLoader size={150} className="animate-spin-slow" />
        </div>
      ) : (
        <>
          <NowPlayingCarousel data={data.results} />
          <UserSession />
        </>
      )}
    </section>
  );
}
