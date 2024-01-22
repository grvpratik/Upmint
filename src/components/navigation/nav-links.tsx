import Link from "next/link";

import { cn } from "@/libs/utils";
import { HalfArrowDownSvg, LatestIconSvg, TrendingIconSvg } from "../icons/svg";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				"flex items-center gap-2 md:gap-3 lg:gap-4 antialiased font-medium  hover:*:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ",
				className
			)}
			{...props}
		>
			<div className="group relative text-sm p-1.5  rounded-md transition-all duration-200 px-2  hover:bg-gray-100/50 ease-in-out flex items-center">
				<span>Explore</span>
				<HalfArrowDownSvg className="h-3 w-3 ml-1.5  group-hover:rotate-180 transition-all duration-150 ease-in-out" />
				<div className="absolute rounded-xl scale-0  w-36 group-hover:scale-100 group-hover:block inline-block transition-all duration-500  left-0 pt-2 top-full ">
					<div className="flex w-full rounded-xl font-semibold gap-2  bg-slate-950 flex-col  p-2 shadow-depth">
						<Link
							href={"/trending"}
							className="p-2.5 cursor-pointer rounded-lg flex gap-2 items-center hover:bg-gray-100/10"
						>
							<span>
								<TrendingIconSvg className="h-5 w-5" />
							</span>
							<span>Trending Projects</span>
						</Link>
						<Link
							href={"/early"}
							className="p-2.5 cursor-pointer rounded-lg flex gap-2 items-center hover:bg-gray-100/10 "
						>
							<span>
								<LatestIconSvg className="h-5 w-5" />
							</span>
							<span>Early Projects</span>
						</Link>
					</div>
				</div>
			</div>

			<Link
				href="/resources"
				className="text-sm   p-1.5 rounded-md  transition-all duration-150 px-2  hover:bg-gray-100/50 ease-in-out"
			>
				Resources
			</Link>
			<Link
				href="/blogs"
				className="text-sm   mx-2.5 p-1.5 rounded-md  transition-all duration-150 px-2  hover:bg-gray-100/50 ease-in-out"
			>
				Blogs
			</Link>
		</nav>
	);
}
