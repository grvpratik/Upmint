import Image from "next/image";
import Link from "next/link";

import OptImage from "@/components/ui/optimised-image";

import { formatDate, nFormatter } from "@/libs/utils";
import { TriagleFilledSvg, VerifiedSvg } from "@/components/icons/svg";

const MintTabCard = ({ data, index }: { data: any; index: number }) => {
  const {
    slug,
    name,
    imageUrl,
    bannerUrl,
    supply,
    rating,
    whitelist,
    verified,
    mintPrice,
    startTime,
    blockchain,
    prevFollower,
    mintDate,
    createdAt,
    currFollower,
  } = data;

  return (
    <Link
      className="group rounded-lg transition-all duration-200 "
      href={`/projects/${slug}`}
    >
      <div className="mx-3 flex gap-4 py-2 ">
        <div className="flex items-center justify-end text-center">
          <div className="my-auto text-center font-bold ">{index + 1}.</div>
        </div>

        <OptImage
          className=" bg-background relative mx-auto my-2 aspect-square h-14 w-14  overflow-hidden rounded-xl transition-all duration-200  group-hover:scale-105 "
          src={imageUrl}
          alt={name}
        />

        <div className=" flex w-full flex-col justify-center  rounded-lg ">
          <div className="flex justify-between">
            <div className="flex">
              <div className=" mr-1 line-clamp-1 text-center  text-base  font-bold text-gray-800  transition-all duration-200 group-hover:translate-x-3 dark:text-gray-100">
                {name}
              </div>
              <div className=" my-auto">
                {verified && <VerifiedSvg className="h-4 w-4" />}
              </div>
            </div>

            <div>{formatDate(mintDate)}</div>
          </div>
          <div className="flex items-end justify-between">
            <div className=" text-xs font-light">
              followers: {nFormatter(currFollower, 1)}
            </div>
            <div className=" flex items-center gap-1 text-sm font-medium text-green-500">
              <TriagleFilledSvg className="h-3 w-3 text-green-500" />{" "}
              {nFormatter(currFollower - prevFollower, 1)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MintTabCard;
