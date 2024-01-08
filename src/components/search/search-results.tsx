import React from "react";
import Image from "next/image";
import Link from "next/link";

const SearchResultItem = ({ result }: { result: any }) => {
	return (
		<Link href={`/mints${result.slug}`}>
			<div className="flex items-center gap-3 p-1.5 rounded hover:bg-violet-950/10 cursor-pointer">
				<div>
					<Image
						className="object-cover bg-cover rounded overflow-hidden"
						src={result.imageUrl}
						alt={result.name}
						height={30}
						width={30}
					/>
				</div>
				<div className="font-medium text-base">{result.name}</div>
			</div>
		</Link>
	);
};

const SearchResults = ({ searchResult }: { searchResult: any[] }) => {
	return (
		<div className="relative bg-background shadow-md">
			{searchResult && searchResult.length > 0 ? (
				<div className="flex flex-col gap-1 hidescroll bg-background max-h-80 overflow-y-auto z-50 p-3 rounded overflow-hidden">
					<div className=" font-semibold text-sm">Total Projects </div>
					{searchResult.map((result: any, index: number) => (
						<div className="w-full" key={index}>
							<SearchResultItem result={result} />
						</div>
					))}
				</div>
			) : (
				<div className="h-20 flex items-center justify-center">not found</div>
			)}
		</div>
	);
};

export default SearchResults;
