import OptImage from "./ui/optimised-image";

import React from 'react'

const CardWithBanner = () => {
  return (
    <div className=" relative flex  max-w-[24rem] flex-col overflow-hidden  rounded-lg">
      <OptImage
        className=" aspect-video h-full  w-full flex-1"
        src="https://pbs.twimg.com/profile_banners/1700921224673538048/1703362204/1500x500"
        alt=""
      />

      <div className=" flex w-full flex-col ">
        <div className=" line-clamp-1 flex items-center p-2 py-3 text-left text-lg font-semibold leading-none">
          name here
        </div>
        <div className="flex">
          <div className="flex flex-1 flex-col p-2">
            <span>mint Price</span>
            <span>5SOL</span>
          </div>
          <div className="flex flex-1  flex-col p-2">
            <span>Mint Date</span>
            <span>2 sep 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardWithBanner
