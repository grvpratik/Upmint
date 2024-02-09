import React from "react";
import { Skeleton } from "../ui/skelton";

const CardLoading = ({ numberOfCards = 4 }: { numberOfCards: number }) => {
  // Create an array of 'numberOfCards' length
  const cards = Array.from({ length: numberOfCards }, (_, index) => (
    <div key={index} className="m-1 flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px]  rounded-t-lg" />
      <div className="space-y-4">
        <Skeleton className="h-4 w-[150px] rounded" />
        <Skeleton className="h-4 w-[230px]  rounded" />
      </div>
    </div>
  ));

  return <>{cards}</>;
};

export default CardLoading;
