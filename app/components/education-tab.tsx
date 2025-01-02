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

export const EducationTab = () => (
	<motion.div variants={containerVariants} initial="hidden" animate="visible">
		<Timeline>
			<TimelineItem
				imageSrc="fatec-logo.jpg"
				imageAlt="Fatec logo"
				start="Jun 2022"
				end="Nov 2023"
				title="FRG Informática"
				subtitle="Frontend Engineer"
			>
				<TimelineListItem>Worked</TimelineListItem>
				<TimelineListItem>Developed</TimelineListItem>
			</TimelineItem>
			<TimelineItem
				imageSrc="etec-logo.jpg"
				imageAlt="Etec logo"
				start="Apr 2021"
				end="Jun 2022"
				title="FRG Informática"
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
