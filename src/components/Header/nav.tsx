import React from "react";
import Link from "next/link";

import SearchData from "../search/search-data";
import { MainNav } from "./nav-links";
import MarginX from "../margin-container";

const Nav = () => {
	return (
		<header className="sticky top-0 z-50 w-full hidden md:block ">
			<MarginX>
				<nav className="flex items-center py-3 relative">
					<div className="flex items-center ">
						<h1 className="font-bold text-lg">
							<Link href="/" className="flex items-center gap-2">
								<span className="hidden md:block text-lg">UpMint</span>
							</Link>
						</h1>
					</div>
					<div className="flex flex-1 justify-between mx-4">
						<div className=" flex items-center  flex-shrink-0 mx-4">
							<SearchData />
						</div>
						<div className="flex items-center justify-between mx-4">
							<MainNav />
						</div>
					</div>
					<div className="flex justify-end">
						<button className="bg-blue-400 p-2 pl-4 pr-4 rounded-lg font-bold transition duration-500 text-white ease-in-out hover:ring-2 ring-offset-2 ring-blue-600">
							Primary
						</button>
					</div>
				</nav>
			</MarginX>
		</header>
	);
};

export default Nav;
