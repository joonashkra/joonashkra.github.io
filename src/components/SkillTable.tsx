import ReactLogo from '../assets/ReactLogo'
import TailwindLogo from '../assets/TailwindLogo'
import { JSLogo } from '../assets/JSLogo'
import { NodeJSLogo } from '../assets/NodeJsLogo'
import SkillBar from '../components/SkillBar'

function SkillTable() {
  return (
    <table className='flex flex-col gap-10 p-4 rounded-md bg-black/25 w-full'>
          <tr className='flex items-center gap-5'>
            <td>
              <ReactLogo size={50}/>
            </td>
            <td className='w-full'>
              <SkillBar title='React' level={60} color='#00D8FF'/>
            </td>
          </tr>
          <tr className='flex items-center gap-5'>
            <td>
              <JSLogo size={50}/>
            </td>
            <td className='w-full'>
              <SkillBar title='JavaScript / TypeScript' level={50} color='#f0db4f'/>
            </td>
          </tr>
          <tr className='flex items-center gap-5'>
            <td>
              <TailwindLogo size={50}/>
            </td>
            <td className='w-full'>
             <SkillBar title='CSS / TailwindCSS' level={75} color='#06b6d4'/>
            </td>
          </tr>
          <tr className='flex items-center gap-5'>
            <td>
              <NodeJSLogo size={50}/>
            </td>
            <td className='w-full'>
              <SkillBar title='NodeJS / Express' level={30} color='#66a060'/>
            </td>
          </tr>
        </table>
  )
}

export default SkillTable