import Carousel from '../../components/Carousel';

import metaCertificate from '@/images/Certificates/MetaCertificate/MetaCertificate';
import digitalLeaderCertificates from '@/images/Certificates/GoogleDigitalLeader/GoogleDigitalLeader';

export default function page() {
  return (
    <div className='bg-purple-100/50'>
      <>
        <Carousel certificates={metaCertificate} mousewheel={false} />
        <h1 className='text-semibold my-4 text-center text-2xl'>
          Meta Front-End Developer
        </h1>
      </>

      <>
        <Carousel certificates={digitalLeaderCertificates} mousewheel={false} />
        <h1 className='text-semibold my-4 text-center text-2xl'>
          Google Cloud Digital Leader Training
        </h1>
      </>
    </div>
  );
}
