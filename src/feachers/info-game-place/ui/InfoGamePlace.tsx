import Image from "next/image"

import { Container } from "@/app/layout"
import { Typography } from "@/shared/ui/typography"
import { descriptions, title } from "../const"
import { infoGamePlace } from "@/app/assets/images/info"


export const InfoGamePlace = () => {
  return (
    <Container className="grid grid-cols-2 gap-[20px]">
      <div>
        <Typography className="m-[0px] leading-4">{title}</Typography>
        {descriptions.map(description => (
          <p key={description} className="text-[16px] font-normal mt-[21px] leading-5">{description}</p>
        ))}
      </div>
      <Image alt="imgInfo" src={infoGamePlace} width={1000} height={1000} className="rounded-[9px]"/>
    </Container>
  )
}