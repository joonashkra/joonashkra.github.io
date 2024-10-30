
import ProjectList from '../components/ProjectList'
import SkillTable from '../components/SkillTable'


function SkillsPage() {

  const projects = [
    {
      title: "To-Do App",
      year: 2024,
      description: "Web Application made with MERN-stack",
      link: "https://github.com/joonashkra/note-app/"
    },
    {
      title: "FullStack Open",
      year: 2024,
      description: "Modern web development MOOC by University of Helsinki",
      link: "https://github.com/joonashkra/fullstackopen/"
    },
    {
      title: "Checkers Game",
      year: 2024,
      description: "C# Console-App implementation of Classic Checkers",
      link: "https://github.com/joonashkra/checkers/"
    }
  ]

  return (
    <div className='snap-start h-full flex px-32 items-center' id="skills">
      <div className='flex gap-20 justify-between'>
        <div className='flex flex-col w-1/2 h-full gap-4'>
          <h1 className='text-2xl sm:text-3xl mt-10'>Skills</h1>
          <p>Here are some of the skills I have learned over time from either personal projects or through university / online courses.</p>
          <SkillTable />
        </div>
        <div className='flex flex-col w-1/2 gap-4'>
          <h1 className='text-2xl sm:text-3xl mt-10'>Projects</h1>
          <p>Below is a list of projects I have undertaken over the years, some of which may still be in progress, presented in no particular order.</p>
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  )
}

export default SkillsPage