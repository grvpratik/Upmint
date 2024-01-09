import React from "react";
import Image from "next/image";

import MarginX from "@/components/margin-container";
import IntroCarosel from "./intro-carosel";
import OptImage from "../ui/optimised-image";
import IntroPosts from "./intro-posts";
import IntroSquareCard from "./intro-square-card";

const FeaturedSquare = () => {
	return (
		<div className=" sm:grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 gap-3 lg:gap-6 hidden  max-h-[34rem]">
			<div className=" hidden sm:grid grid-cols-1 md:gap-4 gap-3 lg:gap-6">
				<IntroSquareCard
					src={
						"https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
					}
					alt=""
					name=" the Title here"
					muted="some sort name"
				/>
				<IntroSquareCard
					src={
						"https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
					}
					alt=""
					name=" the Title here"
					muted="some sort name"
				/>
			</div>
			<div className="md:grid md:grid-cols-1 hidden md:gap-4 gap-3 lg:gap-6">
				<IntroSquareCard
					src={
						"https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
					}
					alt=""
					name=" the Title here"
					muted="some sort name"
				/>
				<IntroSquareCard
					src={
						"https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
					}
					alt=""
					name=" the Title here"
					muted="some sort name"
				/>
			</div>
		</div>
	);
};
const IntroHeading = ({title}:{title:string}) => {
    return (
			<h1 className=" opacity-90 md:text-2xl text-xl lg:text-3xl font-semibold py-3 md:h-10 h-8 lg:h-14 flex items-center justify-start text-left ">
            <span>{title}</span>
			</h1>
		);
}
const IntroSection = () => {
	return (
		<MarginX>
			<div className="z-0 w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 md:gap-4 gap-3 lg:gap-6 ">
				<div className="col-span-4 overflow-hidden">
					<IntroHeading title="Featured Mints" />
					<IntroCarosel />
				</div>
				<div className=" max-h-[34rem] hidden sm:block sm:col-span-2 md:col-span-4">
					<IntroHeading title="" />

					<FeaturedSquare />
				</div>
				<div className="lg:col-span-3 w-full col-span-4 sm:col-span-6 md:col-span-8">
					<IntroHeading title="Guides and posts"/>
		
					
					<IntroPosts />
				</div>
			</div>
		</MarginX>
	);
};

export default IntroSection;
