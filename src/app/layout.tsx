import "@/styles/globals.css";
import QueryProvider from "@/providers/query-provider";
import { montserrat, outfit, inter } from "@/libs/font";
import { cn } from "@/libs/utils";
import { ThemeProvider } from "@/providers/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "no-scrollbar bg-cbackground text-cletter antialiased",
          montserrat.variable,
          outfit.variable,
          inter.variable,
        )}
      >
        {" "}
        <ThemeProvider>
          <QueryProvider>{children}</QueryProvider>{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
