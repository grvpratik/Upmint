import React from "react";
import GetFeatured from "@/actions/getFeatured";


import IntroEarlyCard from "@/components/desktop/early/intro-early-card";
import MarginX from "@/components/margin-container";
import { ProjectDetailProps } from "@/libs/types";


const EarlyRoutePage = async() => {
const {result, error} = await GetFeatured();
console.log(result,"result")
  return (
    <MarginX>
      <div className="mt-16 flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold dark:text-white">
          Early Projects
        </h1>
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {result ? (
            result.map((item:ProjectDetailProps) => <IntroEarlyCard key={item._id} data={item} />)
          ) : (
            <p>No early projects available.</p>
          )}
        </section>
      </div>
    </MarginX>
  );
};

export default EarlyRoutePage;
