import { Modal } from '@/app/layout/ui/Modal';
import React, { useState } from 'react';
import { Login } from './Login';
import { Registration } from './Registration';

interface IProps {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
}

export const RegistrationOrAuthorization: React.FC<IProps> = (props) => {
  const [authValue, setAuthValue] = useState('Login')

  return (
    <>
      <Modal {...props}>
        <div className='w-[427px] p-[30px_40px] relative bg-white shadow-md rounded-[9px] text-primary font-bold flex flex-col items-center'>
          <h3 className='text-[22px] mb-[15px]'>Войдите или зарегистрируйтесь</h3>
          <div className='border-b-[2px] border-primary border-opacity-[0.12] w-full'>
            <ul className='flex text-[19px]'>
              {['Login', 'Registration'].map((item) => (
                <li
                  onClick={() => setAuthValue(item)}
                  key={item}
                  className={`mb-[-1px] relative border-b-[3px] border-primary border-opacity-0 flex items-center justify-center ${item === authValue ? 'border-opacity-100' : 'cursor-pointer'} ${item === 'Login' ? 'w-[30%]' : 'w-[70%]'}`}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {authValue === 'Login'
            ? <Login />
            : <Registration />
          }
        </div>
      </Modal >
    </>
  );
};