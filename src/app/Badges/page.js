import Image from 'next/image';
import badgeData from './badgeData';

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
        alt='express'
      />
    </a>
  );
}

export default function page() {
  return (
    <div className='bg-purple-300/10'>
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