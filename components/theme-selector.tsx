"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export const ThemeSelector = () => {
	const { theme, setTheme } = useTheme();

	const handleClick = () => {
		const newTheme = theme === "light" ? "dark" : "light";

		setTheme(newTheme);
	};

	return <Button onClick={handleClick}> Change Theme </Button>;
};
