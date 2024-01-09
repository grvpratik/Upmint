import Link from "next/link";

import { cn } from "@/libs/utils";
import { HalfArrowDownSvg } from "../icons/svg";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				"flex items-center gap-2 md:gap-3 lg:gap-4 antialiased font-medium font-mono hover:*:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ",
				className
			)}
			{...props}
		>
			<div className="text-letter text-sm p-1.5 rounded-md transition-all duration-150 px-2  hover:bg-gray-200/50 ease-in-out flex items-center">
				<span>Explore</span>

				<HalfArrowDownSvg className="h-3 w-3 ml-1.5  hover:rotate-180 transition-all duration-150 ease-in-out" />
			</div>

			<Link
				href="/resources"
				className="text-sm text-letter  p-1.5 rounded-md  transition-all duration-150 px-2  hover:bg-gray-200/50 ease-in-out"
			>
				Resources
			</Link>
			<Link
				href="/about"
				className="text-sm  text-letter mx-2.5 p-1.5 rounded-md  transition-all duration-150 px-2  hover:bg-gray-200/50 ease-in-out"
			>
				About
			</Link>
		</nav>
	);
}
