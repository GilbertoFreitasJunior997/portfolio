import { TECH_STACK } from "./consts";

export const Intro = () => {
  return (
    <div className="h-full pt-[10%] px-40">
      <div className="flex items-center justify-center w-full gap-2">
        <div className="flex flex-col justify-center w-2/4 gap-2">
          <p className="inline">
            Hi! I'm Gilberto, a Front-End Developer focused in React, from BR
            <img
              className="inline-flex h-4 pl-1"
              src="intro/br-flag.svg"
              alt="br flag"
            />
          </p>
          <div>
            <p>Tech Stack</p>
            <div className="flex items-center gap-2">
              {TECH_STACK.map((tech) => {
                const src = `${tech}-logo`;
                return (
                  <img
                    className="h-10 aspect-square"
                    key={tech}
                    src={`intro/${src}.svg`}
                    alt={src}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-2/4 h-full">
          <img
            className="rounded-full w-60 aspect-square"
            src="intro/pfp.jpg"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
};
