import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Timeline,
	TimelineItem,
	TimelineListItem,
} from "@/components/ui/timeline";

export const WorkEducationTab = () => {
	return (
		<section>
			<Tabs defaultValue="work" className="w-full">
				<TabsList>
					<TabsTrigger value="work">Work</TabsTrigger>
					<TabsTrigger value="education">Education</TabsTrigger>
				</TabsList>
				<TabsContent value="work">
					<Timeline>
						<TimelineItem
							imageSrc="harmonit-logo.jpeg"
							imageAlt="Company logo"
							start="Nov 2023"
							end="Oct 2024"
							title="Harmonit"
							subtitle="Frontend Engineer"
						>
							<TimelineListItem>Worked</TimelineListItem>
							<TimelineListItem>Developed</TimelineListItem>
						</TimelineItem>
						<TimelineItem
							imageSrc="frg-logo.jpeg"
							imageAlt="Company logo"
							start="Apr 2021"
							end="Nov 2023"
							title="FRG Informática"
							subtitle="Trainee Developer"
						>
							<TimelineListItem>Worked</TimelineListItem>
							<TimelineListItem>Developed</TimelineListItem>
						</TimelineItem>
					</Timeline>
				</TabsContent>

				<TabsContent value="education">
					<Timeline>
						<TimelineItem
							imageSrc="fatec-logo.jpg"
							imageAlt="Fatec logo"
							start="Nov 2023"
							end="Oct 2024"
							title="Harmonit"
							subtitle="Frontend Engineer"
						>
							<TimelineListItem>Worked</TimelineListItem>
							<TimelineListItem>Developed</TimelineListItem>
						</TimelineItem>
						<TimelineItem
							imageSrc="etec-logo.jpg"
							imageAlt="Etec logo"
							start="Apr 2021"
							end="Nov 2023"
							title="FRG Informática"
							subtitle="Trainee Developer"
						>
							<TimelineListItem>Worked</TimelineListItem>
							<TimelineListItem>Developed</TimelineListItem>
						</TimelineItem>
					</Timeline>
				</TabsContent>
			</Tabs>
		</section>
	);
};
