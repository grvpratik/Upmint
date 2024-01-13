"use client";
import React, { useState } from "react";
import MarginX from "./margin-container";
import CardWithBanner from "./card-banner";
import TagFilter from "./tag-filter";

const FilterArea = () => {
  const [first, setFirst] = useState<string[]>([]);
  return (
    <MarginX>
      <div className="grid w-full grid-cols-10 gap-2">
        <div className=" col-span-2">
          {" "}
          <TagFilter tags={["dg", "gdgf", "dfgdf","dg", "gdgf", "dfgdf","dg", "gdgf", "dfgdf"]} onTagSelected={setFirst} />
        </div>
        <div className=" col-span-8">
          {" "}
          <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <CardWithBanner />
            <CardWithBanner />
            <CardWithBanner />
            <CardWithBanner />
            <CardWithBanner />
            <CardWithBanner />
            <CardWithBanner />
            <CardWithBanner />
          </div>
        </div>
      </div>
    </MarginX>
  );
};

export default FilterArea;
