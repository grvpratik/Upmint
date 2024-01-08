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

	const fetchResult = async() => {
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
	}

	const { isLoading, error, data }:any = useQuery({
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
				<div className="h-20 flex items-center justify-center">
					<CircleIncidator />
				</div>
			);
		} else {
			return (
				<div className="relative  shadow-md no-scrollbar">
					{renderSearchResults()}
				</div>
			);
		}
	};

	const renderSearchResults = () => {
		if (error) {
			return (
				<div className="h-20 flex items-center justify-center">
					Error: {error?.message}
				</div>
			);
		} else if (searchResult && searchResult.length > 0 && searchValue) {
			return <SearchResults searchResult={searchResult} />;
		} else {
			return (
				<div className="h-20 flex items-center justify-center">not found</div>
			);
		}
	};
	return (
		<div
			ref={searchDataRef}
			className="md:relative flex-shrink-0 z-50 w-full md:max-w-[27rem] md:min-w-[17rem]"
		>
			<SearchInput
				
				onClick={()=>setSearchMenu(true)}
				setSearch={setSearchValue}
			/>
			{searchMenu && searchValue.length > 0 && (
				<div className="absolute w-full top-full left-0 mt-3 border border-solid border-border rounded-xl overflow-hidden no-scrollbar">
					{renderSearchContent()}
				</div>
			)}
		</div>
	);
};

export default SearchData;
