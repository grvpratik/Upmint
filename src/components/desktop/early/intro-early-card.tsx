import React from "react";
import Image from "next/image";
import OptImage from "@/components/ui/optimised-image";
import { TwitterXSvg } from "@/components/icons/svg";
import { nFormatter } from "@/libs/utils";
const IntroEarlyCard = () => {
  return (
    <div className="card group relative mx-1 flex min-h-[4rem] max-w-xs flex-shrink-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-3xl border border-solid border-gray-300  p-8 transition-all   duration-150 ease-in-out  hover:scale-[1.01] hover:border-[1.5px] lg:max-w-md">
      {/* <div className=" overflow-hidden rounded-3xl bg-gradient-to-r to-50% -z-10 from-gray-300/50 to-transparent absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-200 "></div> */}

      <div className="flex items-center gap-2">
        <OptImage
          className="h-12 w-12 overflow-hidden rounded-xl"
          src={
            "https://pbs.twimg.com/profile_images/1699992200392712192/vA21X1rr_400x400.jpg"
          }
          alt=""
        />

        <div className=" line-clamp-1 font-montserrat text-xl font-semibold  leading-6">
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
        <div className="flex items-center rounded-xl bg-gray-300/50 p-1.5 px-2 backdrop-blur">
          <TwitterXSvg className="h-5 w-5 text-sm font-bold opacity-75" />

          <span className=" text-sm font-normal">{nFormatter(43254, 1)}</span>
        </div>
        <div className="flex  items-center   rounded-full bg-gray-300/50 bg-gradient-to-r from-[#9945FF]/50 via-indigo-500/50 to-[#14F195]/50  p-1  px-2 text-sm  text-white backdrop-blur">
          <span>SOL</span>
        </div>
        <div className="flex items-center rounded-full bg-[#627EEA] bg-gray-300/50 bg-gradient-to-r from-[#627EEA] to-slate-500/50 p-1 px-2 text-white  backdrop-blur">
          <span className=" text-sm  ">ETH</span>
        </div>
      </div>
    </div>
  );
};

export default IntroEarlyCard;
