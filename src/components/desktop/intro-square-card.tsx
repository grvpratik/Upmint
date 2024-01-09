import React from 'react'
import OptImage from '../ui/optimised-image';

interface IntroCardProps{
    src: string;
    alt: string;
    name: string;
    muted: string;
}

const IntroSquareCard = ({
    src,
    alt,
    name,
    muted
}:IntroCardProps) => {
  return (
		<div className="w-full relative">
			<OptImage
				className=" max-h-[27rem] sm:max-h-[34rem] md:max-h-[84rem] w-full aspect-square  rounded-2xl overflow-hidden"
				src={src}
				alt={alt}
			/>
			<div className="absolute inset-0 flex items-start justify-start flex-col  p-4 md:p-6 lg:p-8">
				<div className=" opacity-90 text-gray-900 font-semibold md:font-bold text-base md:text-xl lg:text-2xl leading-none line-clamp-1">
					{name}
				</div>
				<div className=" font-medium md:font-semibold text-sm md:text-base  opacity-75 leading-none">
					{muted}
				</div>
			</div>
		</div>
	);
}

export default IntroSquareCard