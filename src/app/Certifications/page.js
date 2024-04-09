import BasicModalCarousel from '../../components/Modal';

//import Certificates lists
import MetaCertificate from '@/app/Certifications/CertificateList/MetaCertificate';
import DigitalLeaderCertificates from '@/app/Certifications/CertificateList/GoogleDigitalLeader';
import JavaLearnQuest from '@/app/Certifications/CertificateList/JavaLearnQuest';
import GoogleCybersecurity from '@/app/Certifications/CertificateList/GoogleCybersecurity';
import {
  IBM_JSBACKEND,
  IBM_MRN,
} from '@/app/Certifications/CertificateList/IBM';

export const metadata = {
  title: 'Certifications',
  description: 'Certifications achieved by KAUSHAL GUPTA',
  author: 'Kaushal Gupta',
};

export default function page() {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 bg-purple-100/40 py-10'>
      <BasicModalCarousel
        certificate={MetaCertificate}
        name={'Meta Front-End Developer'}
      />

      <BasicModalCarousel
        certificate={DigitalLeaderCertificates}
        name={'Google Digital Leader Training'}
      />

      <BasicModalCarousel
        certificate={JavaLearnQuest}
        name={'CORE JAVA by LearnQuest'}
      />

      <BasicModalCarousel
        certificate={IBM_MRN}
        name={'IBM JavaScript Programming with React, Node & MongoDB.jpg'}
      />

      <BasicModalCarousel
        certificate={IBM_JSBACKEND}
        name={'IBM JavaScript Backend Developer'}
      />

      <BasicModalCarousel
        certificate={GoogleCybersecurity}
        name={'Google Cybersecurity'}
      />
    </div>
  );
}
