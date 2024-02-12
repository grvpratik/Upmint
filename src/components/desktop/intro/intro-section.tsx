import React, { Suspense } from "react";


import MarginX from "@/components/margin-container";
import IntroCarosel from "./intro-carosel";
import IntroPosts from "./intro-posts";
import IntroFeatured from "./intro-featured";
import GetFeatured from "@/actions/getFeatured";

const IntroHeading = ({ title }: { title: string }) => {
  return (
    <h1 className=" flex h-8 items-center justify-start py-3  text-left font-montserrat text-lg  md:text-2xl font-bold  md:h-10 lg:h-14 ">
      <span>{title}</span>
    </h1>
  );
};

const IntroSection = async () => {
  const { result, error } = await GetFeatured();
  return (
    <MarginX>
      <div className="z-0 grid w-full grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8 md:gap-4 lg:grid-cols-11 lg:gap-6 ">
        <div className="col-span-4 overflow-hidden">
          <IntroHeading title="Featured Mints" />
          <IntroCarosel data={result} error={error} />
        </div>
        <div className=" hidden max-h-[34rem] sm:col-span-2 sm:block md:col-span-4">
          <IntroHeading title="" />
          <IntroFeatured />
        </div>
        <div className="col-span-4 w-full sm:col-span-6 md:col-span-8 lg:col-span-3">
          <IntroPosts />
        </div>
      </div>
    </MarginX>
  );
};

export default IntroSection;
