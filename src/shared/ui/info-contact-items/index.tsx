import Image from "next/image"
import { contactlist } from "./const"


export const InfoContactItems = () => {
  return (
    <ul>
      {contactlist.map(({ imgSrc, text, title }) => (
        <li key={title} className="flex items-center mb-[15px]">
          <Image alt="contactImg" src={imgSrc} width={100} height={100} className="w-[26px] h-[26px] mr-[22px]" />
          <p className="text-[17px] font-normal leading-5">
            <span className="text-[19px] font-bold">{title}:</span>
            {text}
          </p>
        </li>
      ))}
    </ul>
  )
}