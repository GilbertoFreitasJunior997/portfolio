import { FileDownIcon, MapPinIcon } from "lucide-react";
import { SocialLinks } from "./social-links";

export const Header = () => {
	return (
		<section className="text-muted-foreground text-lg">
			<h2 className="text-3xl text-foreground font-bold mb-px">
				Gilberto Freitas
			</h2>

			<h3 className="text-muted-foreground">Software Engineer</h3>
			<h3 className="flex gap-1 items-center text-sm font-semibold">
				<MapPinIcon className="size-4" /> São Paulo, Brazil
			</h3>

			<section className="flex gap-2 mt-4">
				<a
					href="gilberto-freitas-resume.pdf"
					download={true}
					className="border-2 border-border flex w-fit px-2 text-sm font-bold rounded-md items-center justify-center gap-1"
				>
					Resume <FileDownIcon className="size-4" />
				</a>

				<SocialLinks />
			</section>
		</section>
	);
};
