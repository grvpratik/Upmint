"use client";
import React, { useState } from "react";
import MarginX from "./margin-container";
import CardWithBanner from "./card-banner";
import TagFilter from "./tag-filter";
import FilterSearch from "./filter-search";

const FilterClient = () => {
  
  const [fetchedData, setFetchedData] = useState([]);
  const [lastPage, setLastPage] = useState<number>(0);
  const [filter, setFilter] = useState<any>({
    search: "",
    blockchain: "",
    sort: "",
    order: "",
    page: 1,
    tag:[]
  });
  
console.log(filter);
  return (
    <MarginX>
      <div className="grid w-full grid-cols-10 gap-2">
        <div className=" col-span-10 my-6 md:col-span-2">
          {" "}
          <FilterSearch filter={filter} setFilter={setFilter} />
          <TagFilter
            tags={[
             "first","second","third"
            ]}
            filter={filter}
            onTagSelected={setFilter}
          />
        </div>
        <div className=" col-span-10 md:col-span-8">
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

export default FilterClient;
