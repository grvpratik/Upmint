import MobileNav from "@/components/navigation/nav-mobile";
import Nav from "@/components/navigation/nav-desktop";
import React from "react";
import { Footer } from "@/components/footer/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex flex-col scroll-smooth font-inter antialiased ">
      <MobileNav />
      <Nav className=" backdrop-blur-sm" />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
