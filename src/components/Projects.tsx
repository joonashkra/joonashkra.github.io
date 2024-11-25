
import useVisibility from "../hooks/useVisibility";
import Switch from '../assets/Switch';
import ProjectList from './ProjectList';

type ProjectsProps = {
  content: string;
  setContent: (content: string) => void;
};

function Projects({ content, setContent }: ProjectsProps) {

  const { ref, isVisible } = useVisibility();

  const projects = [
    {
      title: "To-Do App",
      year: 2024,
      description: "MERN-stack web application",
      link: "https://github.com/joonashkra/note-app/"
    },
    {
      title: "FullStack Open",
      year: 2024,
      description: "MOOC by University of Helsinki",
      link: "https://github.com/joonashkra/fullstackopen/"
    },
    {
      title: "Checkers Game",
      year: 2024,
      description: "C# Console-App",
      link: "https://github.com/joonashkra/checkers/"
    },
    {
      title: "Personal Portfolio Website",
      year: 2024,
      description: "This website :)",
      link: "https://github.com/joonashkra/note-app/"
    },
  ];

  return (
    <div className={`flex flex-col justify-center md:justify-start md:w-1/2 h-full gap-4 ${content === 'skills' ? 'md:flex hidden' : ''}`}>
      <div className="flex justify-between items-center">
        <h1
          ref={ref}
          className={`text-2xl md:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-dark ${isVisible ? 'before:animate-eightStepWriter' : ''}`}
        >
          Projects
        </h1>
        <button onClick={() => setContent('skills')} className='animate-fade md:hidden'>
          <Switch />
        </button>
      </div>
      <div
        className={`flex flex-col gap-2 animate-fadeIn text-sm lg:text-lg md:text-md`}
      >
        <p>
          Below is a list of projects I have undertaken over the years, some of which may still be in
          progress, presented in no particular order.
        </p>
        <ProjectList projects={projects} />
      </div>
    </div>
  )
}

export default Projects