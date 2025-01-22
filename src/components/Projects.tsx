
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
      description: "React + Express web application",
      link: "https://github.com/joonashkra/note-app/"
    },
    {
      title: "Hotel App",
      year: 2024,
      description: "React + ASP.NET web application",
      link: "https://github.com/joonashkra/hotel-app"
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
  ];

  return (
    <div className={`flex flex-col justify-start md:justify-center md:w-1/2 h-full gap-4 ${content === 'skills' ? 'md:flex hidden' : ''}`}>
      <div className="flex justify-between items-center">
        <h1
          ref={ref}
          className={`text-2xl lg:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-white dark:before:bg-dark ${isVisible ? 'before:animate-eightStepWriter' : ''}`}
        >
          Projects
        </h1>
        <button onClick={() => setContent('skills')} className='animate-pulse md:hidden'>
          <Switch size={24} />
        </button>
      </div>
      <div
        className={`flex flex-col gap-2 animate-fadeIn text-sm lg:text-md xl:text-lg`}
      >
        <p>
          Below are listed some of the projects I have undertaken over time.
        </p>
        <ProjectList projects={projects} />
      </div>
    </div>
  )
}

export default Projects