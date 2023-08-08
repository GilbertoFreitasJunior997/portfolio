import { FC } from "react";
import { SectionProps } from "./types";

export const Section: FC<SectionProps> = (props) => {
  const { id, children } = props;

  return (
    <div id={id} className="w-full h-screen">
      {children}
    </div>
  );
};
