
type SkillCardProps = {
    title: string,
    description: string
    link: string
}

function ProjectCard({title, description, link}: SkillCardProps) {

  return (
    <div className='flex flex-col gap-2'>
      <h2 className="text-md underline underline-offset-2 decoration-blue">{title}</h2>
      <p className="text-sm">
        {description}
      </p>
      <a target='_blank' href={link} className='text-blue hover:underline underline-offset-2 text-sm'>Go to Repository</a>
    </div>
  )
}

export default ProjectCard