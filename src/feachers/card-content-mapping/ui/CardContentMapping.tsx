import { useState } from "react"
import { CardContentDescription } from "@/shared/ui/card-content-description";
import { CardContentCharacteristics } from "@/shared/ui/card-content-characteristics";
import { CardContentRules } from "@/shared/ui/card-content-rules";
import { CardContentFAQ } from "@/shared/ui/card-content-faq";

import { navList } from "../const"
import { ICard } from "@/entities/card"

export const CardContentMapping: React.FC<ICard> = (card) => {
  const [activeIndex, setActiveIndex] = useState(3)

  return (
    <div className="w-full min-h-[100px] mt-[75px]">
      <ul className="flex items-center justify-between w-full font-bold text-[22px] leading-6 border-b-[2px] border-primary border-opacity-[0.12]">
        {navList.map((title, index) => (
          <li
            key={index} onClick={() => setActiveIndex(index)}
            className={'pb-[5px] cursor-pointer transition-all duration-300 ' + (activeIndex === index ? 'border-b-[3px] border-primary ' : 'border-b-[3px] border-transparent')}
          >
            {title}
          </li>
        ))}
      </ul>
      {navList[activeIndex] === 'Описание' && <CardContentDescription description={card.description} />}
      {navList[activeIndex] === 'Характеристики' && <CardContentCharacteristics characteristics={card.characteristics} />}
      {navList[activeIndex] === 'Правила' && <CardContentRules rules={card.rules} />}
      {navList[activeIndex] === 'Вопрос-ответ' && <CardContentFAQ faq={card.faq} />}
    </div>
  )
}