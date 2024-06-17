import React from 'react'
import ReactLogo from '../assets/ReactLogo'
import TailwindLogo from '../assets/TailwindLogo'
import { JSLogo } from '../assets/JSLogo'
import { TSLogo } from '../assets/TSLogo'
import { NodeJSLogo } from '../assets/NodeJsLogo'
import SkillCard from '../components/SkillCard'

function SkillsPage() {

  const projects = [
    {
      title: "NoteVault",
      description: "Note Taking / To-Do Web Application. Made with React (Vite), TypeScript, TailwindCSS, React Router, Zustand and Firebase.",
      link: "https://github.com/joonashkra/note-app/"
    },
    {
      title: "Pet Clinic",
      description: "Web application for a veterinary clinic. A school project for a front-end course made using React and Bootstrap CSS.",
      link: "https://github.com/joonashkra/pet-app"
    }
  ]

  return (
    <div className='snap-start h-full flex flex-col m-8 sm:m-32 justify-between gap-20' id="skills">
    <h1 className='text-2xl sm:text-3xl mt-10'>Skills & Projects</h1>
    <ul className='flex justify-evenly'>
      {projects.map((project, index) => (
          <li key={index} className='w-1/3 flex flex-col gap-5 p-4 rounded-md bg-black/25 justify-between'>
            <SkillCard title={project.title} description={project.description} link={project.link} />
          </li>
      ))}
    </ul>
    <div className='flex text-lg sm:text-2xl gap-10 items-center justify-between mb-10'>
      <ReactLogo size={100}/>
      <JSLogo size={100}/>
      <TSLogo size={100}/>
      <NodeJSLogo size={130}/>
      <TailwindLogo size={120}/>
    </div>
  </div>
  )
}

export default SkillsPage