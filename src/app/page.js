import Image from 'next/image';
import Carousel from '../components/Carousel';

// import profileImage from '@/app/images/myImage.jpg';
import profileImage from '@/app/images/myImagewbg.png';
import background from '@/app/images/backgroung.png';
import Skills from './_Home/skills';
import Education from './_Home/education';

import dataCertificates from '@/app/_Home/certificateCatalog';

import {FaLinkedinIn, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';
import {SiHackerrank, SiLeetcode} from 'react-icons/si';

export default function App() {
  return (
    <div className='bg-purple-200/30'>
      <div className='relative z-0 flex flex-row flex-wrap justify-center'>
        <Image
          src={background}
          alt='background'
          fill={true}
          className='-z-20 object-cover object-right blur-[1.1px]'
          priority
        />
        <Image
          src={profileImage}
          priority={true}
          alt='Kaushal Gupta Photo'
          className='my-5 w-[380px] rounded-full bg-slate-200/5 shadow-lg sm:w-[500px] lg:order-last'
        />
        <div className='m-10 flex flex-col justify-center text-center font-semibold lg:text-left'>
          <div className='text-lg'>Hey there !</div>
          <div className='text-nowrap text-3xl sm:text-5xl'>
            I am Kaushal Gupta
          </div>
          <div className='text-sm sm:text-xl'>
            Full-Stack & MERN Stack Developer
          </div>

          <div className='flex justify-evenly p-3'>
            <a
              href='https://www.linkedin.com/in/kaushalgupta2003/'
              target='_blank'>
              <button className='iconSelf tooltip'>
                <FaLinkedinIn />
                <span className='tooltiptext'>LinkedIn</span>
              </button>
            </a>

            <a href='https://github.com/KaushalGupta49' target='_blank'>
              <button className='iconSelf tooltip'>
                <FaGithub />
                <span className='tooltiptext'>Github</span>
              </button>
            </a>

            <a href='https://twitter.com/KaushalGupta_' target='_blank'>
              <button className='iconSelf tooltip'>
                <FaTwitter />
                <span className='tooltiptext'>Twitter</span>
              </button>
            </a>

            <a href='https://www.instagram.com/kaushal_g1049/' target='_blank'>
              <button className='iconSelf tooltip'>
                <FaInstagram />
                <span className='tooltiptext'>Instagram</span>
              </button>
            </a>

            <a
              href='https://www.hackerrank.com/profile/kaushalgupta2003'
              target='_blank'>
              <button className='iconSelf tooltip'>
                <SiHackerrank />
                <span className='tooltiptext'>HackerRank</span>
              </button>
            </a>

            <a href='https://leetcode.com/KaushalGupta/' target='_blank'>
              <button className='iconSelf tooltip'>
                <SiLeetcode />
                <span className='tooltiptext'>LeetCode</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <Carousel certificates={dataCertificates} mousewheel={true} name={''} />
      <Education />
      <Skills />
    </div>
  );
}
