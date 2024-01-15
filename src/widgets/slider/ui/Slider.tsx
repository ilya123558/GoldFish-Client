import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { NextPage } from 'next';
import Image from 'next/image';
import { Container } from '@/app/layout';
import { arrow } from '@/app/assets/images/slider';
import { Typography } from '@/shared/ui/typography';
import { ICardList, Card } from '@/entities/card';

import 'swiper/css/bundle'

interface IProps {
  slides: ICardList,
  title: string
}

export const Slider: NextPage<IProps> = ({ slides, title }) => {

  const options = {
    prevEl: '.swiper-button-prev-' + title.length,
    nextEl: '.swiper-button-next-' + title.length
  }

  return (
    <Container className='relative'>
      <Typography className='m-[45px_0px_22px_0px]'>{title}</Typography>
      <Swiper
        navigation={options}
        slidesPerView={4}
        modules={[Navigation]}
        className='relative w-full rounded-[20px] cursor-grab active:cursor-grabbing'
        loop
        spaceBetween={0}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='my-[16px] translate-x-[10px]'>
            <Card {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${options.prevEl.split('.').join('')} after:hidden transition-all duration-300 left-[-60px] top-[55%] absolute hover:scale-[1.1] cursor-pointer`}>
        <Image src={arrow} alt='arrow' />
      </div>
      <div className={`${options.nextEl.split('.').join('')} after:hidden transition-all duration-300 right-[-60px] top-[55%] absolute hover:scale-[1.1] cursor-pointer rotate-180`}>
        <Image src={arrow} alt='arrow' />
      </div>
    </Container>
  )
};

