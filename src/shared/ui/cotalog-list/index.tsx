import { ICotalogList } from '@/entities/cotalog-pop-up/types/index.interface';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';

import { arrow, arrowBlack } from '@/app/assets/images/header';

interface IProps {
  cotalogList: ICotalogList
  setActiveIndex: (value: number) => void,
  activeIndex: number | null
}

export const CotalogList: NextPage<IProps> = ({cotalogList, setActiveIndex, activeIndex}) => {
  return (
    <div className='min-w-[255px] min-h-[395px] border border-transparent border-r-2 border-r-primary border-opacity-[0.26]'>
      <h2 className='flex items-center justify-center h-[48px] border border-transparent border-b-2 border-b-primary border-opacity-[0.26]'>Все категории</h2>
      <nav>
        <ul className='flex flex-col'>
          {cotalogList.map(({ title, url }, index) => (
            <li
              key={url}
              onClick={() => setActiveIndex(index)}
              className={'h-[46px] cursor-pointer flex items-center justify-between pr-[12px] pl-[30px] hover:bg-gold-op hover:transition-all transition-all hover:duration-300 leading-5 ' + (activeIndex === index ? 'bg-gold' : '')}
            >
              <p>{title}</p>
              <Image alt='arrow' src={activeIndex === index ? arrowBlack : arrow} width={20} height={20} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};