import { logo } from "@/app/assets/images/header"
import { Container } from "@/app/layout"
import { useLazyGetCategoriesQuery } from "@/entities/cotalog-pop-up/api"
import { Spinner } from "@/shared/ui/spinner"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"
import { urlList } from "../const"
import { Button } from "@/shared/ui/button"
import Social from "@/shared/ui/social"

export const FooterTop = () => {

  const [getCategories, { isLoading, isError, data }] = useLazyGetCategoriesQuery()

  useEffect(() => {
    (async () => {
      await getCategories(null)
    })()
  }, [])

  const clickHandle = () => { }
  console.log(data)

  return (
    <Container className="flex justify-between text-white p-[60px_0px_86px]">
      <div className="max-w-[220px]">
        <Link href='/'>
          <Image width={157} height={37} alt="logo" src={logo} />
        </Link>
        <p className="mt-[16px] font-normal text-[16px]">г. Москва ст.м. Таганская Малый Дровяной переулок 6</p>
      </div>

      <div>
        <h3 className="mb-[9px] font-bold text-[19px]">Каталог</h3>
        <ul>
          {(!isLoading && !isError)
            ? (data && data.map(({ title, url }) => (
              <li key={title} className="text-[16px] font-normal leading-5 hover:text-gold">
                <Link href={url}>
                  <p className="transition-all">{title}</p>
                </Link>
              </li>
            )))
            : <Spinner />
          }
        </ul>
      </div>

      <ul>
        {urlList.map(({ title, url }) => (
          <li key={title} className="text-[19px] font-bold leading-7 hover:text-gold">
            <Link href={url}>
              <p className="transition-all">{title}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="text-[19px] font-bold leading-7">
        <p>Оплата и достака</p>
        <p>Гарантия и возврат</p>
      </div>

      <div className="flex flex-col items-end text-[16px] font-bold">
        <Button className="bg-transparent w-[255px] h-[51px] mb-[26px]" clickHandle={clickHandle}>
          <p className="text-[19px] font-bold text-gold">Заказать звонок</p>
        </Button>
        <p>+7 (495) 911-10-11</p>
        <p className="mb-[15px]">msk@magicgoldfish.ru</p>
        <Social />
      </div>
    </Container>
  )
}

