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
				parentStart="Jan 2022"
				parentEnd="Dec 2022"
				title="FATEC Garça"
				subtitle="Technologist, Systems Analysis and Development"
			>
				<TimelineListItem>
					Degree in Systems Analysis and Development, where I deepened my
					knowledge in data structures and had an introduction to Python.
				</TimelineListItem>
			</TimelineItem>
			<TimelineItem
				imageSrc="etec-logo.jpg"
				imageAlt="Etec logo"
				parentStart="jan 2020"
				parentEnd="Jun 2021"
				title="ETEC Garça"
				subtitle="Technical course, Systems Development"
			>
				<TimelineListItem>
					Technical course in the field of Systems Development. I learned
					object-oriented programming (OOP) and had an introduction to
					programming languages such as C# and Javascript.
				</TimelineListItem>
			</TimelineItem>
		</Timeline>
	</motion.div>
);
