import React from "react";
import Link from "next/link";

import IntroSquareCard from "./intro-square-card";
import { DiscordSvg } from "@/components/icons/svg";
import OptImage from "@/components/ui/optimised-image";

const IntroFeatured = () => {
  return (
    <div className="relative hidden max-h-[34rem] grid-rows-2 gap-3 sm:grid md:gap-4 lg:gap-6">
      <div className="row-span-1 flex h-full gap-6">
        {" "}
        <IntroSquareCard
          src={
            "https://pbs.twimg.com/media/GGKz47TaIAAMoEe?format=jpg&name=large"
          }
          alt=""
          name=" "
          muted=" "
        />
        {/* <Link href={""} className="flex-1">
          <div className="relative  aspect-square w-full   rounded-lg  bg-[#5562ea]">
            <h1 className="absolute inset-0 p-4 font-outfit text-2xl font-bold uppercase text-white lg:p-8 xl:text-3xl">
              join the discord
            </h1>

            <div className=" flex h-full w-full items-end justify-end">
              <DiscordSvg className=" h-28 w-28 pb-2" />
            </div>
          </div>
        </Link> */}
        <IntroSquareCard
          src={
            "https://pbs.twimg.com/media/GGJngwyWoAAvRIP?format=png&name=medium"
          }
          alt=""
          name=""
          muted=""
        />
      </div>
      <div className="row-span-1 h-full ">
        {" "}
        <Link href={""}>
          <OptImage
            src={
              "https://pbs.twimg.com/profile_banners/1745177143535861760/1704917927/1500x500"
            }
            className=" relative aspect-[16/7.5] h-full max-h-full w-full overflow-hidden rounded-lg"
            alt="some sort name"
          />
        </Link>
      </div>
    </div>
  );
};

export default IntroFeatured;
//  <div className=" hidden w-full grid-cols-1 gap-3 sm:grid md:gap-4 lg:gap-6">
//         <Link href={""}>
//           <div className="relative  aspect-square w-full rounded-lg  bg-[#5562ea] ">
//             <h1 className="absolute inset-0 p-4 font-outfit text-2xl font-bold uppercase text-white lg:p-8 xl:text-3xl">
//               join the discord
//             </h1>
//             <div className=" flex h-full w-full items-end justify-end">
//               <DiscordSvg className=" h-28 w-28 pb-2" />
//             </div>
//           </div>
//         </Link>

//       </div>
//       <div className="hidden gap-3 md:grid md:grid-cols-1 md:gap-4 lg:gap-6 ">
//         <Link href={""}>
//           {" "}
//           <IntroSquareCard
//             src={
//               "https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
//             }
//             alt=""
//             name=" the Title here"
//             muted="some sort name"
//           />
//         </Link>
//         <Link href={""}>
//           <IntroSquareCard
//             src={
//               "https://pbs.twimg.com/profile_images/1724506817449852929/di5Sjh-Q.jpg"
//             }
//             alt=""
//             name=" the Title here"
//             muted="some sort name"
//           />
//         </Link>
//       </div>
