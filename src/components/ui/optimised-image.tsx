"use client";
import React, { useState } from "react";
import Image from "next/image";


import { cn } from "@/libs/utils";

export interface OptimizedImageProps {
	src: string;
	alt: string;
	className: string;
}

 const ERROR_PLACEHOLDER_IMAGE = "/image-placeholder.png";

const OptImage = ({ src, alt,className }:OptimizedImageProps) => {
	const [imageSrc, setImageSrc] = useState(src);

    
	return (
		<div>
			<div className={cn("relative ",className)}>
				<Image
					src={imageSrc}
					alt={alt}
					
					// placeholder="blur"
					// blurDataURL="/alphanftslogo.png"
					onError={() => setImageSrc(ERROR_PLACEHOLDER_IMAGE)}
					sizes="100%"
					fill
					className=" object-cover object-center "
				/>
			</div>
		</div>
	);
};

export default OptImage;
