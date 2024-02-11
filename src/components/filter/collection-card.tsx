import Link from "next/link";
import OptImage from "../ui/optimised-image";

import React from "react";

const CollectionCard = ({ data }: any) => {
  const { name, bannerUrl } = data;
  return (
    <Link
      href={""}
      className=" relative flex max-w-sm flex-col overflow-hidden  rounded-lg "
    >
      <OptImage
        className=" h-[150px] flex-shrink-0 w-full "
        src={bannerUrl}
        alt={name}
      />

      <div className=" flex w-full flex-col ">
        <div className="  line-clamp-1 flex items-center p-2 py-3 text-left text-lg font-bold leading-none">
          {name}
        </div>
        <div className="flex">
          <div className="flex flex-1 flex-col p-2">
            <span>mint Price</span>
            <span>5SOL</span>
          </div>
          <div className="flex flex-1  flex-col p-2">
            <span>Mint Date</span>
            <span>2 sep 2024</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
