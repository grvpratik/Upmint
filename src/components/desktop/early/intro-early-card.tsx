import React from "react";
import Image from "next/image";

import { cn, nFormatter } from "@/libs/utils";
import { TwitterXSvg } from "@/components/icons/svg";
import OptImage from "@/components/ui/optimised-image";

const IntroEarlyCard = ({ data }: any) => {
  if (!data) {
    return null;
  }
  const { name, description, network, imageUrl, currFollower, bannerUrl } =
    data;
  return (
    <div className="card group transition-all  relative mx-1 flex min-h-[4rem] min-w-[22rem] cursor-pointer flex-col  justify-between gap-4 overflow-hidden rounded-2xl border border-solid border-gray-300 p-6   dark:border-gray-800 lg:max-w-md">
      <Image
        src={bannerUrl}
        alt=""
        fill
        className=" transition-all duration-300  -z-10  border-none brightness-50  group-hover:scale-110"
      />
      <div className="flex items-center gap-2">
        <OptImage
          className="h-12 w-12 overflow-hidden rounded-xl"
          src={imageUrl}
          alt=""
        />

        <div className=" line-clamp-1 font-montserrat text-xl font-semibold text-white leading-6">
          {" "}
          {name}
        </div>
      </div>
      <div className=" line-clamp-3 font-inter text-sm leading-relaxed  text-white">
        {description}
      </div>
      <div className="flex items-center gap-2">
        {" "}
        <div className="flex items-center rounded-xl bg-gray-300/20 p-1.5 px-2 backdrop-blur">
          <TwitterXSvg className="h-5 w-5 text-sm font-bold opacity-75" />

          <span className=" text-sm font-normal">
            {nFormatter(currFollower, 1)}
          </span>
        </div>
        <div className="z-20 flex space-x-2">
          <div className="flex  items-center   rounded-full bg-gray-300/50 bg-gradient-to-r from-[#9945FF]/50 via-indigo-500/50 to-[#14F195]/50  p-1  px-2 text-sm  text-white backdrop-blur">
            <span>SOL</span>
          </div>
          <div className="flex items-center rounded-full bg-[#627EEA] bg-gray-300/50 bg-gradient-to-r from-[#627EEA] to-slate-500/50 p-1 px-2 text-white  backdrop-blur">
            <span className=" text-sm  ">ETH</span>
          </div>
          {/* Add more badges as needed */}
        </div>
      </div>
    </div>
  );
};

export default IntroEarlyCard;
