import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { socialList } from './const';

const Social = () => {

  return (
    <ul className='flex items-center'>
      {socialList.map(({ link, url }) => (
        <li key={link} className='ml-[10px]'>
          <Link href={link}>
            <Image alt={link} src={url} className="w-full h-auto object-contain" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Social;