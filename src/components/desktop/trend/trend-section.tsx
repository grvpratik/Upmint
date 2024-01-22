import React from "react";
import MintTabCard from "./trend-card";
import Button from "@/components/ui/Button";
import MarginX from "@/components/margin-container";
import Link from "next/link";
import getProjects from "@/actions/getProjects";

// 

const IntroTrendSection = async () => {
	const trending = await getProjects({
		sort: 'follower',
		order:'desc'
	})
	console.log(trending)
	const trendingData=trending.result
	return (
    <section className="my-4 flex flex-col">
      <MarginX>
        <div className="flex w-full items-center justify-between py-4">
          <div className="  font-montserrat text-2xl font-bold   ">
            Trending Projects
          </div>
          <Link href={"/trending"}>
            <Button.Secondary className=" ">
              view all
            </Button.Secondary>
          </Link>
        </div>
        <div className=" grid grid-flow-row grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {/* Render MintTabCard components based on earlyData */}
          {trendingData.length > 0 ? (
            trendingData.map((data: any, index: number) => (
              <MintTabCard data={data} key={data._id} index={index} />
            ))
          ) : (
            <div className="flex h-[30rem] w-full items-center justify-center col-span-full">
              Server Error
            </div>
          )}
        </div>
      </MarginX>
    </section>
  );
};

export default IntroTrendSection;
