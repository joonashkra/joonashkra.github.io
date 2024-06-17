import React from 'react'

type SkillCardProps = {
    title: string,
    description: string
    link: string
}

function SkillCard({title, description, link}: SkillCardProps) {
  return (
    <>
      <h2 className='text-2xl'>{title}</h2>
      <p className='text-xl'>
        {description}
      </p>
      <a href={link} className='text-blue text-xl'>Go to GitHub Repository</a>
    </>
  )
}

export default SkillCard