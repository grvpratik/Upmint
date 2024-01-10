


import "@/styles/globals.css";
import QueryProvider from "@/providers/query-provider";
import { montserrat, outfit, inter } from "@/libs/font";
import { cn } from "@/libs/utils";



export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={cn("antialiased", montserrat.variable, outfit.variable, inter.variable)}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
