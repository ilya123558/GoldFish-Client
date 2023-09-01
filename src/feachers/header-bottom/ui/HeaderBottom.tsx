import { Container } from '@/app/layout';
import { CotalogPopUp } from '@/entities/cotalog-pop-up';
import ContactList from '@/shared/ui/contact-list';
import { ModalWindow } from '@/shared/ui/modal-window';
import Social from '@/shared/ui/social';
import React, { useState } from 'react';

export const HeaderBottom = () => {

  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive((prev) => !prev)
  }

  return (
    <div className="bg-[#54545411] font-bold py-[10px] relative">
      <Container className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <button onClick={handleClick} className={'transition-all duration-500 h-[14px] w-[18px] flex flex-col justify-between overflow-hidden z-50 translate-y-[-1.5px] ' + (isActive ? 'translate-x-[25px] translate-y-[-1px]' : '')}>
            <div className={'w-[100%]  bg-black transition-all ' + (isActive ? 'rotate-[45deg] translate-y-[6px] h-[2px]' : 'h-[1px]')}></div>
            <div className={'w-[100%]  bg-black transition-all ' + (isActive ? 'translate-x-[-110%]' : 'h-[1px]')}></div>
            <div className={'w-[100%]  bg-black transition-all ' + (isActive ? 'rotate-[-45deg] translate-y-[-6px] h-[2px]' : 'h-[1px]')}></div>
          </button>
          <p className="ml-[14px]">Каталог</p>
        </div>
        <ContactList />
        <Social />
      </Container>
      {isActive && <ModalWindow />}
      <CotalogPopUp className={'top-[-43px] transition-all duration-500 ' + (isActive ? '' : 'translate-x-[-2000px]')} />
    </div>
  );
};
