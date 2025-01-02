import { Button } from "@/components/ui/button";
import {
	GithubIcon,
	LinkedinIcon,
	type LucideIcon,
	MailIcon,
} from "lucide-react";

type SocialLinkProps = {
	icon: LucideIcon;
	href: string;
};

const SocialLink = ({ icon: Icon, href }: SocialLinkProps) => (
	<li className="grid place-content-center size-[18px] cursor-pointer">
		<Button variant="ghost" size="icon" className="rounded-full" asChild={true}>
			<a href={href} target="_blank" rel="noopener noreferrer">
				<Icon className="size-full" />
			</a>
		</Button>
	</li>
);

export const SocialLinks = () => {
	return (
		<ul className="flex gap-4 items-center w-fit">
			<SocialLink
				icon={GithubIcon}
				href="https://github.com/GilbertoFreitasJunior997"
			/>
			<SocialLink
				icon={LinkedinIcon}
				href="https://www.linkedin.com/in/gilberto-freitas-junior/"
			/>
			<SocialLink
				icon={MailIcon}
				href="mailto:gilbertofreitasjunior997@gmail.com"
			/>
		</ul>
	);
};
