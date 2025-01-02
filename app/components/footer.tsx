import { SocialLinks } from "./social-links";

export const Footer = () => {
	return (
		<footer className="flex justify-between items-center border-t pt-4">
			<p className="text-sm">© 2024 Gilberto Freitas</p>

			<SocialLinks />
		</footer>
	);
};
