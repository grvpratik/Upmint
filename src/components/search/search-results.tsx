import React from "react";
import Image from "next/image";
import Link from "next/link";

const SearchResultItem = ({ result }: { result: any }) => {
  return (
    <Link href={`/mints${result.slug}`}>
      <div className="flex cursor-pointer items-center gap-3 rounded  p-1.5">
        <div>
          <Image
            className="overflow-hidden rounded bg-cover object-cover"
            src={result.imageUrl}
            alt={result.name}
            height={30}
            width={30}
          />
        </div>
        <div className=" line-clamp-1 text-sm font-medium">{result.name}</div>
      </div>
    </Link>
  );
};

const SearchResults = ({ searchResult }: { searchResult: any[] }) => {
  return (
    <div className="no-scrollbar  relative bg-overlay shadow-md">
      <div className="hidescroll bg-background no-scrollbar z-50 flex max-h-80 flex-col gap-1 overflow-hidden overflow-y-auto rounded p-3">
        <div className=" text-sm font-semibold">Projects </div>
        {searchResult.map((result: any, index: number) => (
          <div className="w-full" key={index}>
            <SearchResultItem result={result} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
