import React from "react";


import OptImage from "@/components/ui/optimised-image";
import FilterClient from "@/components/filter/filter-client";

const TrendingPage = () => {
  return (
    <>
      <div className="relative top-0  overflow-hidden rounded-xl lg:mx-20 md:mx-12 md:my-4">
        {" "}
        <OptImage
          className="  max-w-screen aspect-[16/8] max-h-[30rem] w-full overflow-hidden  rounded-xl"
          src={
            "https://pbs.twimg.com/profile_banners/1700921224673538048/1703362204/1500x500"
          }
          alt={""}
        /><FilterClient />
      </div>
      
    </>
  );
};

export default TrendingPage;
