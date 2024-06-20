import { useState } from 'react'

type SkillCardProps = {
    title: string,
    description: string
    link: string
}

function ProjectCard({title, description, link}: SkillCardProps) {

  const [descriptionStyles, setDescriptionStyles] = useState("text-xl")

  const handleDescription = (show: boolean) => {
    if(show) setDescriptionStyles("text-xl h-full")
    else setDescriptionStyles("text-xl")
  }

  return (
    <div className='flex flex-col gap-2' onMouseOver={() => handleDescription(true)} onMouseLeave={() => handleDescription(false)}>
      <h2 className='text-2xl' >{title}</h2>
      <p className={descriptionStyles}>
        {description}
      </p>
      <a href={link} className='text-blue text-xl'>Go to GitHub Repository</a>
    </div>
  )
}

export default ProjectCard