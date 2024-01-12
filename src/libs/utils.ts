import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function slugify(str: string) {
	return str
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "")
		.replace(/--+/g, "-");
}

export function formatDate(inputDate: Date | null | undefined) {
	if (!inputDate) {
		return "TBA";
	}

	const formattedDate = format(new Date(inputDate), "d MMM yyyy");
	return formattedDate;
}

export function formatBlockchian(blockchain: string) {
	if (!blockchain) {
		return "TBA";
	} else return blockchain;
}


export function nFormatter(num: number, digits: number) {
  if (num === 0) {
    return 0;
  }
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}
