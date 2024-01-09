import React from "react";

const MarginX = ({ children }: { children: React.ReactNode }) => {
	return <main className=" mx-3 sm:mx-6 md:mx-8 lg:mx-10">{children}</main>;
};

export default MarginX;
