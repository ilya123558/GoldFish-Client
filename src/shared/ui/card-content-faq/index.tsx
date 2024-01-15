import { arrowBlack } from "@/app/assets/images/header"
import Image from "next/image"
import { useState } from "react"

interface IProps {
  faq: {
    question: string,
    answer: string
  }[]
}

export const CardContentFAQ: React.FC<IProps> = ({ faq }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [toggle, setToggle] = useState(false)

  const clickHandle = async (index: number) => {
    if (activeIndex === index) {
      setToggle(false)
      setActiveIndex(null)
      return
    }

    setToggle(true)
    setActiveIndex(index)
  }

  return (
    <ul className="w-full">
      {faq.map(({ question, answer }, index) => (
        <li
          key={index}
          className={"w-full p-[25px_0px] transition-all duration-300 " + (index === faq.length - 1
            ? '' : 'border-b-[2px] border-primary border-opacity-[0.12]'
          )}
        >
          <div className="w-full flex items-center justify-between pr-[16px] transition-all duration-300">
            <h4 className="text-[19px] font-bold leading-3">{question}</h4>
            <Image
              onClick={() => clickHandle(index)}
              src={arrowBlack}
              alt='arrow'
              className={`m-[1px] cursor-pointer transition-all hover:scale-[1.1] 
              ${(activeIndex === index && toggle)
                  ? 'rotate-90'
                  : 'rotate-[-90deg]'
                }`
              }
            />
          </div>
          <p className={'text-[16px] font-normal text-black ' + ((activeIndex === index && toggle) ? 'transition-all mt-[17px]' : ' leading-[0px] opacity-0 cursor-default')}>{answer}</p>
        </li>
      ))}
    </ul>
  )
}
