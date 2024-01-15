import { Container } from '@/app/layout';
import Busket from '@/shared/ui/busket';
import Search from '@/shared/ui/search';
import Image from 'next/image';
import Link from 'next/link';

import { phone, profile, logo } from '@/app/assets/images/header';
import { useEffect, useState } from 'react';
import { RegistrationOrAuthorization } from '@/feachers/registrationOrAuthorization';
import { useRouter } from 'next/router';
import { useLazyIsAuthQuery } from '@/entities/auth';
import { Loader } from '@/shared/ui/loader';
import { Modal } from '@/app/layout/ui/Modal';

export const HeaderTop = () => {
  const router = useRouter();
  const [registrationVisible, setRegistrationVisible] = useState(false)
  const [checkAuth, { isLoading, isError, isSuccess }] = useLazyIsAuthQuery()

  const onClickHandle = async () => {
    await checkAuth(null)
  }

  useEffect(() => {
    if (isError) {
      setRegistrationVisible(true)
    }
  }, [isError])

  useEffect(() => {
    if (isSuccess) {
      router.push('/profile')
    }
  }, [isSuccess])

  return (
    <div className="bg-primary py-[15px]">
      <Modal isOpen={isLoading}><Loader /></Modal> 
      <Container className="flex items-center justify-between">
        <Link href='/'>
          <Image priority alt="logo" src={logo} className={'w-[157px] h-[37px]'} />
        </Link>
        <Search />
        <div className="flex">
          <Image alt="phone" src={phone} className='w-[28px] h-auto' />
          <p className="text-[20px] font-bold text-white ml-[8px]">+7 (495) 911-10-11</p>
        </div>
        <div className="flex items-center justify-between w-[77px]">
          <Image onClick={onClickHandle} alt="profile" src={profile} className='w-[30px] h-auto cursor-pointer' />
          <Link href={'/basket'}><Busket /> </Link>
        </div>
      </Container>
      <RegistrationOrAuthorization isOpen={registrationVisible} setIsOpen={setRegistrationVisible} />
    </div>
  );
};
