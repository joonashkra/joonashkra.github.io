
type SkillCardProps = {
    title: string,
    description: string
    link: string
}

function ProjectCard({title, description, link}: SkillCardProps) {

  return (
    <div className='flex flex-col gap-2'>
      <h2 className="text-xl">{title}</h2>
      <p className="text-lg">
        - {description}
      </p>
      <a target='_blank' href={link} className='text-blue hover:underline'>Go to GitHub Repository</a>
    </div>
  )
}

export default ProjectCard