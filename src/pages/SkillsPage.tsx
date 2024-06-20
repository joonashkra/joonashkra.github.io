
import ProjectList from '../components/ProjectList'
import SkillTable from '../components/SkillTable'


function SkillsPage() {

  const projects = [
    {
      title: "NoteVault",
      year: 2024,
      description: "Note Taking / To-Do Web Application. Made with React (Vite), TypeScript, TailwindCSS, React Router, Zustand and Firebase.",
      link: "https://github.com/joonashkra/note-app/"
    },
    {
      title: "Pet Clinic",
      year: 2023,
      description: "Web application for a veterinary clinic. A school project for a front-end course made using React and Bootstrap CSS.",
      link: "https://github.com/joonashkra/pet-app"
    }
  ]

  return (
    <div className='snap-start h-full flex px-32 items-center' id="skills">
      <div className='flex gap-20 justify-between'>
        <div className='flex flex-col w-1/2 h-full gap-4'>
          <h1 className='text-2xl sm:text-3xl mt-10'>Skills</h1>
          <SkillTable />
        </div>
        <div className='flex flex-col w-1/2 gap-4'>
          <h1 className='text-2xl sm:text-3xl mt-10'>Projects</h1>
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  )
}

export default SkillsPage