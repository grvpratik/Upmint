"use client";
import { ChevronLeftSvg, ChevronRightSvg } from "@/components/icons/svg";
import MarginX from "@/components/margin-container";
import Image from "next/image";
import React, { RefObject, useRef } from "react";
import IntroEarlyCard from "./intro-early-card";
import Button from "@/components/ui/Button";


const IntroEarlySection = () => {
	 const carouselContainer: RefObject<HTMLDivElement> =
			useRef<HTMLDivElement>(null);

		const navigation = (dir: "left" | "right"): void => {
			const container = carouselContainer.current;
			if (!container) return;

			const containerWidth = container.offsetWidth;
			console.log(container);
			console.log("container.offsetWidth", containerWidth);

			console.log(container.scrollLeft, "container.scrollLeft");

			const scrollAmount =
				dir === "left"
					? container.scrollLeft - (containerWidth + 20)
					: container.scrollLeft + (containerWidth + 20);
			console.log(scrollAmount, "scrollAmount");

			container.scrollTo({
				left: scrollAmount,
				behavior: "smooth",
			});
		};
	return (
		<div className="flex flex-col my-4">
			<MarginX>
				<div className="head flex justify-between rounded-xl min-h-0 py-4 font-montserrat">
					<div className=" font-semibold text-xl md:text-2xl lg:text-3xl ">
						Early Projects
					</div>
					<div className="flex items-center gap-2">
						{" "}
						<div
							className=" cursor-pointer p-2 rounded-xl hover:scale-95 bg-gray-100  transition duration-300 hover:bg-gray-200"
							onClick={() => navigation("left")}
						>
							<ChevronLeftSvg className="h-6 w-6" />
						</div>
						<div
							className=" cursor-pointer transition  hover:scale-95  bg-gray-100 duration-150 hover:bg-gray-300 p-2 rounded-xl"
							onClick={() => navigation("right")}
						>
							<ChevronRightSvg className="h-6 w-6" />
						</div>{" "}
						<Button.Secondary className=" rounded-xl">
							view all
						</Button.Secondary>
					</div>
				</div>
				<div className=" overflow-y-auto no-scrollbar">
					<div
						ref={carouselContainer}
						className="flex  gap-4 overflow-y-hidden py-2  no-scrollbar"
					>
						<IntroEarlyCard />
						<IntroEarlyCard />
						<IntroEarlyCard />
						<IntroEarlyCard />
						<IntroEarlyCard />
						<IntroEarlyCard />
						<IntroEarlyCard />
						<IntroEarlyCard />
					</div>
				</div>
			</MarginX>
		</div>
	);
};

export default IntroEarlySection;
