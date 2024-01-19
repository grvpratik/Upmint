"use client";
import React, { useState } from "react";
import MarginX from "../margin-container";
import CardWithBanner from "./card-banner";
import TagFilter from "./tag-filter";
import FilterSearch from "./filter-search";
import FilterList from "./filter-list";
import getProjects from "@/actions/getProjects";
import { useQuery } from "react-query";

const FilterClient = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [lastPage, setLastPage] = useState<number>(0);
  const [filter, setFilter] = useState<any>({
    search: "",
    blockchain: "",
    sort: "",
    order: "",
    page: 1,
    tags: [],
  });
  const itemsPerPage: number = 10;
  // UseQuery hook for fetching data

  const fetchResult = async () => {
    const tagString = filter.tags.join(",");
    // Build query parameters
    const arr: any = { ...filter, tags: tagString };
    console.log(arr, "arr");
    // Make API request to get collection data
    const result = await getProjects(arr);
    const filteredCount = result.total;
    const filteredData = result.result;

    // Calculate last page
    const lastPageCount = Math.ceil(filteredCount / itemsPerPage);
    setLastPage(lastPageCount);

    // Update collection data based on pagination
    setFetchedData((prev: any) =>
      filter.page === 1 ? filteredData : [...prev, ...filteredData],
    );

    // Return data and count
    return { filteredData, filteredCount };
  };

  
  const { isLoading, error } = useQuery({
    queryKey: [{ filter }],

    queryFn: fetchResult,
  });

  console.log(filter.tags);
  return (
    <MarginX>
      <div className="grid w-full grid-cols-10 gap-2 ">
        <div className=" col-span-10 my-6 flex flex-col gap-2 md:col-span-2">
          {" "}
          <FilterSearch filter={filter} setFilter={setFilter} />
          <FilterList filter={filter} setFilter={setFilter} />
          <TagFilter
            tags={["first", "second", "third", "nft"]}
            filter={filter}
            onTagSelected={setFilter}
          />
        </div>
        <div className=" col-span-10 md:col-span-8">
          {" "}
          <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {isLoading && filter.page === 1 ? (
              <div>loading..</div>
            ) : fetchedData && fetchedData.length > 0 ? (
              fetchedData.map((data, index: number) => (
                <CardWithBanner data={data} key={data?._id} />
              ))
            ) : (
              <div className="col-span-full flex h-[30rem] w-full items-center justify-center">
                not found
              </div>
            )}
          </div>
        </div>
      </div>
    </MarginX>
  );
};

export default FilterClient;
