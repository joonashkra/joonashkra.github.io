
type SkillCardProps = {
    title: string,
    description: string
    link: string
}

function ProjectCard({title, description, link}: SkillCardProps) {

  return (
    <div className='flex flex-col gap-2'>
      <h2 className="text-lg xl:text-xl underline underline-offset-2 decoration-blue dark:decoration-lightblue">{title}</h2>
      <p className="text-md">
        {description}
      </p>
      <a target='_blank' href={link} className='dark:text-lightblue text-blue text-sm w-max hover:underline underline-offset-2'>Go to Repository</a>
    </div>
  )
}

export default ProjectCard