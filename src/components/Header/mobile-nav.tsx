"use client";
import React, { useState } from "react";

import MarginX from "@/components/margin-container";

import { Transition } from "@headlessui/react";
import SearchData from "../search/search-data";


const MobileNav = () => {
	const [mobSearchToggle, setMobSearchToggle] = useState<boolean>(false);
	const [mobMenuToggle, setMobMenuToggle] = useState<boolean>(false);

	 

	
	
	return (
		<>
			<header className="sticky top-0 w-full md:hidden  backdrop-blur-md ">
				<MarginX>
					<nav className="w-full flex justify-between items-center py-2 h-full">
						<div className="h-6 w-6 flex items-center justify-center">
							<svg viewBox="0 0 78.2 66.4" xmlns="http://www.w3.org/2000/svg">
								<g
									id="svgGroup"
									strokeLinecap="round"
									fillRule="evenodd"
									fontSize="9pt"
									stroke="#000"
									strokeWidth="0.25mm"
									fill="#000"
								>
									<path
										d="M 2.375 66.323 A 5.102 5.102 0 0 0 3.3 66.4 A 8.869 8.869 0 0 0 4.188 66.353 Q 5.389 66.232 6.9 65.8 A 11.255 11.255 0 0 0 7.416 65.639 A 9.625 9.625 0 0 0 10.55 63.9 A 5.104 5.104 0 0 0 10.805 63.672 A 4.088 4.088 0 0 0 12.1 60.6 A 48.694 48.694 0 0 0 12.047 58.352 A 60.067 60.067 0 0 0 11.75 54.6 A 48.729 48.729 0 0 1 11.627 53.308 Q 11.506 51.841 11.449 50.171 A 91.155 91.155 0 0 1 11.4 47.1 Q 11.4 42 12.05 36.75 A 111.547 111.547 0 0 1 12.22 35.444 A 101.523 101.523 0 0 1 13.8 26.65 A 125.652 125.652 0 0 1 14.111 25.311 Q 15.069 21.294 16.1 18.2 A 10.239 10.239 0 0 1 16.775 16.772 Q 17.186 16.064 17.662 15.587 A 3.077 3.077 0 0 1 19.9 14.6 A 1.922 1.922 0 0 1 21.148 15.014 Q 21.88 15.606 22.155 17.043 A 9.438 9.438 0 0 1 22.3 18.3 Q 22.8 27 23.9 33.95 Q 24.622 38.511 25.43 41.931 A 55.269 55.269 0 0 0 26.3 45.2 Q 27.3 48.4 29.45 51.05 A 6.881 6.881 0 0 0 33.265 53.415 A 10.586 10.586 0 0 0 35.8 53.7 A 10.182 10.182 0 0 0 38.195 53.413 A 12.029 12.029 0 0 0 41.15 52.25 A 8.779 8.779 0 0 0 43.06 50.804 Q 43.882 50 44.666 48.904 A 22.654 22.654 0 0 0 46.1 46.6 A 54.744 54.744 0 0 0 47.92 43.006 A 71.566 71.566 0 0 0 49.85 38.4 Q 51.6 33.8 53.2 29 Q 54.8 24.2 56.1 20 A 15.558 15.558 0 0 1 56.401 19.019 Q 56.651 18.294 56.949 17.697 A 7.173 7.173 0 0 1 57.65 16.55 A 4.025 4.025 0 0 1 57.926 16.224 A 2.755 2.755 0 0 1 60 15.3 A 3.203 3.203 0 0 1 60.361 15.32 Q 60.633 15.351 60.846 15.431 A 1.078 1.078 0 0 1 61.5 16.05 A 2.786 2.786 0 0 1 61.604 16.369 Q 61.739 16.879 61.781 17.653 A 13.886 13.886 0 0 1 61.8 18.4 A 31.482 31.482 0 0 1 61.8 18.507 Q 61.79 21.41 61.25 27.35 Q 60.7 33.4 60.7 40.6 A 102.529 102.529 0 0 0 60.706 41.73 A 113.479 113.479 0 0 0 61.1 49.9 A 67.928 67.928 0 0 0 61.409 52.842 A 57.55 57.55 0 0 0 62.5 58.9 A 23.507 23.507 0 0 0 62.931 60.345 Q 63.314 61.491 63.78 62.444 A 11.521 11.521 0 0 0 64.9 64.3 A 4.801 4.801 0 0 0 67.719 66.105 A 7.618 7.618 0 0 0 69.5 66.3 Q 72.9 66.3 75.55 64.25 A 10.455 10.455 0 0 0 76.061 63.829 Q 76.786 63.191 77.266 62.51 A 4.796 4.796 0 0 0 78.2 59.7 Q 78.2 58.6 77.55 57.7 Q 76.9 56.8 76.1 56.1 A 17.535 17.535 0 0 1 73.93 53.094 A 21.365 21.365 0 0 1 72.05 48.7 A 41.973 41.973 0 0 1 71.431 46.463 A 47.579 47.579 0 0 1 70.25 39.3 A 118.809 118.809 0 0 1 70.013 36.224 A 100.867 100.867 0 0 1 69.8 29.8 Q 69.8 26.9 69.95 24.15 A 362.565 362.565 0 0 0 69.959 23.979 A 333.038 333.038 0 0 0 70.2 18.8 A 144.03 144.03 0 0 0 70.331 16.575 A 124.934 124.934 0 0 0 70.5 10.2 A 33.396 33.396 0 0 0 70.484 9.165 Q 70.344 4.654 68.95 2.45 Q 67.4 0 63.8 0 A 11.569 11.569 0 0 0 63.318 0.01 A 8.814 8.814 0 0 0 57.3 2.55 A 17.666 17.666 0 0 0 55.139 5.128 A 21.811 21.811 0 0 0 53.05 8.95 Q 51.4 12.8 50.1 16.6 Q 49 20.1 47.55 24.35 Q 46.1 28.6 44.6 32.4 A 82.136 82.136 0 0 1 44.535 32.565 Q 43.072 36.248 41.8 38.4 A 7.967 7.967 0 0 1 41.314 39.141 Q 40.897 39.701 40.441 40.072 A 3.014 3.014 0 0 1 38.5 40.8 A 2.192 2.192 0 0 1 37.025 40.247 Q 36.665 39.937 36.366 39.452 A 5.909 5.909 0 0 1 35.9 38.5 A 18.256 18.256 0 0 1 35.686 37.97 Q 35.034 36.285 34.419 33.797 A 72.032 72.032 0 0 1 33.8 31.05 Q 32.8 26.2 32 20.3 Q 31.2 14.4 30.6 8.6 A 21.945 21.945 0 0 0 30.564 8.205 Q 30.108 3.723 28 1.95 Q 25.8 0.1 23 0.1 Q 19.2 0.1 16.35 2.85 A 16.087 16.087 0 0 0 14.911 4.448 Q 12.928 6.954 11.3 10.8 A 89.156 89.156 0 0 0 11.15 11.174 Q 10.084 13.838 8.797 17.532 A 269.825 269.825 0 0 0 7.85 20.3 A 129.565 129.565 0 0 0 6.437 24.777 A 154.84 154.84 0 0 0 4.3 32.8 Q 2.5 40.7 1.25 48.7 A 130.088 130.088 0 0 0 0.923 50.915 Q 0.47 54.183 0.239 57.131 A 74.131 74.131 0 0 0 0 62.9 Q 0 64.2 0.7 65.3 A 2.084 2.084 0 0 0 1.497 66.029 Q 1.876 66.231 2.375 66.323 Z"
										vectorEffect="non-scaling-stroke"
									/>
								</g>
							</svg>
						</div>
						<div className="flex gap-2 items-center">
							<div>
								<button
									onClick={() => setMobSearchToggle(true)}
									data-collapse-toggle="navbar-sticky"
									type="button"
									className=" border-solid  inline-flex items-center p-1 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden transition duration-500 ease-in-out hover:ring-2 ring-offset-2 ring-gray-700"
									aria-controls="navbar-sticky"
									aria-expanded="false"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
										/>
									</svg>
								</button>
							</div>{" "}
							<div>
								{" "}
								<button
									onClick={() => setMobMenuToggle(true)}
									data-collapse-toggle="navbar-sticky"
									type="button"
									className=" border-solid  inline-flex items-center p-1 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden transition duration-500 ease-in-out hover:ring-2 ring-offset-2 ring-gray-700"
									aria-controls="navbar-sticky"
									aria-expanded="false"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
										/>
									</svg>
								</button>
							</div>
						</div>
					</nav>
				</MarginX>
			</header>
			<Transition.Root
				className="fixed inset-0 w-full backdrop-blur-sm overflow-hidden md:hidden"
				show={mobSearchToggle}
			>
				<Transition.Child
					className="flex w-full  py-2 gap-2 px-1 bg-white relative"
					enter="transition-all ease-in-out duration-400 "
					enterFrom="opacity-0 -translate-y-6"
					enterTo="opacity-100 translate-y-0"
					leave="transition-all ease-in-out duration-300"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="flex-1">{mobSearchToggle && <SearchData />}</div>
					<button
						onClick={() => setMobSearchToggle(false)}
						data-collapse-toggle="navbar-sticky"
						type="button"
						className=" border-solid  inline-flex items-center p-1 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg  transition duration-500 ease-in-out hover:ring-2 ring-offset-2 ring-gray-700"
						aria-controls="navbar-sticky"
						aria-expanded="false"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18 18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</Transition.Child>
			</Transition.Root>
		</>
	);
};

export default MobileNav;
