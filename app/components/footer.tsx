import { SocialLinks } from "./social-links";

export const Footer = () => {
	return (
		<footer className="flex justify-between items-center">
			<p className="text-sm">© 2024 Gilberto Freitas</p>

			<SocialLinks />
		</footer>
	);
};
