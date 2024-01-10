import Image from "next/image";
import Link from "next/link";

import OptImage from "@/components/ui/optimised-image";

import { formatDate } from "@/libs/utils";
import { VerifiedSvg } from "@/components/icons/svg";

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
		mintDate,
		createdAt,
		currFollower,
	} = data;

	return (
		<Link
			className="hover:bg-gray-200 rounded-lg transition-all duration-200 ease-in-out  "
			href={`/mints/${slug}`}
		>
			<div className="flex gap-4 mx-3 py-2 ">
				<div className="text-center flex items-center justify-end">
					<div className="text-center my-auto font-bold ">{index + 1}.</div>
				</div>

				<OptImage
					className=" relative w-14 h-14 aspect-square my-2 mx-auto bg-background  overflow-hidden rounded-full "
					src={imageUrl}
					alt={name}
				/>

				<div className=" flex flex-col w-full justify-center  rounded-lg transition-all duration-200 ease-in-out active:scale-95 hover:scale-[0.98]">
					<div className="flex justify-between">
						<div className="flex">
							<div className="  font-semibold opacity-90 text-base mr-1 text-center line-clamp-1">
								{name}
							</div>
							<div className=" my-auto">
								{verified && <VerifiedSvg className="h-4 w-4" />}
							</div>
						</div>
						<div>
							<div>{formatDate(mintDate)}</div>
						</div>
					</div>
					<div className="flex justify-between items-end">
						<div className=" text-xs font-light">343 </div>
						<div className=" font-medium text-base">{currFollower}</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default MintTabCard;
