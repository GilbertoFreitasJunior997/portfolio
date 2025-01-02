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
				start="Nov 2023"
				end="Oct 2024"
				title="Harmonit"
				subtitle="Software Engineer"
			>
				<TimelineListItem>
					Developed the Java backend for a bank account servicing process with
					multiple channel integrations using Activiti workflow
				</TimelineListItem>
				<TimelineListItem>
					Built a custom database migration tool using Python and MariaDB and
					facilitated the migration of 1000+ processes from a vendor platform
				</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				imageSrc="frg-logo.jpeg"
				imageAlt="Company logo"
				start="Apr 2021"
				end="Nov 2023"
				title="FRG Informática"
				subtitle="Software Engineer"
			>
				<TimelineListItem>
					Established a CI/CD pipeline for automatic project deployment on AWS
					S3 and file caching on AWS CloudFront.
				</TimelineListItem>
				<TimelineListItem>
					Developed a scalable web ERP application for over 10,000 users using
					React and TypeScript, leading to a seamless user experience and
					improved operational efficiency.
				</TimelineListItem>
				<TimelineListItem>
					Boosted codebase maintainability by implementing reusable components
					with StyledComponents and TailwindCSS, reducing duplicate code and
					streamlining future development efforts for the team.
				</TimelineListItem>
				<TimelineListItem>
					Created multiple screens from designs in Figma and published them on
					GitLab, using well-structured and semantic commits.
				</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				start="Apr 2021"
				end="Jun 2022"
				subtitle="Trainee Developer"
			>
				<TimelineListItem>
					Mastered over 40 development courses, excelling in web programming
					with HTML, CSS, JavaScript, and REST APIs, leading to a strong
					foundation for software development.
				</TimelineListItem>
				<TimelineListItem>
					Maintained a legacy product, receiving tasks in kanban methods,
					initially on Redmine and later on Trello, using Git for version
					control.
				</TimelineListItem>
			</TimelineItem>
		</Timeline>
	</motion.div>
);
