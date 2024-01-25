import React from "react";
import Link from "next/link";

import SearchData from "@/components/search/search-data";
import { MainNav } from "@/components/navigation/nav-links";
import MarginX from "@/components/margin-container";
import { cn } from "@/libs/utils";
import Button from "@/components/ui/Button";

const Nav = ({ className }: { className?: string }) => {
	return (
		<header className={cn("sticky top-0 z-50 w-full hidden md:block",className)}>
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
						<Button.Primary className="">
							Primary
						</Button.Primary>
					</div>
				</nav>
			</MarginX>
		</header>
	);
};

export default Nav;


// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// import SearchData from "@/components/search/search-data";
// import { MainNav } from "@/components/navigation/nav-links";
// import MarginX from "@/components/margin-container";
// import { cn } from "@/libs/utils";
// import Button from "@/components/ui/Button";

// const Nav = ({ className }: { className?: string }) => {
//   const [backgroundColor, setBackgroundColor] = useState("");

//   const handleScroll = () => {
//     if (window.scrollY > 100) {
//       setBackgroundColor("backdrop-blur");
//     } else {
//       setBackgroundColor("");
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <header
//       className={cn(
//         "sticky top-0 z-50 hidden w-full transition delay-75 duration-200 md:block",
//         className,
//         backgroundColor,
//       )}
//     >
//       <MarginX>
//         <nav className="relative flex items-center py-3">
//           <div className="flex items-center ">
//             <h1 className="text-lg font-bold">
//               <Link href="/" className="flex items-center gap-2">
//                 <span className="hidden text-lg md:block ">UpMint</span>
//               </Link>
//             </h1>
//           </div>
//           <div className="sm:mx:2 md:mx:3 flex flex-1 justify-between  lg:mx-4">
//             <div className=" mx-4 flex  flex-shrink-0 items-center">
//               <SearchData />
//             </div>
//             <div className="sm:mx:2 md:mx:3 flex items-center justify-between  lg:mx-4">
//               <MainNav />
//             </div>
//           </div>
//           <div className="relative flex justify-end">
//             <Button.Primary className="">Primary</Button.Primary>
//           </div>
//         </nav>
//       </MarginX>
//     </header>
//   );
// };

// export default Nav;
