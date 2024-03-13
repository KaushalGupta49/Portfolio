import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLinux,
  FaSquareGit,
  FaSquareGithub,
  FaPython,
  FaJava,
} from 'react-icons/fa6';
import {DiNodejs, DiNpm} from 'react-icons/di';
import {BiLogoMongodb, BiLogoTailwindCss} from 'react-icons/bi';


export default function Skills() {
  const skillSet = [
    {name: 'HTML', img: FaHtml5},
    {name: 'CSS', img: FaCss3Alt},
    {name: 'JavaScript', img: FaJs},
    {name: 'React', img: FaReact},
    {name: 'Linux', img: FaLinux},
    {name: 'Git', img: FaSquareGit},
    {name: 'GitHub', img: FaSquareGithub},
    {name: 'Python', img: FaPython},
    {name: 'Java', img: FaJava},
    {name: 'Node', img: DiNodejs},
    {name: 'Npm', img: DiNpm},
    {name: 'MongoDB', img: BiLogoMongodb},
    { name: 'Tailwind', img: BiLogoTailwindCss },
    // { name: 'C', img: 'fa-c' },
    // { name: 'Bootstrap', img: 'fa-bootstrap' },
  ];

  function getSkillBlock(item, index) {
    return (
      <div className='skillBox' key={index}>
        <div className='skillIcon'>
          <item.img />
        </div>
        <div>{item.name}</div>
      </div>
    );
  }

  return (
    <div className='mt-10 p-5'>
      <div className='mb-7 text-center text-5xl font-semibold'>Skills</div>
      <div className='mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:w-9/12 lg:grid-cols-5'>
        {skillSet.map(getSkillBlock)}
      </div>
    </div>
  );
}
