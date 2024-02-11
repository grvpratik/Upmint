import React from "react";
import { Skeleton } from "../ui/skelton";

const CardLoading = ({ numberOfCards = 4 }: { numberOfCards: number }) => {
  // Create an array of 'numberOfCards' length
  const cards = Array.from({ length: numberOfCards }, (_, index) => (
    <div key={index} className="m-0.5 flex flex-col space-y-3 w-full">
      <Skeleton className="h-[125px] min-w-[250px]  rounded-t-lg" />
      <div className="space-y-4">
        <Skeleton className="h-4 max-w-[150px] rounded" />
        <Skeleton className="h-4 max-w-[230px]  rounded" />
      </div>
    </div>
  ));

  return <>{cards}</>;
};

export default CardLoading;
