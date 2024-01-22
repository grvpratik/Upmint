"use client";
import { ChevronLeftSvg, ChevronRightSvg } from "@/components/icons/svg";
import MarginX from "@/components/margin-container";
import Image from "next/image";
import React, { RefObject, useRef } from "react";
import IntroEarlyCard from "./intro-early-card";
import Button from "@/components/ui/Button";

const IntroEarlySection = () => {
  const carouselContainer: RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  const navigation = (dir: "left" | "right"): void => {
    const container = carouselContainer.current;
    if (!container) return;

    const containerWidth = container.offsetWidth;
    console.log(container);
    console.log("container.offsetWidth", containerWidth);

    console.log(container.scrollLeft, "container.scrollLeft");

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (containerWidth + 20)
        : container.scrollLeft + (containerWidth + 20);
    console.log(scrollAmount, "scrollAmount");

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <div className="my-4 flex flex-col">
      <MarginX>
        <div className="head flex min-h-0 items-center justify-between rounded-xl  py-4">
          <div className=" font-montserrat text-2xl font-bold  ">
            Early Projects
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <div
              className=" border-1 cursor-pointer rounded-xl border-solid bg-gray-100/10 p-2 transition  duration-75 hover:scale-95 hover:bg-gray-200/10"
              onClick={() => navigation("left")}
            >
              <ChevronLeftSvg className="h-6 w-6" />
            </div>
            <div
              className=" border-1 cursor-pointer  rounded-xl  border-solid bg-gray-100/10 p-2 transition duration-75 hover:scale-95 hover:bg-gray-300/10"
              onClick={() => navigation("right")}
            >
              <ChevronRightSvg className="h-6 w-6" />
            </div>{" "}
            <Button.Secondary className=" rounded-xl">
              view all
            </Button.Secondary>
          </div>
        </div>
        <div className=" no-scrollbar overflow-y-auto">
          <div
            ref={carouselContainer}
            className="no-scrollbar  flex gap-4 overflow-y-hidden  py-4"
          >
            <IntroEarlyCard />
            <IntroEarlyCard />
            <IntroEarlyCard />
            <IntroEarlyCard />
            <IntroEarlyCard />
            <IntroEarlyCard />
            <IntroEarlyCard />
            <IntroEarlyCard />
          </div>
        </div>
      </MarginX>
    </div>
  );
};

export default IntroEarlySection;
