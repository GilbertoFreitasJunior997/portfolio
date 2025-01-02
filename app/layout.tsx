import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";
import { SEO, SEOConfig } from "./components/seo";
import { Shell } from "./components/shell";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: SEOConfig.siteName,
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<SEO />

			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider attribute="class">
					<Shell>{children}</Shell>
				</ThemeProvider>
			</body>
		</html>
	);
}
