import Image from 'next/image';
import {FaLinkedinIn, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';

import footerbackground from '@/app/images/footerbg.png';

const footer = () => {
  return (
    <div className='relative flex flex-col text-white'>
      <Image
        src={footerbackground}
        alt='background'
        fill={true}
        loading='lazy'
        className='z-0'
      />
      <div className='z-10 p-4 text-center text-2xl'>Contact me</div>
      <hr className='z-10 mx-auto w-10/12' />

      <div className='z-10 flex justify-evenly p-10'>
        <a
          href='https://www.linkedin.com/in/kaushalgupta2003/'
          target='_blank'
          className='text-3xl hover:text-blue-900'>
          <FaLinkedinIn />
        </a>

        <a
          href='https://github.com/KaushalGupta49'
          target='_blank'
          className='text-3xl hover:text-blue-900'>
          <FaGithub />
        </a>

        <a
          href='https://twitter.com/KaushalGupta_'
          target='_blank'
          className='text-3xl hover:text-blue-900'>
          <FaTwitter />
        </a>

        <a
          href='https://www.instagram.com/kaushal_g1049/'
          target='_blank'
          className='text-3xl hover:text-blue-900'>
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default footer;
