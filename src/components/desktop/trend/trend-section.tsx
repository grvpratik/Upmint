import React from "react";
import MintTabCard from "./trend-card";
import Button from "@/components/ui/Button";
import MarginX from "@/components/margin-container";
import Link from "next/link";

const trendingData: any = [
	{
		_id: "658ecada5de82f96b33fb1ee",
		slug: "thewolf_gang_",
		name: "WolfGang",
		description: "“A pack of mischievous wolves coming to @injective_ 🐺”",
		blockchain: " ",
		imageUrl:
			"https://pbs.twimg.com/profile_images/1736767449352089601/m2hcuwps.jpg",
		bannerUrl:
			"https://pbs.twimg.com/profile_banners/1679518057453047815/1702912639/1500x500",
		rating: 5,
		whitelist: false,
		featured: false,
		verified: false,
		prevFollower: 2356,
		currFollower: 2492,
		accountCreated: "2023-12-29T13:34:06.469Z",
		mintInfo: {
			supply: 1111,
			startTime: "",
			mintDate: "2023-12-29T18:30:00.000Z",
			_id: "658ecada5de82f96b33fb1ef",
		},
		social: {
			x: " ",
			website: "https://discord.gg/48ewGffFxR",
			_id: "658ecada5de82f96b33fb1f0",
		},
		tags: ["nft"],
		createdAt: "2023-12-29T13:34:18.636Z",
		updatedAt: "2024-01-02T07:16:50.848Z",
		__v: 0,
	},
	{
		_id: "658ecada5de82f96b33fb1e8",
		slug: "dawtnft",
		name: "DAWT",
		description:
			"An elite community on Sol for Sol… check some art here: dawt.framer.website/",
		blockchain: "ethereum",
		imageUrl:
			"https://pbs.twimg.com/profile_images/1662484002685558788/f1K1TJPx.jpg",
		bannerUrl:
			"https://pbs.twimg.com/profile_banners/1648722325120876549/1703459042/1500x500",
		rating: 5,
		whitelist: false,
		featured: false,
		verified: false,
		prevFollower: 9633,
		currFollower: 9714,
		accountCreated: "2023-12-29T13:34:03.930Z",
		mintInfo: {
			supply: 0,
			startTime: "",
			mintDate: null,
			_id: "658ecada5de82f96b33fb1e9",
		},
		social: {
			x: "https://twitter.com/dawtnft",
			website: "https://discord.gg/dawt",
			_id: "658ecada5de82f96b33fb1ea",
		},
		tags: ["nft", "free"],
		createdAt: "2023-12-29T13:34:18.636Z",
		updatedAt: "2024-01-02T07:16:50.850Z",
		__v: 0,
	},
	{
		_id: "658ecada5de82f96b33fb1eb",
		slug: "manifestors_nft",
		name: "Manifestors",
		description: "Empowering Individuals, Transforming Futures.",
		blockchain: "",
		imageUrl:
			"https://pbs.twimg.com/profile_images/1709174550137638912/1Hx2X47j.jpg",
		bannerUrl:
			"https://pbs.twimg.com/profile_banners/1593708407210622976/1696164085/1500x500",
		rating: 5,
		whitelist: false,
		featured: false,
		verified: false,
		prevFollower: 4402,
		currFollower: 4418,
		accountCreated: "2023-12-29T13:34:04.967Z",
		mintInfo: {
			supply: 0,
			startTime: "",
			mintDate: null,
			_id: "658ecada5de82f96b33fb1ec",
		},
		social: {
			x: "https://twitter.com/manifestors_nft",
			website: "https://linktr.ee/Manifestors",
			_id: "658ecada5de82f96b33fb1ed",
		},
		tags: ["nft"],
		createdAt: "2023-12-29T13:34:18.636Z",
		updatedAt: "2024-01-02T07:16:50.850Z",
		__v: 0,
	},
	{
		_id: "658ecada5de82f96b33fb1f7",
		slug: "injcriminal",
		name: "INJ CRIMINALS - Free Mint",
		description:
			"GOOD CRIMINALS \n\nPowred By : @Injective_ $INJ\n\nDiscord: discord.gg/HshWm6WqmC\nAtlas3:   atlas3.io/project/inj-crimin…\n\n#injective #freemint",
		blockchain: "",
		imageUrl:
			"https://pbs.twimg.com/profile_images/1734316659639259136/ugfaZ4BD.jpg",
		bannerUrl:
			"https://pbs.twimg.com/profile_banners/1709308566387974144/1702328291/1500x500",
		rating: 5,
		whitelist: false,
		featured: false,
		verified: false,
		prevFollower: 2913,
		currFollower: 3029,
		accountCreated: "2023-12-29T13:34:10.941Z",
		mintInfo: {
			supply: 0,
			startTime: "",
			mintDate: null,
			_id: "658ecada5de82f96b33fb1f8",
		},
		social: {
			x: "https://twitter.com/injcriminal",
			website: "https://medium.com/@injcriminal/inj-criminal-285434acd40d",
			_id: "658ecada5de82f96b33fb1f9",
		},
		tags: ["nft"],
		createdAt: "2023-12-29T13:34:18.636Z",
		updatedAt: "2024-01-02T07:16:50.850Z",
		__v: 0,
	},
	{
		_id: "658ecada5de82f96b33fb1fd",
		slug: "pyroinsol",
		name: "Pyro | Free mint",
		description: "🔥🔥 We are getting $hotter 🔥🔥",
		blockchain: "",
		imageUrl:
			"https://pbs.twimg.com/profile_images/1733623404022874112/ebVmxIXS.jpg",
		bannerUrl:
			"https://pbs.twimg.com/profile_banners/1732754284888907776/1702163004/1500x500",
		rating: 5,
		whitelist: false,
		featured: false,
		verified: false,
		prevFollower: 5475,
		currFollower: 5418,
		accountCreated: "2023-12-29T13:34:14.211Z",
		mintInfo: {
			supply: 0,
			startTime: "",
			mintDate: null,
			_id: "658ecada5de82f96b33fb1fe",
		},
		social: {
			x: "https://twitter.com/pyroinsol",
			website: "https://discord.gg/uK6UGnEA8V",
			_id: "658ecada5de82f96b33fb1ff",
		},
		tags: ["nft"],
		createdAt: "2023-12-29T13:34:18.637Z",
		updatedAt: "2024-01-02T07:16:50.850Z",
		__v: 0,
	},
	{
		_id: "658ecada5de82f96b33fb1fa",
		slug: "bonessolananft",
		name: "BONES",
		description:
			"Redefining deaths embrace, Skulls standing unfazed.\n\n5,000 bones Launching on @TaiyoRobotics",
		blockchain: "",
		imageUrl:
			"https://pbs.twimg.com/profile_images/1734261370160586753/zIC_tPHy.jpg",
		bannerUrl:
			"https://pbs.twimg.com/profile_banners/1724116012205809664/1701705906/1500x500",
		rating: 5,
		whitelist: false,
		featured: false,
		verified: false,
		prevFollower: 11440,
		currFollower: 11692,
		accountCreated: "2023-12-29T13:34:12.509Z",
		mintInfo: {
			supply: 0,
			startTime: "",
			mintDate: null,
			_id: "658ecada5de82f96b33fb1fb",
		},
		social: {
			x: "https://twitter.com/bonessolananft",
			website: "https://discord.gg/bonesSol",
			_id: "658ecada5de82f96b33fb1fc",
		},
		tags: ["nft"],
		createdAt: "2023-12-29T13:34:18.636Z",
		updatedAt: "2024-01-02T07:16:50.850Z",
		__v: 0,
	},
	{
		_id: "658ecada5de82f96b33fb200",
		slug: "injectivemobs",
		name: "injective Mobs - Sold Out",
		description:
			"we have coming to space for change meta #INJ #injmobs \n\nDiscord : discord.gg/injmobs\n#freemint #injective",
		blockchain: "solana",
		imageUrl:
			"https://pbs.twimg.com/profile_images/1737472410775957504/84AneXpD.jpg",
		bannerUrl:
			"https://pbs.twimg.com/profile_banners/1700921224673538048/1703362204/1500x500",
		rating: 5,
		whitelist: false,
		featured: false,
		verified: false,
		prevFollower: 4615,
		currFollower: 4624,
		accountCreated: "2023-12-29T13:34:15.876Z",
		mintInfo: {
			supply: 0,
			startTime: "",
			mintDate: null,
			_id: "658ecada5de82f96b33fb201",
		},
		social: {
			x: "https://twitter.com/injectivemobs",
			website: "https://www.injectivemobs.xyz/",
			_id: "658ecada5de82f96b33fb202",
		},
		tags: ["nft"],
		createdAt: "2023-12-29T13:34:18.637Z",
		updatedAt: "2024-01-02T07:16:50.850Z",
		__v: 0,
	},
	{
		_id: "658ecada5de82f96b33fb206",
		slug: "injectivebilder",
		name: "Injective BILDER | MINT 3 JANUARY",
		description: "#INJ Born of Vision, Built Bold 🚀 Discord on the link 👇",
		blockchain: "",
		imageUrl:
			"https://pbs.twimg.com/profile_images/1733253739648020480/J90C_Opl.jpg",
		bannerUrl:
			"https://pbs.twimg.com/profile_banners/1718611926706528256/1702110658/1500x500",
		rating: 5,
		whitelist: false,
		featured: false,
		verified: false,
		prevFollower: 9543,
		currFollower: 9543,
		accountCreated: "2023-12-29T13:34:18.528Z",
		mintInfo: {
			supply: 0,
			startTime: "",
			mintDate: null,
			_id: "658ecada5de82f96b33fb207",
		},
		social: {
			x: "https://twitter.com/injectivebilder",
			website: "https://linktr.ee/InjectiveBilder",
			_id: "658ecada5de82f96b33fb208",
		},
		tags: ["nft"],
		createdAt: "2023-12-29T13:34:18.637Z",
		updatedAt: "2023-12-29T13:34:18.637Z",
		__v: 0,
	},
	{
		_id: "658ecada5de82f96b33fb203",
		slug: "mysticmen_",
		name: "Mystic Men - Free Mint",
		description:
			"FREE MINT - Solana\n\nCollabs live on Atlas & Subber\n\nmysticmen.io/\n\nVITRIOL 👁",
		blockchain: "",
		imageUrl:
			"https://pbs.twimg.com/profile_images/1734385369255145472/tgGRERbV.jpg",
		bannerUrl:
			"https://pbs.twimg.com/profile_banners/1518977087427784705/1702343441/1500x500",
		rating: 5,
		whitelist: false,
		featured: false,
		verified: false,
		prevFollower: 59453,
		currFollower: 59622,
		accountCreated: "2023-12-29T13:34:17.180Z",
		mintInfo: {
			supply: 0,
			startTime: "",
			mintDate: null,
			_id: "658ecada5de82f96b33fb204",
		},
		social: {
			x: "https://twitter.com/mysticmen_",
			website: "https://discord.gg/mysticmen",
			_id: "658ecada5de82f96b33fb205",
		},
		tags: ["nft"],
		createdAt: "2023-12-29T13:34:18.637Z",
		updatedAt: "2024-01-02T07:16:50.850Z",
		__v: 0,
	},
	
];

const IntroTrendSection = () => {
	return (
		<section className="flex flex-col my-4">
			<MarginX>
				<div className="w-full justify-between items-center flex py-4">
					<div className="  font-semibold text-xl md:text-2xl lg:text-3xl  font-montserrat ">
						Trending Projects
					</div>
					<Link href={'/trending'}><Button.Secondary className=" rounded-xl">view all</Button.Secondary></Link>
				</div>
				<div className="grid my-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5">
					{/* Render MintTabCard components based on earlyData */}
					{trendingData.length > 0 ? (
						trendingData.map((data: any, index: number) => (
							<MintTabCard data={data} key={data._id} index={index} />
						))
					) : (
						<div className="w-full h-[30rem] flex justify-center items-center">
							Server Error
						</div>
					)}
				</div>
			</MarginX>
		</section>
	);
};

export default IntroTrendSection;
