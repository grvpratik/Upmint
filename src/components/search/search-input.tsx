"use client";
import React, { useEffect, useState } from "react";

import useDebounce from "@/hooks/useDebounce";
import { cn } from "@/libs/utils";
interface SearchInputProps {
	setSearch: (value: string) => void;
	onClick: () => void;
	modalState: boolean;
}
const SearchInput = ({ setSearch, onClick, modalState }: SearchInputProps) => {
	const [searchInput, setSearchInput] = useState("");
	const debouncedSearch = useDebounce(searchInput, 500);

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
				placeholder="Search..."
				value={searchInput}
				onChange={handleChange}
				className={cn("h-8 md:h-9  focus:outline-none  w-full ")}
			/>
			<div className="h-8 w-8 p-2  flex items-center justify-center text-gray-500">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
					/>
				</svg>
			</div>
		</div>
	);
};

export default SearchInput;
