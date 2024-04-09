import MobileNav from "@/components/navigation/nav-mobile";
import Nav from "@/components/navigation/nav-desktop";
import React from "react";
import { Footer } from "@/components/footer/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MobileNav />
      <Nav className=" backdrop-blur-sm " />
      <section className="relative flex flex-col scroll-smooth font-outfit antialiased ">
        {children}{" "}
      </section>
      <Footer />
    </>
  );
};

export default RootLayout;
