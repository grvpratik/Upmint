import React from "react";
import Image from "next/image";


import OptImage from "@/components/ui/optimised-image";


const IntroPosts = () => {
	return (
		<>
			<div className=" w-full flex flex-col">
				{" "}
				<div className="post flex overflow-hidden items-center  gap-2">
					
                        <OptImage className="h-16 w-16  md:h-20 md:w-20 rounded-xl overflow-hidden flex-shrink-0 mx-2 "
                            src="https://pbs.twimg.com/profile_banners/927543724632047616/1702815436/1080x360"
                        alt=""/>
					
					<div className="flex flex-col  gap-1 my-1 ">
						<span className="text-base font-semibold line-clamp-2 leading-tight text-gray-800">
							How to start 💸 earnging from crypto 🏦 without investment
						</span>
						<span className="  text-xs leading-4 line-clamp-1  opacity-70">
							Lorem ipsum dolor sit ametnem alias asperiores quis, et aut
							voluptatum delectus sed sapiente excepturi incidunt ad nobis, iure
							quia consequatur.
						</span>
						<span className="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-4 h-4 opacity-50"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>
							<p className="  text-xs   opacity-70">5 min ago</p>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default IntroPosts;
