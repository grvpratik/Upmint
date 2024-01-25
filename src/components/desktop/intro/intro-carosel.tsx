"use client";
import React from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import IntroSquareCard from "./intro-square-card";
import { ChevronLeftSvg, ChevronRightSvg } from "@/components/icons/svg";
import { ProjectDetailProps } from "@/libs/types";


interface IntroCaroselProps{
  data: ProjectDetailProps[] | null;
  error: any;
}

const IntroCarosel = ({ data, error }:IntroCaroselProps) => {
  // console.log("data", data);
  console.log("error", error);
  return (
    <>
      <Swiper
        className="relative w-full cursor-pointer rounded-2xl"
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop
        navigation={{ prevEl: ".arrow-left", nextEl: ".arrow-right" }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          // pauseOnMouseEnter: true,
        }}
      >
        <button className="arrow-left  absolute  left-0   top-1/2 z-40">
          {" "}
          <ChevronLeftSvg className="h-8 w-8 rounded-r-full bg-gray-200 p-1.5 text-black shadow-depth transition-all active:p-2" />
        </button>{" "}
        <button className="arrow-right  absolute  right-0  top-1/2  z-40">
          <ChevronRightSvg className="h-8  w-8 rounded-l-full bg-white p-1.5  text-black shadow-depth transition-all  active:p-2" />{" "}
        </button>
        {data?.map((item:ProjectDetailProps) => (
          <SwiperSlide key={item._id}>
            <IntroSquareCard
              src={
                item.imageUrl ||
                "https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
              }
              alt=""
              name={item.name || "Title here"}
              muted={item.slug || "Some sort name"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default IntroCarosel;
