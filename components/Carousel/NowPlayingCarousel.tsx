"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import Search from "./Home/Search";
import { MovieProps } from "@/lib/types";

export default function NowPlayingCarousel({ data }: { data: MovieProps[] }) {
  return (
    <section className="h-[75vh] w-full relative landing">
      <Search />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper relative h-full w-full"
      >
        {data.slice(0, 5).map((item: MovieProps) => (
          <SwiperSlide
            key={item.id}
            className="relative flex justify-end items-end"
          >
            <div className="overlay"></div>
            <Image
              src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
              alt={item.title}
              className="object-cover"
              fill={true}
            />
            <div className="container h-full w-full relative z-10 py-8 flex flex-col justify-end">
              <Link href={`/movie/${item.id}`} className="text-white text-xl">
                {item.title}
              </Link>
              <p className="text-white/70">Now Playing</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
