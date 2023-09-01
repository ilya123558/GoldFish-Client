import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { arrow } from '@/app/assets/images/carusel';
import { Button } from '@/shared/ui/button';
import { options } from '../const';

import 'swiper/css/bundle'
import Image from 'next/image';
import { NextPage } from 'next';

interface IProps {
  slides: {
    title: string;
    subTitle: string;
    imgSrc: string;
  }[]
}

export const Carusel: NextPage<IProps> = ({ slides }) => {
  return (
    <Swiper
      navigation={options}
      slidesPerView={1.7}
      modules={[Navigation]}
      className='h-[320px] relative w-screen cursor-grab active:cursor-grabbing'
      loop
      centeredSlides={true}
      spaceBetween={2}
    >
      {slides.map(({ imgSrc, subTitle, title }, index) => (
        <SwiperSlide key={index} style={{ backgroundImage: `url("${imgSrc}")` }} className={'h-full w-full bg-no-repeat bg-cover'}>
          <div className='flex items-end justify-between h-full w-full p-[33px]'>
            <div className='text-white'>
              <h4 className='font-normal text-[14px]'>{subTitle}</h4>
              <h3 className='font-bold text-[28px]'>{title}</h3>
            </div>
            <Button clickHandle={() => { }} title='Подробнее' />
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-button-prev after:hidden rounded-full bg-primary max-w-[25px] max-h-[25px] flex items-center justify-center transition-all duration-300 hover:scale-[1.1]">
        <Image src={arrow} alt='arrow' />
      </div>
      <div className="swiper-button-next after:hidden rounded-full bg-primary max-w-[25px] max-h-[25px] flex items-center justify-center transition-all duration-300 hover:scale-[1.1]">
        <Image src={arrow} alt='arrow' className='rotate-180' />
      </div>
    </Swiper>
  );
};