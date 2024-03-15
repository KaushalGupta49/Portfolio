import Carousel from '../../components/Carousel';

import metaCertificate from '@/app/Certifications/CertificateList/MetaCertificate';
import digitalLeaderCertificates from '@/app/Certifications/CertificateList/GoogleDigitalLeader';
import JavaLearnQuest from '@/app/Certifications/CertificateList/JavaLearnQuest';

export const metadata = {
  title: 'Certificates',
  description: 'PortFolio of Kaushal Gupta',
  author: 'Kaushal Gupta',
};

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

      <>
        <Carousel certificates={JavaLearnQuest} mousewheel={false} />
        <h1 className='text-semibold my-4 text-center text-2xl'>
          Core Java by LearnQuest
        </h1>
      </>
    </div>
  );
}
