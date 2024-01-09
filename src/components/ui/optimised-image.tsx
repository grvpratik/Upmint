"use client";
import React, { useState } from "react";
import Image from "next/image";


import { cn } from "@/libs/utils";

export interface OptimizedImageProps {
	src: string;
	alt: string;
	className: string;
}
const OptImage = ({ src, alt,className }:OptimizedImageProps) => {
	const [imageSrc, setImageSrc] = useState(src);

    const errorImg = "/";
	return (
		<div>
			<div className={cn("relative ",className)}>
				<Image
					src={imageSrc}
					alt={alt}
					
					// placeholder="blur"
					// blurDataURL="/alphanftslogo.png"
					onError={() => setImageSrc(errorImg)}
					sizes="100%"
					fill
					className=" object-cover"
				/>
			</div>
		</div>
	);
};

export default OptImage;
