import MobileNav from "@/components/navigation/mobile-nav";
import Nav from "@/components/navigation/nav";
import React from "react";



const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex relative flex-col scroll-smooth antialiased ">
			<MobileNav />
			<Nav />
			{children}
		</div>
	);
};

export default RootLayout;
