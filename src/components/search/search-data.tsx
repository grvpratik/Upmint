"use client";
import React, { useRef, useState } from "react";
import { useQuery } from "react-query";

import SearchInput from "@/components/search/search-input";
import getProjects from "@/actions/getProjects";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import SearchResults from "@/components/search/search-results";
import CircleIncidator from "@/components/loaders/circle-indicator";

const SearchData = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchMenu, setSearchMenu] = useState<boolean>(false);
  const searchDataRef = useRef<HTMLDivElement>(null);

  const fetchResult = async () => {
    // Build query parameters

    // Make API request to get collection data
    const result = await getProjects({
      search: searchValue,
      items: 10,
    });
    const filteredCount = result.total;
    const filteredData = result.result;

    // Update collection data based on pagination
    setSearchResult(filteredData);

    // Return data and count
    return { filteredData, filteredCount };
  };

  const { isLoading, error, data }: any = useQuery({
    queryKey: [searchValue],
    queryFn: fetchResult,
  });
  console.log(data);

  const handleClose = () => {
    setSearchMenu(false);
  };

  useOnClickOutside(searchDataRef, handleClose);

  const renderSearchContent = () => {
    if (isLoading) {
      return (
        <div className="flex h-20 items-center justify-center bg-white">
          <CircleIncidator />
        </div>
      );
    } else {
      return (
        <div className="no-scrollbar  relative shadow-md">
          {renderSearchResults()}
        </div>
      );
    }
  };

  const renderSearchResults = () => {
    if (error) {
      return (
        <div className="flex h-20 items-center justify-center bg-white">
          Error: {error?.message}
        </div>
      );
    } else if (searchResult && searchResult.length > 0 && searchValue) {
      return <SearchResults searchResult={searchResult} />;
    } else {
      return (
        <div className="flex h-20 items-center justify-center bg-white">
          not found
        </div>
      );
    }
  };
  return (
    <div
      ref={searchDataRef}
      className="z-50 w-full flex-shrink-0 md:relative md:min-w-[17rem] md:max-w-[27rem]"
    >
      <SearchInput
        onClick={() => setSearchMenu(true)}
        setSearch={setSearchValue}
      />
      {searchMenu && searchValue.length > 0 && (
        <div className="shadow-depth border-border no-scrollbar absolute left-0 top-full mt-3 w-full overflow-hidden rounded-xl border border-solid">
          {renderSearchContent()}
        </div>
      )}
    </div>
  );
};

export default SearchData;
