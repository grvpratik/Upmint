import Link from 'next/link';

import React from 'react'
import { LatestIconSvg, PostSvg, TrendingIconSvg } from '../icons/svg';
import Button from '../ui/Button';

const NavMobLinks = () => {
  return (
		<div className="flex flex-col gap-1  w-full p-2 px-8  pb-2 ">
			{" "}
			<Link
				className="flex items-center font-semibold p-2 gap-2 rounded-lg text-left text-lg"
				href={""}
			>
				{" "}
				<span>
					<TrendingIconSvg className="h-6 w-6" />
				</span>
				<span>Trending</span>
			</Link>
			<Link
				className="flex items-center font-semibold p-2 gap-2 rounded-lg text-left text-lg"
				href={""}
			>
				<span>
					<LatestIconSvg className="h-6 w-6" />
				</span>
				<span>Latest</span>
			</Link>
			<Link
				className="flex items-center font-semibold p-2 gap-2 rounded-lg text-left text-lg"
				href={""}
			>
				<span>
					<PostSvg className="h-6 w-6" />
				</span>
				<span>Posts</span>
			</Link>
			<Button.Primary className='p-2 rounded-lg'>button</Button.Primary>
		</div>
	);
}

export default NavMobLinks