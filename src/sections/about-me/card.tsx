import { FC } from "react";
import { CardProps } from "./types";

export const Card: FC<CardProps> = (props) => {
  const { title, children } = props;
  const src = `about-me/${title.toLowerCase()}.svg`;

  return (
    <div className="flex flex-col h-full col-span-1 px-10 py-8 rounded-md shadow-sm bg-gray-50">
      <div className="flex items-center gap-2 pb-2">
        <img className="inline-flex w-5 aspect-square" src={src} alt={title} />
        {title}
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};
