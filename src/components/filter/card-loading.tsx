import React from "react";

const CardLoading = ({ numberOfCards = 4 }: { numberOfCards: number }) => {
  // Create an array of 'numberOfCards' length
  const cards = Array.from({ length: numberOfCards }, (_, index) => (
    <div
      key={index}
      role="status"
      className="grid min-h-[225px] min-w-[17rem] max-w-[38rem] grid-cols-1 grid-rows-5  overflow-hidden   rounded-lg shadow-depth  "
    >
      <div className="row-span-3 animate-pulse bg-gray-400"></div>
      <div className="row-span-2 flex flex-col gap-2  p-4">
        {" "}
        <div className="mb-2 h-2.5 w-32 rounded-full bg-gray-200 "></div>
        <div className="h-2 w-48 rounded-full bg-gray-200 "></div>
      </div>
    </div>
  ));

  return <>{cards}</>;
};

export default CardLoading;
