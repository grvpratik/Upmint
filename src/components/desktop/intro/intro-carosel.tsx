"use client";
import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import IntroSquareCard from "./intro-square-card";
import { ChevronLeftSvg, ChevronRightSvg } from "@/components/icons/svg";

const IntroCarosel = () => {
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
          <ChevronLeftSvg className="h-8 w-8 rounded-r-full bg-gray-200 p-1.5 text-black shadow-depth" />
        </button>{" "}
        <button className="arrow-right  absolute  right-0  top-1/2  z-40">
          <ChevronRightSvg className="h-8  w-8 rounded-l-full bg-white p-1.5 text-black  shadow-depth" />{" "}
        </button>
        <SwiperSlide>
          <IntroSquareCard
            src={
              "https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
            }
            alt=""
            name=" Title here"
            muted="some sort name"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <IntroSquareCard
            src={
              "https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
            }
            alt=""
            name=" Title here"
            muted="some sort name"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <IntroSquareCard
            src={
              "https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
            }
            alt=""
            name=" Title here"
            muted="some sort name"
          />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <IntroSquareCard
            src={
              "https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
            }
            alt=""
            name=" Title here"
            muted="some sort name"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default IntroCarosel;
