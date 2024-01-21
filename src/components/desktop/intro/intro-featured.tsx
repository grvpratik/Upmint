import React from "react";
import IntroSquareCard from "./intro-square-card";
import { DiscordSvg } from "@/components/icons/svg";
import Link from "next/link";

const IntroFeatured = () => {
  return (
    <div className=" hidden max-h-[34rem] gap-3 sm:grid sm:grid-cols-1 md:grid-cols-2 md:gap-4  lg:gap-6">
      <div className=" hidden w-full grid-cols-1 gap-3 sm:grid md:gap-4 lg:gap-6">
        <Link href={""}>
          <div className="relative  aspect-square w-full rounded-2xl  bg-[#5562ea] ">
            <h1 className="absolute inset-0 p-4 font-outfit text-2xl font-bold uppercase text-white lg:p-8 xl:text-3xl">
              join the discord
            </h1>
            <div className=" flex h-full w-full items-end justify-end">
              <DiscordSvg className=" h-28 w-28 -rotate-45 pb-2" />
            </div>
          </div>
        </Link>
        <Link href={""}>
          <IntroSquareCard
            src={
              "https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
            }
            alt=""
            name=" the Title here"
            muted="some sort name"
          />
        </Link>
      </div>
      <div className="hidden gap-3 md:grid md:grid-cols-1 md:gap-4 lg:gap-6">
        <Link href={""}>
          {" "}
          <IntroSquareCard
            src={
              "https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
            }
            alt=""
            name=" the Title here"
            muted="some sort name"
          />
        </Link>
        <Link href={""}>
          <IntroSquareCard
            src={
              "https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
            }
            alt=""
            name=" the Title here"
            muted="some sort name"
          />
        </Link>
      </div>
    </div>
  );
};

export default IntroFeatured;
