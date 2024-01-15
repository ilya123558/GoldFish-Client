import Image from 'next/image';
import React from 'react';

import busket from "@/app/assets/images/header/busket.svg"
import { NextPage } from 'next';

const Busket: NextPage<{ num?: number }> = ({ num }) => {
  return (
    <div className='relative'>
      <Image alt="busket" src={busket} width={35} />
      {num && <div className='absolute w-[16px] h-[16px] bg-gold flex items-center justify-center rounded-[50%] text-[10px] font-black top-[0px] right-[0px] text-white'>
        {num}
      </div>}
    </div>
  );
};

export default Busket;