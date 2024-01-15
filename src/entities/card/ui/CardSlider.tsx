import { Swiper, SwiperSlide } from "swiper/react"
import { ICard } from "../types"
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import { Navigation } from "swiper/modules"
import { findCardImg } from "@/app/assets/images/card"
import { arrowBlack } from "@/app/assets/images/header"

import 'swiper/css/bundle'

interface IProps extends ICard {
  className?: string 
}

export const CardSlider: React.FC<IProps> = ({ className, ...card }) => {
  const [imgSrcList, setImgSrcList] = useState<StaticImageData[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    (async () => {
      let arr: StaticImageData[] = []
      for await (let imgSrcItem of card.imgSrcList) {
        let res = await findCardImg(card.cotalogUrl, card.categoryUrl, card.url, imgSrcItem)
        res && arr.push(res)
      }
      setImgSrcList(arr)
    })()
  }, [])

  const prevClickHandle = () => {
    setActiveIndex(prev => activeIndex === 0 ? prev : prev - 1)
  }

  const nextClickHandle = () => {
    setActiveIndex(prev => activeIndex < imgSrcList.length - 1 ? prev + 1 : prev)
  }

  return (
    <div className={"flex items-center justify-between w-full h-[397px] "+ className}>
      <div className="relative flex max-w-[85px]">
        <Swiper
          simulateTouch={false}
          direction="vertical"
          navigation={{ prevEl: ".swiper-button-prev-1", nextEl: ".swiper-button-next-1" }}
          slidesPerView={3}
          modules={[Navigation]}
          className='max-w-[85px] h-[305px] bg-white'
          spaceBetween={25}
        >
          {
            imgSrcList.map((imgSrcItem, index) => (
              <SwiperSlide
                key={index + imgSrcItem.src}
                className={'transition-all duration-300 p-[3px] max-h-[85px] w-full rounded-[9px] overflow-hidden border-[1px] border-[#217217217] border-opacity-40 ' + (
                  activeIndex === index ? 'opacity-1' : 'opacity-[0.4]'
                )}
              >
                <Image alt="imgSrcItem" src={imgSrcItem} width={85} />
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="after:hidden rounded-full absolute top-[-40px] left-0 right-0 flex items-center justify-center">
          <Image
            onClick={prevClickHandle}
            src={arrowBlack} alt='arrow'
            className='swiper-button-prev-1 rotate-[-90deg] cursor-pointer transition-all duration-300 hover:scale-[1.1]'
          />
        </div>
        <div className="after:hidden rounded-full absolute bottom-[-40px] left-0 right-0 flex items-center justify-center">
          <Image
            onClick={nextClickHandle}
            src={arrowBlack}
            alt='arrow'
            className='swiper-button-next-1 rotate-90 cursor-pointer transition-all duration-300 hover:scale-[1.1]'
          />
        </div>
      </div>

      <div className="relative h-full bg-white">
        <Swiper
          simulateTouch={false}
          navigation={{ prevEl: ".swiper-button-prev-1", nextEl: ".swiper-button-next-1" }}
          slidesPerView={1}
          modules={[Navigation]}
          className='h-full max-w-[574px] w-full'
          spaceBetween={25}
        >
          {
            imgSrcList.map((imgSrcItem, index) => (
              <SwiperSlide
                key={index + imgSrcItem.src}
                className={'h-full w-full rounded-[9px] overflow-hidden border-[1px] border-[#217217217] border-opacity-40'}
              >
                <div className="flex items-center justify-center">

                  <Image alt="imgSrcItem" src={imgSrcItem} width={400} priority={true} />
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="after:hidden rounded-full absolute left-[-25px] top-0 bottom-0 flex items-center justify-center">
          <Image
            onClick={prevClickHandle}
            src={arrowBlack}
            alt='arrow'
            className='swiper-button-prev-1 rotate-180 cursor-pointer transition-all duration-300 hover:scale-[1.1]'
          />
        </div>
        <div className="after:hidden rounded-full absolute right-[-25px] top-0 bottom-0 flex items-center justify-center">
          <Image
            onClick={nextClickHandle}
            src={arrowBlack}
            alt='arrow'
            className='swiper-button-next-1 cursor-pointer transition-all duration-300 hover:scale-[1.1]'
          />
        </div>
      </div>
    </div>
  )
}  
