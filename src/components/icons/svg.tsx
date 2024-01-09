import React, { SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
	className?: string;
}

export const SearchGlassSvg: React.FC<IconProps> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
			/>
		</svg>
	);
};

export const HalfArrowDownSvg: React.FC<IconProps> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};
export const LatestIconSvg: React.FC<IconProps> = (props) => {
	return (
		<svg
			{...props}
			viewBox="0 0 76 76"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			version="1.1"
			baseProfile="full"
			enableBackground="new 0 0 76.00 76.00"
			xmlSpace="preserve"
			fill="#000000"
		>
			<g id="SVGRepo_bgCarrier" strokeWidth={0} />
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g id="SVGRepo_iconCarrier">
				{" "}
				<path
					fill="#000000"
					fillOpacity={1}
					strokeWidth="0.2"
					strokeLinejoin="round"
					d="M 44.4832,15.8147L 38.0245,32.9939L 37.8017,32.9939L 31.6771,15.8147L 21.7662,21.578L 33.4588,35.6539L 33.4588,35.8755L 16.087,32.3289L 16.087,43.523L 33.5702,40.4197L 33.6815,40.6414L 21.7662,54.4955L 31.343,60.148L 37.6904,43.0797L 37.9131,43.0797L 44.3718,60.148L 54.1713,54.4955L 42.1447,40.7522L 42.1447,40.5305L 60.0713,43.523L 60.0713,32.3289L 42.256,35.8755L 42.256,35.6539L 54.1713,21.4672L 44.4832,15.8147 Z "
				/>{" "}
			</g>
		</svg>
	);
};

export const TrendingIconSvg: React.FC<IconProps> = (props) => {
	return (
		<svg
			fill="#000"
			width="64px"
			height="64px"
			viewBox="0 0 256 256"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M244.002 56.005V120a12 12 0 01-24 0V84.97l-75.514 75.515a12 12 0 01-16.97 0l-31.516-31.514-63.514 63.514a12 12 0 01-16.97-16.97l72-72a12 12 0 0116.97 0l31.514 31.514L203.032 68h-35.03a12 12 0 010-24h63.996c.397 0 .795.02 1.191.06.167.016.33.048.494.071.223.032.446.058.667.102.192.038.378.091.567.138.19.048.383.09.573.148.185.056.364.126.545.19.188.067.378.13.563.206.169.07.33.153.494.23.191.09.384.174.57.274.156.084.303.179.455.269.185.11.372.215.552.335.164.11.319.234.478.352.155.115.313.223.464.347.284.234.556.481.818.74.019.018.04.034.059.053s.034.04.053.059c.259.262.507.534.74.819.12.146.225.3.337.45.122.163.248.322.361.492.12.177.222.36.33.542.092.155.19.306.274.464.1.184.183.374.271.562.079.167.162.331.233.503.076.183.138.37.204.556.066.183.136.364.193.551.057.189.099.38.146.57.048.19.1.376.14.57.043.22.07.443.101.665.024.166.055.328.071.496q.06.594.06 1.191z" />
		</svg>
	);
};
export const PostSvg: React.FC<IconProps> = (props) => {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g
				clipPath="url(#a)"
				stroke="#292929"
				strokeWidth={2.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M3 4v14a2 2 0 002 2h14a2 2 0 002-2V8h-4" />
				<path d="M3 4h14v14a2 2 0 002 2v0M13 8H7M13 12H9" />
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M0 0H24V24H0z" />
				</clipPath>
			</defs>
		</svg>
	);
};

export const ChevronLeftSvg: React.FC<IconProps> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M15.75 19.5 8.25 12l7.5-7.5"
			/>
		</svg>
	);
};


export const ChevronRightSvg: React.FC<IconProps> = (props) => {
	return (
	<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 24 24"
	strokeWidth={1.5}
	stroke="currentColor"
	{...props}
>
	<path
		strokeLinecap="round"
		strokeLinejoin="round"
		d="m8.25 4.5 7.5 7.5-7.5 7.5"
	/>
</svg>
	);
};

