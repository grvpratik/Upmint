import React, { useState } from "react";



import FilterArea from "@/components/filter-area";
import OptImage from "@/components/ui/optimised-image";

const TrendingPage = () => {
 
 
  

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
		 <FilterArea/>
    </>
  );
};

export default TrendingPage;
