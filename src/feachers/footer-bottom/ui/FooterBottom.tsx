import { Container } from "@/app/layout"
import { cards } from "../const"
import Image from "next/image"

export const FooterBottom = () => {
  return (
    <div className="border-t-[1px] border-white border-opacity-25 leading-4">
      <Container className="flex items-center justify-between h-[100px] font-normal text-[15px]">
        <div className="text-white opacity-40">
          <p>© 2021 MagicGoldFish.ru</p>
          <p>Политика конфиденциальности</p>
        </div>
        <ul className="flex">
          {cards.map((card, index) => (
            <Image
              key={index}
              alt="card"
              src={card}
              width={0}
              height={0}
              layout="responsive"
              objectFit="contain"
              className="m-[6px]"
            />
          ))}
        </ul>
        <div className="text-white opacity-40 flex flex-col items-end">
          <p>Содержимое не является публичной офертой</p>
          <p>Пользовательское соглашение</p>
        </div>
      </Container>
    </div>
  )
}