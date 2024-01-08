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

