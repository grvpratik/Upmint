"use client";

import React, { useState, useEffect } from "react";

import useDebounce from "@/hooks/useDebounce";
type FilterProps = Object;

interface FilterSearchProps {
  filter: FilterProps;
  setFilter: React.Dispatch<React.SetStateAction<FilterProps>>;
}

const FilterSearch = ({ filter, setFilter }: FilterSearchProps) => {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, 500);

  useEffect(() => {
    if (debouncedSearch !== null) {
      setFilter({
        ...filter,
        search: encodeURIComponent(debouncedSearch),
        page: 1,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full ">
        <div className="rtl:inset-r-0 pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <svg
            className="h-4 w-4 bg-transparent text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="table-search-users"
          className="border-border dark:bg-background/10 block w-full rounded-lg border border-solid bg-gray-50/10  p-2   ps-10 text-sm text-gray-900  shadow-sm  outline-none    "
          placeholder="Search for users"
          value={searchInput}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FilterSearch;
