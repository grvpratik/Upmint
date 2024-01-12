"use client";
import FilterArea from "@/components/filter-area";
import MarginX from "@/components/margin-container";
import TagFilter from "@/components/tag-filter";
import OptImage from "@/components/ui/optimised-image";
import React, { useState } from "react";

const TrendingPage = () => {
  const [first, setFirst] = useState<string[]>([]);
  const Card = () => {
    return (
      <div className=" relative flex  min-w-[16rem] max-w-[24rem] flex-col overflow-hidden  rounded-lg">
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
  };
  console.log(first);

  return (
    <>
      <div className="relative top-0 w-full  overflow-hidden rounded-b-xl ">
        {" "}
        <OptImage
          className="  max-w-screen aspect-[16/8] max-h-[30rem]    w-full"
          src={
            "https://pbs.twimg.com/profile_banners/1700921224673538048/1703362204/1500x500"
          }
          alt={""}
        />
      </div>
		  <MarginX>
			  <FilterArea/>
        <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <TagFilter tags={["dg", "gdgf", "dfgdf"]} onTagSelected={setFirst} />
      </MarginX>
    </>
  );
};

export default TrendingPage;
