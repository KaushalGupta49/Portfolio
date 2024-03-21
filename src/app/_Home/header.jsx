'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import {FaBars, FaXmark} from 'react-icons/fa6';
import {usePathname} from 'next/navigation';

const Scroll = dynamic(
  () => {
    return import('@/components/Scroll');
  },
  {ssr: false}
);

const Header = () => {
  const pathname = usePathname();

  const [NavStyle, setNavStyle] = useState('hidden');
  const [NavIcon, setNavIcon] = useState(true);

  const displayNav = () => {
    if (NavStyle === 'hidden') {
      setNavStyle('');
      setNavIcon(false);
    } else {
      setNavStyle('hidden');
      setNavIcon(true);
    }
  };

  return (
    <div
      id='header'
      className='fixed left-0 right-0 top-0 z-10 flex w-full bg-white/80 p-2 font-semibold md:justify-evenly lg:bg-transparent'>
      <div className='flex w-full flex-wrap items-center justify-evenly text-blue-800'>
        <Link href='/' className='w-2/3 text-center text-3xl sm:w-fit'>
          Kaushal Gupta
        </Link>

        <div className='w-1/3 text-center sm:hidden sm:w-fit'>
          <button
            onClick={displayNav}
            className='m-1 rounded border-2 border-blue-800 p-1'>
            {NavIcon ? <FaBars /> : <FaXmark />}
          </button>
        </div>

        <ul
          className={`order-last mx-2 mt-3 flex w-full flex-col items-center bg-white/20 text-xl sm:mt-0 sm:flex sm:w-fit sm:flex-row sm:bg-transparent ${NavStyle}`}>
          <Link
            href={'/'}
            className={`${pathname == '/' ? 'text-orange-600' : 'text-blue-600'} headerLink`}>
            Home
          </Link>

          <Link
            href={'/Badges'}
            className={`${pathname.startsWith('/Badges') ? 'text-orange-600' : 'text-blue-600'} headerLink`}>
            Badges
          </Link>

          <Link
            href={'/Certifications'}
            className={`${pathname.startsWith('/Certifications') ? 'text-orange-600' : 'text-blue-600'} headerLink`}>
            Certifications
          </Link>
        </ul>
      </div>
      <Scroll />
    </div>
  );
};

export default Header;
