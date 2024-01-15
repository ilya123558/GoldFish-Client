import { NextPage } from "next"
import { FieldValues, UseFormRegister } from "react-hook-form"

interface IProps {
  title: string,
  value?: string,
  changeHandle?: (event: React.ChangeEvent<HTMLInputElement>) => void,
  placeholder: string
  className?: string,
  type?: React.HTMLInputTypeAttribute,
  register?: UseFormRegister<FieldValues>,
  registerOptions?: any
}

export const Input: NextPage<IProps> = ({ title, value, changeHandle, className, placeholder, type, register, registerOptions,...props }) => {
  return (
    <div className={`w-full ${className}`}>
      <p className="text-[16px] font-normal mb-[7px]">{title}</p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeHandle?.(e)}
        className="focus:outline-none w-full h-[44px] flex items-center pl-[19px] border-primary border-[1px] rounded-[9px] placeholder:opacity-[0.33] border-opacity-[0.33]"
        {...register?.(placeholder, {
          required: 'Это поле обязательное',
          ...registerOptions
        })}
        {...props}
      />
    </div>
  )
}