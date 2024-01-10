import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { StackedLayout } from "@/components/layouts/stacked-layout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import "../globals.css";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Jiranop x Like Soft | Assignment",
	description: "This project is for assignment of Like Soft (Edispro active)",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<head />
			<body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<StackedLayout>
						<main>{children}</main>
					</StackedLayout>

					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
