
import React from "react";
import Image from "next/image";

import MarginX from "@/components/margin-container";
import IntroCarosel from "./intro-carosel";
import IntroPosts from "./intro-posts";
import IntroFeatured from "./intro-featured";

const IntroHeading = ({ title }: { title: string }) => {
	return (
    <h1 className=" flex h-8   items-center justify-start py-3  text-left font-montserrat  text-2xl font-bold  opacity-90 md:h-10 lg:h-14 ">
      <span>{title}</span>
    </h1>
  );
};
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
					<IntroFeatured />
				</div>
				<div className="lg:col-span-3 w-full col-span-4 sm:col-span-6 md:col-span-8">
					<IntroPosts />
				</div>
			</div>
		</MarginX>
	);
};

export default IntroSection;
