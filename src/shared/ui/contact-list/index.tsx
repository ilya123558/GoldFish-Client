import Link from 'next/link';
import React from 'react';
import { contactList } from './const';

const ContactList = () => {
  return (
    <nav className='w-[70%]'>
      <ul className='flex items-center justify-around'>
        {contactList.map(({ link, text }) => (
          <li key={link} className='relative transition-all hover:opacity-[0.7] duration-[0.3s] before:duration-[0.3s] hover:text-gold before:transition-all overflow-hidden before:w-[100%] before:h-[1px] before:absolute before:ml-[-100%] before:bottom-[0] before:bg-gold hover:before:ml-[0]'>
            <Link href={link}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ContactList;