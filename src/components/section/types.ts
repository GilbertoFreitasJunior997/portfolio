import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren & {
  id: string;
  label?: string;
};
