import React from "react";
import Image from "next/image";
import OptImage from "@/components/ui/optimised-image";
import { TwitterXSvg } from "@/components/icons/svg";
import { nFormatter } from "@/libs/utils";
const IntroEarlyCard = () => {
	return (
		<div className="card mx-1 group relative cursor-pointer flex flex-col p-8 gap-4 max-w-xs hover:border-[1.5px] border-gray-300 border-solid overflow-hidden ease-in-out transition-all  hover:scale-[1.01] rounded-3xl   lg:max-w-md min-h-[4rem]  flex-shrink-0 border duration-150">
			{/* <div className=" overflow-hidden rounded-3xl bg-gradient-to-r to-50% -z-10 from-gray-300/50 to-transparent absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-200 "></div> */}

			<div className="flex items-center gap-2">
				<OptImage
					className="h-12 w-12 rounded-xl overflow-hidden"
					src={
						"https://pbs.twimg.com/profile_images/1699992200392712192/vA21X1rr_400x400.jpg"
					}
					alt=""
				/>

				<div className=" line-clamp-1 leading-6 font-semibold text-xl  font-montserrat">
					{" "}
					The is title
				</div>
			</div>
			<div className=" line-clamp-3 text-sm font-light text-gray-500 ">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto a
				hic repellat inventore aspernatur, cupiditate eaque debitis iusto
				molestiae voluptatum reiciendis sunt itaque necessitatibus aperiam in?
				Maiores amet ratione nulla?
			</div>
			<div className="flex items-center gap-2">
				{" "}
				<div className="flex bg-gray-300/50 backdrop-blur rounded-xl items-center px-2 p-1.5">
					<TwitterXSvg className="h-5 w-5 opacity-75 text-sm font-bold" />

					<span className=" font-normal text-sm">{nFormatter(43254, 1)}</span>
				</div>
				<div className="flex bg-gray-300/50 backdrop-blur rounded-xl px-2 text-sm font-bold items-center  p-1.5  bg-gradient-to-r from-[#9945FF]/50 via-indigo-500/50 to-[#14F195]/50 text-white">
					<span>SOL</span>
				</div>
				<div className="flex bg-gray-300/50 backdrop-blur rounded-xl items-center px-2 p-1.5 bg-[#627EEA] text-white bg-gradient-to-r from-[#627EEA]  to-[#fff]/50">
					<span className=" font-bold text-sm">ETH</span>
				</div>
			</div>
		</div>
	);
};

export default IntroEarlyCard;
