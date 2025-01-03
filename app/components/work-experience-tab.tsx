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
					Implemented new features and optimizations to the ERP system,
					resulting in a 60% decrease in page load times, enhancing user
					experience and overall system efficiency.
				</TimelineListItem>
				<TimelineListItem>
					Enhanced user interface performance by 40% through the implementation
					of React, TypeScript, TailwindCSS, and various UI tools, resulting in
					improved user satisfaction and engagement.
				</TimelineListItem>
				<TimelineListItem>
					Improved the Bitbucket CI/CD pipeline, reducing deployment time by
					90%, leading to faster feature delivery and increased productivity.
				</TimelineListItem>
				<TimelineListItem>
					Apply agile methodologies to plan and manage sprints, ensuring all
					tasks are completed efficiently and aligned with project objectives.
				</TimelineListItem>
				<TimelineListItem>
					Mentored and guided a team of 4 developers, resulting in a improvement
					in code quality, leading to a more efficient and seamless project
					delivery process.
				</TimelineListItem>
				<TimelineListItem>
					Work closely with other teams, including BackEnd and DevOps, to ensure
					seamless integration and full functionality of developed solutions.
				</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				imageSrc="frg-logo.jpeg"
				imageAlt="Company logo"
				parentStart="Apr 2021"
				parentEnd="Nov 2023"
				start="Jun 2021"
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
					Guided a group of 6 FrontEnd React engineers, integrating 3 new
					interns and enforcing agile methodologies, leading to a boost in team
					collaboration and successful sprint completion.
				</TimelineListItem>
				<TimelineListItem>
					Streamlined software loading process, achieving a 60% improvement
					through packaging enhancements and the creation of a multi-modular
					microfrontend system with Single-SPA, resulting in enhanced
					application performance and user satisfaction.
				</TimelineListItem>
				<TimelineListItem>
					Established a CI/CD pipeline for automatic project deployment on AWS
					S3 and file caching on AWS CloudFront.
				</TimelineListItem>
				<TimelineListItem>
					Configured and managed all team tasks daily using ClickUp,
					collaborating with the BackEnd team to integrate the software with a
					RESTful API.
				</TimelineListItem>
			</TimelineItem>

			<TimelineItem
				start="Apr 2021"
				end="Jun 2022"
				subtitle="Trainee Developer"
			>
				<TimelineListItem>
					Mastered over 40 development courses, excelling in web programming
					with HTML, CSS, JavaScript, and REST APIs, establishing a strong
					foundation for software development.
				</TimelineListItem>
				<TimelineListItem>
					Managed tasks in kanban methods using Redmine and Trello, utilizing
					Git for version control to maintain a legacy product.
				</TimelineListItem>
				<TimelineListItem>
					Collaborated with team members to troubleshoot and debug code,
					ensuring seamless functionality of software applications.
				</TimelineListItem>
			</TimelineItem>
		</Timeline>
	</motion.div>
);
