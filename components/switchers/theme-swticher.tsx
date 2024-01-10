"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const ThemeSwitcher = () => {
	const { setTheme, theme } = useTheme();

	const themes = [
		{
			theme: "light",
			icon: SunIcon,
		},
		{
			theme: "dark",
			icon: SunIcon,
		},
		{
			theme: "system",
			icon: SunIcon,
		},
	];

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon">
					<SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{themes.map((item) => (
					<DropdownMenuItem
						disabled={theme === item.theme}
						key={item.theme}
						onClick={() => setTheme(item.theme.toString())}>
						{item.theme.charAt(0).toUpperCase() + item.theme.slice(1)}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export { ThemeSwitcher };
