import React from "react";
import OptImage from "../../ui/optimised-image";

interface IntroCardProps {
	src: string;
	alt: string;
	name: string;
	muted: string;
}

const IntroSquareCard = ({ src, alt, name, muted }: IntroCardProps) => {
	return (
		<div className="w-full relative z-20">
			<OptImage
				className=" max-h-[27rem] sm:max-h-[34rem] md:max-h-[84rem] w-full aspect-square  rounded-2xl overflow-hidden"
				src={src}
				alt={alt}
			/>
			<div className="absolute inset-0 flex items-start justify-start flex-col  p-4 md:p-6 lg:p-8">
				<div className=" opacity-90 text-gray-200 font-light md:font-semibold text-base md:text-xl lg:text-2xl leading-none line-clamp-1">
					{name}
				</div>
				<div className="text-gray-200 font-medium  md:font-light text-sm md:text-normal  opacity-75 leading-none">
					{muted}
				</div>
			</div>
		</div>
	);
};

export default IntroSquareCard;
