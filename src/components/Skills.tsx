
import useVisibility from "../hooks/useVisibility";
import Switch from '../assets/Switch';
import SkillTable from './SkillTable';

type SkillsProps = {
  content: string;
  setContent: (content: string) => void;
}

function Skills({ content, setContent }: SkillsProps) {

  const { ref, isVisible } = useVisibility();

  return (
    <div className={`flex flex-col justify-start md:justify-center md:w-1/2 h-full gap-4 ${content !== 'skills' ? 'md:flex hidden' : 'md:flex'}`}>
      <div className="flex justify-between items-center">
        <h1
          ref={ref}
          className={`text-2xl lg:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-dark ${isVisible ? 'before:animate-sixStepWriter' : ''}`}
        >
          Skills
        </h1>
      <button onClick={() => setContent('projects')} className='md:hidden animate-pulse'>
          <Switch size={25} />
        </button>
      </div>
      <div
        className={`flex flex-col gap-6 animate-fadeIn text-sm md:text-md lg:text-md xl:text-lg md:text-md`}
      >
        <p>
          Below is an overview of the skills I have developed over time through personal projects,
          university education, and online courses. 
        </p>
        <SkillTable />
      </div>
    </div>
  )
}

export default Skills