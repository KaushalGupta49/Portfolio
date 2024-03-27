import BasicModalCarousel from '../../components/Modal';

//import Certificates lists
import MetaCertificate from '@/app/Certifications/CertificateList/MetaCertificate';
import DigitalLeaderCertificates from '@/app/Certifications/CertificateList/GoogleDigitalLeader';
import JavaLearnQuest from '@/app/Certifications/CertificateList/JavaLearnQuest';
import IBM from '@/app/Certifications/CertificateList/IBM';
import GoogleCybersecurity from '@/app/Certifications/CertificateList/GoogleCybersecurity';

export const metadata = {
  title: 'Certifications',
  description: 'Certifications achieved by KAUSHAL GUPTA',
  author: 'Kaushal Gupta',
};

export default function page() {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-4 bg-purple-100/50 pt-10'>
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
        certificate={IBM}
        name={'IBM JavaScript Backend Developer'}
      />

      <BasicModalCarousel
        certificate={GoogleCybersecurity}
        name={'Google Cybersecurity'}
      />
    </div>
  );
}
