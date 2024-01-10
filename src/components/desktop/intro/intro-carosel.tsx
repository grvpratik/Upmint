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
				className="w-full relative rounded-2xl cursor-pointer"
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
				<button className="arrow-left  absolute  z-40   left-0 top-1/2">
					{" "}
					<ChevronLeftSvg className="p-1.5 h-8 w-8 bg-white rounded-r-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" />
				</button>{" "}
				<button className="arrow-right  absolute  z-40  right-0  top-1/2">
					<ChevronRightSvg className="p-1.5  h-8 w-8 bg-white rounded-l-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]" />{" "}
				</button>
				<SwiperSlide>
					<IntroSquareCard
						src={
							"https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
						}
						alt=""
						name=" the Title here"
						muted="some sort name"
					/>
				</SwiperSlide>{" "}
				<SwiperSlide>
					<IntroSquareCard
						src={
							"https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
						}
						alt=""
						name=" the Title here"
						muted="some sort name"
					/>
				</SwiperSlide>{" "}
				<SwiperSlide>
					<IntroSquareCard
						src={
							"https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
						}
						alt=""
						name=" the Title here"
						muted="some sort name"
					/>
				</SwiperSlide>{" "}
				<SwiperSlide>
					<IntroSquareCard
						src={
							"https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
						}
						alt=""
						name=" the Title here"
						muted="some sort name"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default IntroCarosel;
