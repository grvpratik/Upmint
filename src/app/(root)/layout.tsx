import MobileNav from "@/components/navigation/nav-mobile";
import Nav from "@/components/navigation/nav-desktop";
import React from "react";
import { Footer } from "@/components/footer";



const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="flex relative flex-col scroll-smooth antialiased font-inter ">
			<MobileNav />
			<Nav />
			{children}
			<Footer/>
		</main>
	);
};

export default RootLayout;
