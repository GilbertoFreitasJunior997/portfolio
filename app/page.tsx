import { Projects } from "./components/projects";
import { WorkEducationTab } from "./components/work-education-tab";

export default function Home() {
	return (
		<>
			<WorkEducationTab />
			<Projects />
		</>
	);
}
