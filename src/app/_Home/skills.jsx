import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLinux,
  FaSquareGithub,
  FaPython,
  FaJava,
} from 'react-icons/fa6';
import {DiNodejs, DiNpm} from 'react-icons/di';
import {
  BiLogoMongodb,
  BiLogoTailwindCss,
  BiLogoDocker,
  BiLogoGit,
} from 'react-icons/bi';
// import {BsBootstrap} from 'react-icons/bs';

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

export default function Skills() {
  const skillSet = [
    {name: 'HTML', img: FaHtml5},
    {name: 'CSS', img: FaCss3Alt},
    {name: 'JavaScript', img: FaJs},
    {name: 'Tailwind', img: BiLogoTailwindCss},
    {name: 'React', img: FaReact},
    {name: 'Node', img: DiNodejs},
    {name: 'Npm', img: DiNpm},
    {name: 'MongoDB', img: BiLogoMongodb},
    {name: 'Docker', img: BiLogoDocker},
    {name: 'Git', img: BiLogoGit},
    {name: 'GitHub', img: FaSquareGithub},
    {name: 'Linux', img: FaLinux},
    {name: 'Python', img: FaPython},
    {name: 'Java', img: FaJava},
    // {name: 'Bootstrap', img: BsBootstrap},
    // { name: 'C', img: 'fa-c' },
  ];

  return (
    <div className='mt-10 p-5'>
      <div className='mb-7 text-center text-5xl font-semibold'>Skills</div>
      <div className='mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3 md:w-9/12 lg:grid-cols-5'>
        {skillSet.map(getSkillBlock)}
      </div>
    </div>
  );
}
