'use client'
import React from 'react'
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import OptImage from '../ui/optimised-image';
import IntroSquareCard from './intro-square-card';


const IntroCarosel = () => {
	return (
		<>
			<Swiper
				className="w-full overflow-hidden  rounded-2xl cursor-pointer"
				modules={[Navigation, Autoplay]}
				spaceBetween={8}
				slidesPerView={1}
				loop
				autoplay={{
					delay: 6000,
					disableOnInteraction: false,
					// pauseOnMouseEnter: true,
				}}
			>
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
}

export default IntroCarosel