import { NextPage } from "next";
import { PropsWithChildren } from "react";

interface IProps {
  className?: string,
  title?: string,
  color?: string,
  clickHandle: () => void
  disabled?: boolean
  type?: "button" | "submit" | "reset"
}


export const Button: NextPage<PropsWithChildren<IProps>> = ({ children, className, title, color, clickHandle, disabled, type }) => {

  return (
    <button
      type={type || 'submit'}
      disabled={disabled}
      onClick={(event) => {
        event.stopPropagation()
        clickHandle()
      }}
      className={`${disabled ? 'opacity-60' : 'active:scale-100 hover:scale-105'} text-white transition-all bg-gold flex items-center justify-center border-[2px] border-gold w-[163px] h-[32px] text-[14px] font-bold rounded-[9px] ${className}`}>
      {title && <p className={color}>{title}</p>}
      {children}
    </button>
  )
}