import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { socialList } from './const';

const Social = () => {

  return (
    <ul className='flex items-start'>
      {socialList.map(({ link, url, wh }) => (
        <li key={link} className='ml-[10px]'>
          <Link href={link}>
            <Image alt={link} src={url} width={wh} height={wh} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Social;