import { Inter,Outfit } from "next/font/google";
import "@/styles/globals.css";
import QueryProvider from "@/providers/query-provider";

const inter = Outfit({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
