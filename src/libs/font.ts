import { Outfit, Inter, Montserrat } from "next/font/google";

export const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-montserrat",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const outfit = Outfit({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-outfit",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});