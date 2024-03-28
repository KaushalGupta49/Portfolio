import Image from 'next/image';
import dgiLogo from '@/app/images/dgi_logo.jpg';
import cbselogo from '@/app/images/cbselogo.png';

const Education = () => {
  return (
    <div className='mt-10 bg-purple-200/90 p-10'>
      <h1 className='mb-10 text-center text-5xl font-semibold'>Education</h1>

      <div className='flex flex-col items-center justify-center gap-5'>
        <div className='flex flex-row items-center gap-5 rounded-3xl bg-purple-500/20 p-2 py-5'>
          <Image
            src={dgiLogo}
            width={130}
            height={130}
            alt='dgi logo'
            className='rounded-full border-2 sm:w-[180px] md:w-[250px]'
          />
          <div className='flex flex-col items-start justify-center'>
            <h1 className='text-md font-semibold sm:text-2xl'>
              Dronacharya Group of Institutions
            </h1>
            <h2 className='text-sm font-medium sm:text-lg'>
              Bachelor of Technology, B.Tech
            </h2>
            <h2 className='text-sm font-medium sm:text-lg'>
              CPGA : 7.415 / 10
            </h2>
          </div>
        </div>

        <div className='flex flex-row items-center gap-5 rounded-3xl bg-purple-500/20 p-2 py-5'>
          <div className='flex flex-col items-end justify-center'>
            <h1 className='text-md text-right font-semibold sm:text-2xl'>
              N M Public School, Greater Noida
            </h1>
            <h2 className='text-right text-sm font-medium sm:text-lg'>
              INTERMEDIATE SCHOOL
            </h2>
            <h2 className='text-sm font-medium sm:text-lg'>Percentage : 81%</h2>
          </div>
          <Image
            src={cbselogo}
            width={130}
            height={130}
            alt='cbse logo'
            className='sm:w-[180px] md:w-[250px]'
          />
        </div>

        <div className='flex flex-row items-center gap-5 rounded-3xl bg-purple-500/20 p-2 py-5'>
          <Image
            src={cbselogo}
            width={130}
            height={130}
            alt='cbse logo'
            className='sm:w-[180px] md:w-[250px]'
          />
          <div className='flex flex-col items-start justify-center'>
            <h1 className='text-md font-semibold sm:text-2xl'>
              N M Public School, Greater Noida
            </h1>
            <h2 className='text-sm font-medium sm:text-lg'>HIGH SCHOOL</h2>
            <h2 className='text-sm font-medium sm:text-lg'>
              Percentage : 80.5%
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
