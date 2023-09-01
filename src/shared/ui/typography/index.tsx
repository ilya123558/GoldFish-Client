import { NextPage } from "next"
import { PropsWithChildren } from "react"

export const Typography: NextPage<PropsWithChildren<{className?: string}>> = ({ children, className }) => {
  return <h2 className={"text-[#545454] font-bold text-[32px] leading-8 " + className}>{children}</h2>
}