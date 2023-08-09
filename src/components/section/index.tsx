import { FC } from "react";
import { SectionProps } from "./types";

export const Section: FC<SectionProps> = (props) => {
  const { id, label, children } = props;

  return (
    <div id={id} className="w-full h-screen px-20 pt-16">
      {!!label && <h2 className="pb-2 text-3xl text-center"> {label} </h2>}
      {children}
    </div>
  );
};
