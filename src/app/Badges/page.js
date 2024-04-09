import Image from 'next/image';
import badgeData from './badgeData';

export const metadata = {
  title: 'Badges',
  description: 'Badges achieved by KAUSHAL GUPTA',
  author: 'Kaushal Gupta',
};

function getBadge(item) {
  return (
    <a
      className='border-3 w-fit rounded-3xl bg-white p-5 hover:shadow-xl hover:shadow-purple-400'
      target='_blank'
      href={item.url}
      key={item.url}>
      <Image
        src={item.name}
        width={200}
        height={200}
        quality={60}
        alt='badge'
        loading='lazy'
      />
    </a>
  );
}

export default function page() {
  return (
    <div className='bg-purple-100/40 py-10'>
      <h1 className='pt-5 text-center text-4xl font-semibold'>
        I have Earned a total of{' '}
        <span className='text-nowrap'>
          <span className='text-5xl'>{badgeData.length}</span> Badges
        </span>
      </h1>
      <div className='flex flex-row flex-wrap justify-center gap-10 p-10'>
        {badgeData.map(getBadge)}
      </div>
    </div>
  );
}
