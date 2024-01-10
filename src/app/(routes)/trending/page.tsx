import OptImage from '@/components/ui/optimised-image'
import React from 'react'

const TrendingPage = () => {
  return (
		<div className="w-full relative  rounded-b-xl overflow-hidden ">
			{" "}
			<OptImage
				className="  w-full max-w-screen max-h-[30rem]    aspect-[16/8]"
				src={
					"https://pbs.twimg.com/profile_banners/1700921224673538048/1703362204/1500x500"
				}
				alt={""}
			/>
		</div>
	);
}

export default TrendingPage