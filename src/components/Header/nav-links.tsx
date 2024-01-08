import Link from "next/link";

import { cn } from "@/libs/utils";
import { HalfArrowDown } from "../icons/svg";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				"flex items-center gap-3 md:gap-4 lg:gap-6 antialiased",
				className
			)}
			{...props}
		>
			<div className=" text-letter text-sm p-1.5 rounded-md transition-all duration-150 px-2 bg-white hover:bg-gray-200 ease-in-out flex items-center">
				<span>Explore</span>

				<HalfArrowDown className="h-3 w-3 ml-1.5" />
			</div>

			<Link
				href="/resources"
				className="text-sm text-letter  p-1.5 rounded-md  transition-all duration-150 px-2 bg-white hover:bg-gray-200 ease-in-out"
			>
				Resources
			</Link>
			<Link
				href="/about"
				className="text-sm  text-letter mx-2.5 p-1.5 rounded-md  transition-all duration-150 px-2 bg-white hover:bg-gray-200 ease-in-out"
			>
				About
			</Link>
		</nav>
	);
}
