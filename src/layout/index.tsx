import { FC, PropsWithChildren } from "react";
import { Topbar } from "./topbar";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="font-['Rubik'] bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
      <Topbar />
      {children}
    </div>
  );
};
