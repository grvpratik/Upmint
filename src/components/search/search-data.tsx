"use client";
import React, { Fragment, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SearchInput from "@/components/search/search-input";
import { useQuery } from "react-query";
import getProjects from "@/actions/getProjects";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import SearchResults from "./search-results";
import CircleIncidator from "../loaders/circle-indicator";
const SearchData = () => {
	const [searchResult, setSearchResult] = useState([]);
	const [searchValue, setSearchValue] = useState<string>("");
	const [searchMenu, setSearchMenu] = useState<boolean>(false);
	const searchDataRef = useRef<HTMLDivElement>(null);
	const { isLoading, error, data } = useQuery({
		queryKey: ["search", searchValue],
		queryFn: async () => {
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
		},
	});
	console.log(data);

	const handleClick = () => {
		setSearchMenu(true);
	};
	const handleClose = () => {
		setSearchMenu(false);
	};

	useOnClickOutside(searchDataRef, handleClose);
	return (
		<div
			ref={searchDataRef}
			className="relative flex-shrink-0 z-50 w-full md:max-w-[27rem] md:min-w-[17rem]"
		>
			<SearchInput
				modalState={searchMenu}
				onClick={handleClick}
				setSearch={setSearchValue}
			/>
			{searchMenu && searchValue.length > 0 && (
				<div className="absolute w-full top-full left-0 mt-3 border border-solid  border-border  rounded-xl overflow-hidden">
					{isLoading ? (
						<div className="h-20 flex items-center justify-center">
							<CircleIncidator />
						</div>
					) : (
						<div className="relative bg-background shadow-md">
							{searchResult && searchResult.length > 0 && searchValue ? (
								<div className="flex flex-col gap-1 hidescroll bg-background max-h-80 overflow-y-auto z-50 p-3 rounded overflow-hidden">
									<SearchResults searchResult={searchResult} />
								</div>
							) : (
								<div className="h-20 flex items-center justify-center">
									not found
								</div>
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default SearchData;
