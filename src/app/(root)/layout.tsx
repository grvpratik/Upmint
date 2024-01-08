import MobileNav from "@/components/Header/mobile-nav";
import Nav from "@/components/Header/nav";
import React from "react";



const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex flex-col bg-background scroll-smooth antialiased">
			<MobileNav />
			<Nav/>
			{children}
			
		</main>
	);
};

export default RootLayout;
