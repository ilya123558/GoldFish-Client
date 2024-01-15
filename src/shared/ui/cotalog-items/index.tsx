import { Container } from "@/app/layout"
import Image from "next/image"
import { cotalogItems } from "./const"
import Link from "next/link"
import { Typography } from "../typography"


export const CotalogItems = () => {
  return (
    <Container>
      <div className="w-full">
        <Typography className="m-[45px_0px_22px_0px]">Каталог</Typography>
        <div className="grid gap-[10px] grid-cols-4 h-[370px] w-full">
          {cotalogItems.map(({ imgSrc, title, link }, index) => (
            <Link
              href={`cotalog/${link}`}
              key={imgSrc}
              className={`text-white  hover:text-gold ${index === 0 ? 'row-span-2' : 'row-span-1'} ${index === 0 ? 'col-span-2' : 'col-span-1'} relative hover:scale-[1.02] transition-all cursor-pointer`}
            >
              <Image
                className="rounded-[9px] w-full h-auto object-contain"
                alt="cotalog-item"
                src={imgSrc}
                width={500}
                height={500}
                priority={index === 0 ? true: false}
              />
              <div className={`h-[46px] w-full bg-primary absolute rounded-b-[9px] bottom-0 flex items-center pl-[1.7em] text-[18px] font-medium`}>
                <p className="transition-all">{title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}