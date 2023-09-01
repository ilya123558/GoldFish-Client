import { NextPage } from "next"

interface IProps {
  title: string,
  value: string,
  changeHandle: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  placeholder: string
  className?: string,
}

export const Textarea: NextPage<IProps> = ({ title, value, changeHandle, className, placeholder }) => {
  return (
    <div className={`w-full ${className}`}>
      <p className="text-[16px] font-normal mb-[7px]">{title}</p>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeHandle(e)}
        className="p-[14px_19px] resize-none focus:outline-none w-full h-[88px] pl-[19px] border-primary border-[1px] rounded-[9px] placeholder:opacity-[0.33] border-opacity-[0.33]"
      />
    </div>
  )
}