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
      className='fixed left-0 right-0 top-0 z-10 flex w-full p-2 font-semibold md:justify-evenly'>
      <div className='flex w-full items-center justify-evenly text-blue-800'>
        <Link href='/' className='text-3xl'>
          Kaushal Gupta
        </Link>

        <ul
          className={`mx-2 flex flex-col items-center text-xl md:flex md:flex-row ${NavStyle}`}>
          <Link
            href={'/'}
            className={`${pathname == '/' ? 'text-orange-600' : 'text-blue-600'} headerLink`}>
            Home
          </Link>

          {/* <Link
            href={'/About'}
            className={`${pathname.startsWith('/About') ? 'text-orange-600' : 'text-blue-600'} headerLink`}>
            About
          </Link> */}

          <Link
            href={'/Certificates'}
            className={`${pathname.startsWith('/Certificates') ? 'text-orange-600' : 'text-blue-600'} headerLink`}>
            Certificates
          </Link>
        </ul>

        <button
          onClick={displayNav}
          className='m-1 rounded border-2 border-blue-800 p-1 md:hidden'>
          {NavIcon ? <FaBars /> : <FaXmark />}
        </button>
      </div>
      <Scroll />
    </div>
  );
};

export default Header;
