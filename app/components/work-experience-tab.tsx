import {
	Timeline,
	TimelineItem,
	TimelineListItem,
} from "@/components/ui/timeline";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const WorkExperienceTab = () => (
	<motion.div variants={containerVariants} initial="hidden" animate="visible">
		<Timeline>
			<TimelineItem
				imageSrc="harmonit-logo.jpeg"
				imageAlt="Company logo"
				parentStart="Nov 2023"
				parentEnd="Oct 2024"
				start="Nov 2023"
				end="Oct 2024"
				title="Harmonit"
				subtitle="Software Engineer"
			>
				<TimelineListItem>
					Implemented new features and optimizations on a ERP system, resulting
					in a decrease on page load times, enhancing user experience and
					overall system efficiency.
				</TimelineListItem>
				<TimelineListItem>
					Enhanced user interface performance through the implementation of
					React, TypeScript, TailwindCSS, and various UI tools, resulting in
					improved user satisfaction and engagement.
				</TimelineListItem>
				<TimelineListItem>
					Created a CI/CD pipeline, reducing deployment time by 70%, leading to
					faster feature delivery and increased productivity.
				</TimelineListItem>
				<TimelineListItem>
					Delivered features by collaborating with 20+ developers in a
					fast-paced environment, ensuring seamless communication across teams.
				</TimelineListItem>
				<TimelineListItem>
					Mentored and guided 6 new developers, resulting in an improvement in
					code quality, leading to a more efficient and seamless project
					delivery process.
				</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				imageSrc="frg-logo.jpeg"
				imageAlt="Company logo"
				parentStart="Apr 2021"
				parentEnd="Nov 2023"
				start="Jun 2022"
				end="Nov 2023"
				title="FRG Informática"
				subtitle="Software Engineer"
			>
				<TimelineListItem>
					Developed a scalable web ERP application for over 10,000 users using
					React and TypeScript, leading to a seamless user experience and
					improved operational efficiency.
				</TimelineListItem>
				<TimelineListItem>
					Streamlined software loading process, achieving improvement through
					packaging enhancements and the creation of a multi-modular
					microfrontend system with Single- SPA, resulting in enhanced
					application performance and user satisfaction.
				</TimelineListItem>
				<TimelineListItem>
					Facilitated seamless project updates within 6 months by implementing a
					CI/CD pipeline, resulting in automatic deployments on AWS S3 and
					improved caching on AWS CloudFront.
				</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				start="Apr 2021"
				end="Jun 2022"
				subtitle="Trainee Developer"
			>
				<TimelineListItem>
					Mastered over 40 development courses within 8 months, excelling in web
					programming with HTML, CSS, JavaScript, and REST APIs, establishing a
					strong foundation for software development.
				</TimelineListItem>
			</TimelineItem>
		</Timeline>
	</motion.div>
);
