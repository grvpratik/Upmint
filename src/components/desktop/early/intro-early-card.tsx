import React from 'react'
import Image from 'next/image'
import OptImage from '@/components/ui/optimised-image';
const IntroEarlyCard = () => {
  return (
		<div className="card relative cursor-pointer flex flex-col p-8 gap-4 max-w-xs border-1 border-solid overflow-hidden ease-[cubic-bezier(0.05,0.7,0.1,1);] transition-all  hover:scale-[1.01] duration-200 rounded-3xl  lg:max-w-md min-h-[4rem]  flex-shrink-0 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
			{/*	<div className="hover:bg-gradient-to-t hover:to-50% -z-10 hover:from-gray-200/50 hover:to-transparent absolute inset-0 "></div> */}

			<div className="flex items-center gap-2">
				<OptImage
					className="h-12 w-12 rounded-xl overflow-hidden"
					src={
						"https://pbs.twimg.com/profile_images/1699992200392712192/vA21X1rr_400x400.jpg"
					}
					alt=""
				/>

				<div className=" line-clamp-1 leading-6 font-semibold text-xl  font-montserrat">
					{" "}
					The is title
				</div>
			</div>
			<div className=" line-clamp-3 text-sm font-light text-gray-500 ">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto a
				hic repellat inventore aspernatur, cupiditate eaque debitis iusto
				molestiae voluptatum reiciendis sunt itaque necessitatibus aperiam in?
				Maiores amet ratione nulla?
			</div>
			<div className="flex">
				{" "}
				<div className="flex bg-gray-300/50 backdrop-blur rounded-xl  p-1">
					<span>svg</span>
					<span>name</span>
				</div>
			</div>
		</div>
	);
}

export default IntroEarlyCard