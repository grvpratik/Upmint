import Nav from "@/components/navigation/nav-desktop";
import MobileNav from "@/components/navigation/nav-mobile";
import React from "react";

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex relative flex-col scroll-smooth antialiased font-inter bg-gray-50">
			<MobileNav className=" bg-transparent fixed backdrop-blur-0 font-mono z-30" />
			<Nav className=" bg-transparent fixed backdrop-blur-0 font-mono" />
			{children}
		</main>
	);
};

export default RouteLayout;
