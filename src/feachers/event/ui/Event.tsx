import { NextPage } from "next";
import { IEvent } from "../types";
import { Container } from "@/app/layout";
import { Typography } from "@/shared/ui/typography";
import Image from "next/image";
import { findEventImg } from "@/app/assets/images/events";
import Link from "next/link";
import { Button } from "@/shared/ui/button";

interface IProps {
  events: IEvent[]
  title: string,
  url: string,
  className?: string
}

export const Event: NextPage<IProps> = ({ title, events, url, className }) => {
  return (
    <Container className={className}>
      <Typography className="m-[45px_0px_22px_0px]">{title}</Typography>
      <div style={{ gridTemplateColumns: `repeat(${events.length}, minmax(0, 1fr))` }} className={`grid gap-[15px] grid-cols-3 w-full mb-[38px]`}>
        {events.map(({ date, url, subTitle, title }) => (
          <Link href={url} key={title} className="col-span-1 h-[434px] text-white relative rounded-[9px] hover:text-gold overflow-hidden cursor-pointer transition-all">
            <Image
              alt="event"
              src={findEventImg(url)}
              width={0} height={0}
              layout="fill"
            />
            <div className="absolute w-full h-[112px] bottom-0">
              <div className="absolute w-full h-full opacity-[0.8] bg-primary bottom-0 right-0"></div>
              <div className="relative z-10  pt-[15px] px-[16px]">
                <div className="flex justify-between">
                  <h4 className={`font-semibold mb-[8px] text-[19px] ${events.length < 3 ? 'text-gold' : ''}`}>{title}</h4>
                  {events.length < 3 && <p className="pl-[30px] whitespace-nowrap">{date}</p>}
                </div>
                <p className="font-normal text-[14px] text-white">{subTitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href={url}>
          <Button className={`w-[311px] h-[71px] text-[23px] ${events.length < 3 ? '' : 'bg-white border-[4px]'}`} clickHandle={() => { }}>
            {events.length < 3 ? <p>Узнать больше</p> : <p className='text-primary'>Показать еще</p>}
          </Button>
        </Link>
      </div>
    </Container>
  )
}