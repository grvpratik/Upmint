import React from "react";

import Nav from "@/components/navigation/nav-desktop";
import MobileNav from "@/components/navigation/nav-mobile";

const RouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MobileNav className=" sticky z-30 bg-transparent  backdrop-blur-0" />
      <Nav className="  sticky bg-transparent  backdrop-blur-0" />{" "}
      <main className="antialiase relative flex flex-col scroll-smooth  ">
        {children}
      </main>
    </>
  );
};

export default RouteLayout;
