import { Container } from '@/app/layout';
import Busket from '@/shared/ui/busket';
import Search from '@/shared/ui/search';
import Image from 'next/image';
import Link from 'next/link';

import { phone, profile, logo } from '@/app/assets/images/header';

export const HeaderTop = () => {
  return (
    <div className="bg-primary py-[15px]">
      <Container className="flex items-center justify-between">
        <Link href='/'>
          <Image width={157} height={37} alt="logo" src={logo} />
        </Link>
        <Search />
        <div className="flex">
          <Image alt="phone" src={phone} width={28} height={28} />
          <p className="text-[20px] font-bold text-white ml-[8px]">+7 (495) 911-10-11</p>
        </div>
        <div className="flex items-center justify-between w-[77px]">
          <Link href={'/profile'}><Image alt="profile" src={profile} width={30} height={30} /></Link>
          <Link href={'/busket'}><Busket /> </Link>
        </div>
      </Container>
    </div>
  );
};
