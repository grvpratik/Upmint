"use client";
import { ChevronLeftSvg, ChevronRightSvg } from "@/components/icons/svg";
import MarginX from "@/components/margin-container";
import Image from "next/image";
import React, { RefObject, useRef } from "react";


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
		<div className="flex flex-col">
			<MarginX>
				<div className="head flex justify-between rounded-xl min-h-0">
					<div>Early</div>
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
						</div>
					</div>
				</div>
				<div className=" overflow-y-auto no-scrollbar">
					<div
						ref={carouselContainer}
						className="flex  gap-4 overflow-y-hidden  no-scrollbar"
					>
						<div className="card relative flex flex-col p-8 gap-4 max-w-xs  rounded-2xl overflow-hidden lg:max-w-md min-h-[4rem]  flex-shrink-0">
							{/* <div className="bg-gradient-to-r -z-10 from-gray-800/30 to-transparent absolute inset-0 "></div> */}
							<div className="flex items-center gap-2">
								<div className="relative h-12 w-12 rounded-lg overflow-hidden">
									<Image
										fill
										src={
											"https://pbs.twimg.com/profile_images/1699992200392712192/vA21X1rr_400x400.jpg"
										}
										alt=""
									/>
								</div>
								<div className=" line-clamp-1 leading-6 font-semibold text-lg ">
									{" "}
									The is title
								</div>
							</div>
							<div className=" line-clamp-3 ">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Architecto a hic repellat inventore aspernatur, cupiditate eaque
								debitis iusto molestiae voluptatum reiciendis sunt itaque
								necessitatibus aperiam in? Maiores amet ratione nulla?
							</div>
							<div> the fuck is here</div>
						</div>
						<div className="card relative flex flex-col p-8 gap-4 max-w-xs  rounded-2xl overflow-hidden lg:max-w-md min-h-[4rem]  flex-shrink-0">
							{/* <div className="bg-gradient-to-r -z-10 from-gray-800/30 to-transparent absolute inset-0 "></div> */}
							<div className="flex items-center gap-2">
								<div className="relative h-12 w-12 rounded-lg overflow-hidden">
									<Image
										fill
										src={
											"https://pbs.twimg.com/profile_images/1699992200392712192/vA21X1rr_400x400.jpg"
										}
										alt=""
									/>
								</div>
								<div className=" line-clamp-1 leading-6 font-semibold text-lg ">
									{" "}
									The is title
								</div>
							</div>
							<div className=" line-clamp-3 ">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Architecto a hic repellat inventore aspernatur, cupiditate eaque
								debitis iusto molestiae voluptatum reiciendis sunt itaque
								necessitatibus aperiam in? Maiores amet ratione nulla?
							</div>
							<div> the fuck is here</div>
						</div>
						<div className="card relative flex flex-col p-8 gap-4 max-w-xs  rounded-2xl overflow-hidden lg:max-w-md min-h-[4rem]  flex-shrink-0">
							{/* <div className="bg-gradient-to-r -z-10 from-gray-800/30 to-transparent absolute inset-0 "></div> */}
							<div className="flex items-center gap-2">
								<div className="relative h-12 w-12 rounded-lg overflow-hidden">
									<Image
										fill
										src={
											"https://pbs.twimg.com/profile_images/1699992200392712192/vA21X1rr_400x400.jpg"
										}
										alt=""
									/>
								</div>
								<div className=" line-clamp-1 leading-6 font-semibold text-lg ">
									{" "}
									The is title
								</div>
							</div>
							<div className=" line-clamp-3 ">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Architecto a hic repellat inventore aspernatur, cupiditate eaque
								debitis iusto molestiae voluptatum reiciendis sunt itaque
								necessitatibus aperiam in? Maiores amet ratione nulla?
							</div>
							<div> the fuck is here</div>
						</div>
						<div className="card relative flex flex-col p-8 gap-4 max-w-xs  rounded-2xl overflow-hidden lg:max-w-md min-h-[4rem]  flex-shrink-0">
							{/* <div className="bg-gradient-to-r -z-10 from-gray-800/30 to-transparent absolute inset-0 "></div> */}
							<div className="flex items-center gap-2">
								<div className="relative h-12 w-12 rounded-lg overflow-hidden">
									<Image
										fill
										src={
											"https://pbs.twimg.com/profile_images/1699992200392712192/vA21X1rr_400x400.jpg"
										}
										alt=""
									/>
								</div>
								<div className=" line-clamp-1 leading-6 font-semibold text-lg ">
									{" "}
									The is title
								</div>
							</div>
							<div className=" line-clamp-3 ">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Architecto a hic repellat inventore aspernatur, cupiditate eaque
								debitis iusto molestiae voluptatum reiciendis sunt itaque
								necessitatibus aperiam in? Maiores amet ratione nulla?
							</div>
							<div> the fuck is here</div>
						</div>
					</div>
				</div>
			</MarginX>
		</div>
	);
};

export default IntroEarlySection;
