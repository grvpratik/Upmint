"use client";
import React, { useEffect, useState } from "react";

import useDebounce from "@/hooks/useDebounce";
import { cn } from "@/libs/utils";
import { SearchGlassIcon } from "../icons/svg";

interface SearchInputProps {
	setSearch: (value: string) => void;
	onClick: () => void;
	
}
const SearchInput = ({ setSearch, onClick }: SearchInputProps) => {
	const [searchInput, setSearchInput] = useState<string>("");
	const debouncedSearch = useDebounce(searchInput, 800);

	useEffect(() => {
		if (debouncedSearch !== null) {
			const finalSearch = encodeURIComponent(debouncedSearch);
			setSearch(finalSearch);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearch]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	return (
		<div
			onClick={onClick}
			className="relative  w-full mx-auto z-10 flex flex-row-reverse items-center overflow-hidden border-solid hover:border-gray-300  rounded-lg font-light text-sm  "
		>
			<input
				name="search"
				placeholder="Search.."
				value={searchInput}
				onChange={handleChange}
				className={cn("h-8 md:h-9  focus:outline-none  w-full ")}
			/>
			<div className="h-8 w-8 p-2  flex items-center justify-center text-gray-500">
				<SearchGlassIcon className="w-6 h-6"/>
			</div>
		</div>
	);
};

export default SearchInput;
