"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { ProjectCard } from "./project-card";

export const Projects = () => {
	const [showAll, setShowAll] = useState(false);

	return (
		<section>
			<h4 className="text-4xl font-bold pb-4">Projects</h4>

			<ul className={cn("grid grid-cols-2 gap-4")}>
				<ProjectCard
					title="Money Map"
					description="Comprehensive finance tracker with transaction history, category management, account tracking, and a detailed dashboard for all essential insights."
					image="moneymap-display.png"
					source="https://github.com/GilbertoFreitasJunior997/money-map"
					website="https://money-map-gray.vercel.app/"
					skills={[
						"NextJS",
						"NodeJS",
						"PostgreSQL",
						"TailwindCSS",
						"DrizzleORM",
						"Supabase",
						"Typescript",
					]}
				/>

				<ProjectCard
					title="SaaS Template"
					description="A modern Next.js SaaS template featuring authentication, responsive design, ORM setup and customizable components to kickstart your next project."
					image="saas-template-display.png"
					source="https://github.com/GilbertoFreitasJunior997/nextjs-template"
					skills={[
						"NextJS",
						"NodeJS",
						"OAuth",
						"LuciaAuth",
						"TailwindCSS",
						"DrizzleORM",
						"Typescript",
					]}
				/>
			</ul>
		</section>
	);
};
