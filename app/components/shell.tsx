import type { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Shell = ({ children }: PropsWithChildren) => {
	return (
		<div className="mx-auto flex min-h-screen max-w-3xl flex-col px-8 py-4 space-y-8">
			<Header />

			<section className="grow flex flex-col space-y-8">{children}</section>

			<Footer />
		</div>
	);
};
