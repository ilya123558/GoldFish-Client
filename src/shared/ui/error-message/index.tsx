import { PropsWithChildren } from "react"

export const ErrorMessage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='absolute text-red-700 text-[13px] font-bold opacity-80 w-full flex justify-center bottom-[-18px]'>
      {children}
    </div>
  )
}