"use client";
import React, { useEffect, useRef } from "react";
import { Navigation, Keyboard } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { mediaBreakpoints } from "@/lib/breakpoints";
import Card from "../Card";
import { DataProps, FilterProps } from "@/lib/types";

export default function MediaCarousel({
  title,
  data,
  type,
  filter,
  className,
  id,
}: {
  title?: string;
  data: DataProps["results"];
  type: string;
  filter?: FilterProps["label"];
  className?: string;
  id?: string;
}) {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    swiperRef.current?.swiper.slideTo(0);
  }, [filter]);

  return (
    <div className={className}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Keyboard]}
        breakpoints={mediaBreakpoints}
        navigation={{ nextEl: `#next-${id}`, prevEl: `#prev-${id}` }}
        keyboard
      >
        {data.map((item: DataProps["results"]) => (
          <SwiperSlide key={item.id}>
            <Card data={item} type={type} />
            {/* <span>{item.title}</span> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
