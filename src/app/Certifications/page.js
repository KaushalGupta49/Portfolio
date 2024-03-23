import BasicModalCarousel from '../../components/Modal';

//import Certificates lists
import metaCertificate from '@/app/Certifications/CertificateList/MetaCertificate';
import digitalLeaderCertificates from '@/app/Certifications/CertificateList/GoogleDigitalLeader';
import JavaLearnQuest from '@/app/Certifications/CertificateList/JavaLearnQuest';
import IBM from '@/app/Certifications/CertificateList/IBM';

export const metadata = {
  title: 'Certifications',
  description: 'Certifications achieved by KAUSHAL GUPTA',
  author: 'Kaushal Gupta',
};

export default function page() {
  return (
    <div className='flex flex-row flex-wrap bg-purple-100/50 pt-10'>
      <BasicModalCarousel
        certificate={metaCertificate}
        name={'Meta Front-End Developer'}
      />

      <BasicModalCarousel
        certificate={digitalLeaderCertificates}
        name={'Google Digital Leader Training'}
      />

      <BasicModalCarousel
        certificate={JavaLearnQuest}
        name={'CORE JAVA by LearnQuest'}
      />

      <BasicModalCarousel
        certificate={IBM}
        name={'IBM JavaScript Backend Developer'}
      />
    </div>
  );
}
