import Image from 'next/image';
import Carousel from '../components/Carousel';

// import profileImage from '@/images/myImage.jpg';
import profileImage2 from '@/images/myImagewbg.png';
import background from '@/images/back.avif';
import Skills from './_Home/skills';

import dataCertificates from '@/app/_Home/certificateCatalog';

import {FaLinkedinIn, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';

export default function App() {
  return (
    <div className='bg-purple-200/30'>
      <Image
        src={background}
        alt='background'
        layout='fill'
        objectFit='cover'
        className='-z-10'
      />
      <div className='z-10 flex flex-row flex-wrap justify-center'>
        {/* <Image
          src={profileImage}
          alt='creatorImage'
          className='m-10 w-[380px] rounded-full shadow-2xl shadow-indigo-900 sm:w-[500px]'
        /> */}
        <Image
          src={profileImage2}
          alt='creatorImage'
          className='my-5 w-[380px] rounded-full bg-slate-500/10 shadow-2xl sm:w-[500px] lg:order-last'
        />
        <div className='m-10 text-center font-semibold lg:mt-52 lg:text-left'>
          <div className='text-lg'>Hey there !</div>
          <div className='text-nowrap text-5xl'>I am Kaushal Gupta</div>
          <div className='text-xl'>Full-Stack & MERN Stack Developer</div>

          <div className='flex justify-evenly p-3'>
            <a
              href='https://www.linkedin.com/in/kaushal-gupta-1049/'
              target='_blank'>
              <button className='iconSelf'>
                <FaLinkedinIn />
              </button>
            </a>

            <a href='https://github.com/KaushalGupta49' target='_blank'>
              <button className='iconSelf'>
                <FaGithub />
              </button>
            </a>

            <a href='https://www.instagram.com/kaushal_g1049/' target='_blank'>
              <button className='iconSelf'>
                <FaInstagram />
              </button>
            </a>

            <a href='https://twitter.com/KaushalGupta_' target='_blank'>
              <button className='iconSelf'>
                <FaTwitter />
              </button>
            </a>
          </div>
        </div>
      </div>
      <Carousel certificates={dataCertificates} mousewheel={true} />
      <Skills />
    </div>
  );
}
