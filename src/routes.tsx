import { ReactElement } from "react";
import { Intro } from "./sections/intro";
import { AboutMe } from "./sections/about-me";
import { Skills } from "./sections/skills";
import { Projects } from "./sections/projects";
import { Contact } from "./sections/contact";

export type Route = {
  id: string;
  label: string;
  component: ReactElement;
  hideLabel?: boolean;
};

export const ROUTES: Route[] = [
  {
    id: "intro",
    component: <Intro />,
    label: "Introduction",
    hideLabel: true,
  },
  {
    id: "aboutme",
    component: <AboutMe />,
    label: "About me",
  },
  {
    id: "skills",
    component: <Skills />,
    label: "Skills",
  },
  {
    id: "projects",
    component: <Projects />,
    label: "Projects",
  },
  {
    id: "contact",
    component: <Contact />,
    label: "Contact",
  },
];
