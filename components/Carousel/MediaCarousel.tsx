"use client";
import React, { useEffect, useRef } from "react";
import { Navigation, Keyboard } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { mediaBreakpoints } from "@/lib/breakpoints";
import Card from "../Card";

export default function MediaCarousel({
  title,
  data,
  type,
  filter,
  className,
  id,
}: {
  title?: any;
  data: any;
  type: any;
  filter?: any;
  className?: any;
  id?: any;
}) {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    swiperRef.current?.swiper.slideTo(0);
    //  console.log(data);
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
        {data.map((item: any) => (
          <SwiperSlide key={item.id}>
            <Card data={item} type={type} />
            {/* <span>{item.title}</span> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
