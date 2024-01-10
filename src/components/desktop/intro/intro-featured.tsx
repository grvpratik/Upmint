import React from "react";
import IntroSquareCard from "./intro-square-card";
import { DiscordSvg } from "@/components/icons/svg";
import Link from "next/link";

const IntroFeatured = () => {
	return (
		<div className=" sm:grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 gap-3 lg:gap-6 hidden  max-h-[34rem]">
			<div className=" hidden sm:grid grid-cols-1 md:gap-4 gap-3 w-full lg:gap-6">
				<div className="rounded-xl  aspect-square bg-[#404EED] w-full  relative ">
					<h1 className="absolute inset-0 p-4 lg:p-8 font-outfit font-bold text-white uppercase xl:text-3xl text-2xl">
						join the discord
					</h1>
					<div className=" flex w-full h-full justify-end items-end">
						<DiscordSvg className=" h-28 w-28 -rotate-45 pb-2"/>
					</div>
				</div>
				<Link href={''}><IntroSquareCard
					src={
						"https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
					}
					alt=""
					name=" the Title here"
					muted="some sort name"
				/></Link>
			</div>
			<div className="md:grid md:grid-cols-1 hidden md:gap-4 gap-3 lg:gap-6">
			<Link href={''}>	<IntroSquareCard
					src={
						"https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
					}
					alt=""
					name=" the Title here"
					muted="some sort name"
				/></Link>
				<Link href={''}><IntroSquareCard
					src={
						"https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
					}
					alt=""
					name=" the Title here"
					muted="some sort name"
				/></Link>
			</div>
		</div>
	);
};

export default IntroFeatured;
