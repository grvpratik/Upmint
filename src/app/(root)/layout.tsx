import MobileNav from "@/components/navigation/nav-mobile";
import Nav from "@/components/navigation/nav-desktop";
import React from "react";



const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex relative flex-col scroll-smooth antialiased ">
			<MobileNav />
			<Nav />
			{children}
		</main>
	);
};

export default RootLayout;
