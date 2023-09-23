"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

export default function NowPlayingCarousel({ data }: any) {
  return (
    <section className="h-[65vh] w-full relative landing">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper relative h-full w-full"
      >
        {data.slice(0, 5).map((item: any) => (
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
            <div className="container h-full w-full relative z-10">
              <h2 className="text-white text-3xl absolute bottom-8 left-8">
                {item.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
