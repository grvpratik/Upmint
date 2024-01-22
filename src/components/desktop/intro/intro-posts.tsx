import React from "react";
import Image from "next/image";
import Link from "next/link";

import OptImage from "@/components/ui/optimised-image";
import Button from "@/components/ui/Button";

const IntroPosts = () => {
	return (
    <>
      <div className=" flex w-full flex-col">
        {" "}
        <div className="flex  h-14 w-full items-center justify-between">
          <h1 className="   font-montserrat text-2xl font-bold ">Posts</h1>
          <Link href={"/posts"}>
            <Button.Secondary className="rounded-xl text-gray-600">
              view all
            </Button.Secondary>
          </Link>
        </div>
        <div className="post flex items-center gap-2  overflow-hidden">
          <OptImage
            className="mx-2 h-16  w-16 flex-shrink-0 overflow-hidden rounded-xl md:h-20 md:w-20 "
            src="https://pbs.twimg.com/profile_banners/927543724632047616/1702815436/1080x360"
            alt=""
          />

          <div className="my-1 flex  flex-col gap-1 ">
            <span className="line-clamp-2 text-base font-semibold leading-tight ">
              How to start 💸 earnging from crypto 🏦 without investment
            </span>
            <span className="  line-clamp-1 text-xs leading-4  opacity-70">
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
                className="h-4 w-4 opacity-50"
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
