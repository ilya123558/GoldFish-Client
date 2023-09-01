import { NextPage } from "next";
import { PropsWithChildren } from "react";

export const Container: NextPage<PropsWithChildren<{className?: string}>> = ({ children, className }) => {
  return (
    <div className={`p-[5px] max-w-[1100px] m-[0px_auto] text-primary ${className}`}>
      {children}
    </div>
  );
};