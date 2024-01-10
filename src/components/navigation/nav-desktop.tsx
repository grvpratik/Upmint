import React from "react";
import Link from "next/link";

import SearchData from "@/components/search/search-data";
import { MainNav } from "@/components/navigation/nav-links";
import MarginX from "@/components/margin-container";
import { cn } from "@/libs/utils";

const Nav = ({ className }: { className?: string }) => {
	return (
		<header className={cn("sticky top-0 z-50 w-full hidden md:block backdrop-blur-sm",className)}>
			<MarginX>
				<nav className="flex items-center py-3 relative">
					<div className="flex items-center ">
						<h1 className="font-bold text-lg">
							<Link href="/" className="flex items-center gap-2">
								<span className="hidden md:block text-lg ">UpMint</span>
							</Link>
						</h1>
					</div>
					<div className="flex flex-1 justify-between sm:mx:2 md:mx:3  lg:mx-4">
						<div className=" flex items-center  flex-shrink-0 mx-4">
							<SearchData />
						</div>
						<div className="flex items-center justify-between sm:mx:2 md:mx:3  lg:mx-4">
							<MainNav />
						</div>
					</div>
					<div className="flex justify-end relative">
						<button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full p-2 pl-5 pr-5 font-bold transition active:scale-95 duration-300 ease-in-out hover:ring-2 ring-offset-2 ring-blue-600">
							Primary
						</button>
					</div>
				</nav>
			</MarginX>
		</header>
	);
};

export default Nav;
