"use client";
import React, { useState } from "react";
import { useQuery } from "react-query";

import MarginX from "@/components/margin-container";
import Button from "@/components/ui/Button";
import getProjects from "@/actions/getProjects";
import CircleIncidator from "@/components/loaders/circle-indicator";

import CardWithBanner from "@/components/filter/card-banner";
import TagFilter from "@/components/filter/tag-filter";
import FilterSearch from "@/components/filter/filter-search";
import FilterList from "@/components/filter/filter-list";
import CardLoading from "@/components/loaders/card-loading";
import { ProjectDetailProps } from "@/libs/types";

const ITEM_PER_PAGE: number = 8;

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

  const fetchResult = async () => {
    try {
      const tagString = filter.tags.join(",");
      const result = await getProjects({ ...filter, tags: tagString });

      const { total: filteredCount, result: filteredData } = result;

      const lastPageCount = Math.ceil(filteredCount / ITEM_PER_PAGE);
      setLastPage(lastPageCount);

      setFetchedData((prev: any) =>
        filter.page === 1 ? filteredData : [...prev, ...filteredData],
      );

      return { filteredData, filteredCount };
    } catch (error:any) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };

  const { isLoading, error } = useQuery({
    queryKey: [{ filter }],
    queryFn: fetchResult,
  });

  const loadMore = () => {
    setFilter({
      ...filter,
      page: filter.page + 1,
    });
  };

  const loadMoreButton = (
    <Button.Primary
      onClick={loadMore}
      className="disabled:opacity-50 flex gap-1"
      disabled={isLoading}
    >
      {isLoading && <CircleIncidator />}
      <span>{isLoading ? "Loading..." : "Load More"}</span>
    </Button.Primary>
  );

  return (
    <MarginX>
      <div className="grid w-full grid-cols-10 gap-2">
        <div className="col-span-10 my-6 flex flex-col gap-2 md:col-span-2">
          <FilterSearch filter={filter} setFilter={setFilter} />
          <FilterList filter={filter} setFilter={setFilter} />
          <TagFilter
            tags={["first", "second", "third", "nft"]}
            filter={filter}
            onTagSelected={setFilter}
          />
        </div>
        <div className="col-span-10 flex flex-col items-center justify-center gap-2 md:col-span-8">
          <div className="my-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {(isLoading && filter.page === 1) ? (
              <CardLoading numberOfCards={12} />
            ) : (fetchedData && fetchedData.length > 0) ? (
              fetchedData.map((data:ProjectDetailProps, index: number) => (
                <CardWithBanner data={data} key={data?._id} />
              ))
            ) : (
              <div className="col-span-full flex  w-full items-center justify-center">
                Not found
              </div>
            )}
          </div>
          {!!lastPage && filter.page !== lastPage && (
            <div className="my-4">{loadMoreButton}</div>
          )}
        </div>
      </div>
    </MarginX>
  );
};

export default FilterClient;
