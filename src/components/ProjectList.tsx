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
    <ul className='flex flex-col gap-10 p-2 justify-evenly mt-2'>
        {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-2">
                <li className='flex flex-col gap-5'>
                    <ProjectCard title={project.title} description={project.description} link={project.link} />
                </li>
            </div> 
        ))}
    </ul>
  )
}

export default ProjectList