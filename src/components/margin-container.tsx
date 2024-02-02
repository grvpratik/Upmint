import React from "react";

const MarginX = ({ children }: { children: React.ReactNode }) => {
	return <section className=" mx-3 sm:mx-6 md:mx-8 lg:mx-10">{children}</section>;
};

export default MarginX;
