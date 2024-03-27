import Image from 'next/image';
import dgiLogo from '@/app/images/dgi_logo.jpg';
import cbselogo from '@/app/images/cbselogo.png';

const Education = () => {
  return (
    <div className='mt-10 bg-purple-200/90 p-10'>
      <h1 className='mb-10 text-center text-5xl font-semibold'>Education</h1>

      <div className='flex flex-col items-center justify-center gap-5'>
        <div className='flex flex-row gap-7 rounded-3xl bg-purple-500/20 p-5 px-20'>
          <Image
            src={dgiLogo}
            width={250}
            height={250}
            alt='dgi logo'
            className='rounded-full border-2'
          />
          <div className='flex flex-col items-start justify-center'>
            <h1 className='text-2xl font-semibold'>
              Dronacharya Group of Institutions
            </h1>
            <h2 className='text-lg font-medium'>
              Bachelor of Technology, B.Tech
            </h2>
            <h2 className='text-lg font-medium'>CPGA : 7.415 / 10</h2>
          </div>
        </div>

        <div className='flex flex-row gap-7 rounded-3xl bg-purple-500/20 p-5 px-20'>
          <div className='flex flex-col items-end justify-center'>
            <h1 className='text-2xl font-semibold'>
              N M Public School, Greater Noida
            </h1>
            <h2 className='text-lg font-medium'>INTERMEDIATE SCHOOL</h2>
            <h2 className='text-lg font-medium'>Percentage : 81%</h2>
          </div>
          <Image src={cbselogo} width={250} height={250} alt='cbse logo' />
        </div>

        <div className='flex flex-row gap-7 rounded-3xl bg-purple-500/20 p-5 px-20'>
          <Image src={cbselogo} width={250} height={250} alt='cbse logo' />
          <div className='flex flex-col items-start justify-center'>
            <h1 className='text-2xl font-semibold'>
              N M Public School, Greater Noida
            </h1>
            <h2 className='text-lg font-medium'>HIGH SCHOOL</h2>
            <h2 className='text-lg font-medium'>Percentage : 80.5%</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
