import { NextPage } from "next";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string,
  title?: string,
  color?: string,
  clickHandle: () => void
}

export const Button: NextPage<PropsWithChildren<IProps>> = ({ children, className, title, color, clickHandle }) => {
  return (
    <button
      onClick={clickHandle}
      className={`active:scale-100 transition-all hover:scale-105 bg-gold text-white flex items-center justify-center border-[2px] border-gold w-[163px] h-[32px] text-[14px] font-bold rounded-[9px] ${className}`}>
      {title && <p className={color}>{title}</p>}
      {children}
    </button>
  )
}