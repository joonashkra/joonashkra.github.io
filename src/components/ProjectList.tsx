import ProjectCard from "./ProjectCard"

interface Project {
    title: string
    year: number
    description: string
    link: string
}

type ProjectListProps = {
    projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className='flex flex-col gap-10 bg-black/25 p-4 justify-evenly'>
        {projects.map((project, index) => (
            <div key={index}>
            <li className='flex flex-col gap-5'>
                <ProjectCard title={project.title} description={project.description} link={project.link} />
            </li>
            </div> 
        ))}
    </ul>
  )
}

export default ProjectList