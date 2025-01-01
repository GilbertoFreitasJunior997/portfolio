import { ThemeSelector } from "@/components/theme-selector";

export default function Home() {
	return (
		<div className="bg-background text-foreground">
			<p>Hello world!</p>

			<ThemeSelector />
		</div>
	);
}
