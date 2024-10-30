import ReactLogo from '../assets/ReactLogo'
import CSSLogo from '../assets/CSSLogo'
import { JSLogo } from '../assets/JSLogo'
import { NodeJSLogo } from '../assets/NodeJsLogo'
import SkillBar from '../components/SkillBar'
import CSharpLogo from '../assets/CSharpLogo'

function SkillTable() {
  return (
    <table className='flex flex-col gap-10 p-2 mt-2 rounded-md w-full'>
      <tbody className='flex flex-col gap-8'>
          <tr className='flex items-center gap-5'>
            <td>
              <JSLogo size={50}/>
            </td>
            <td className='w-full'>
              <SkillBar title='JavaScript / TypeScript' maxLevel={60} color='#f0db4f'/>
            </td>
          </tr>
          <tr className='flex items-center gap-5'>
            <td>
              <ReactLogo size={50}/>
            </td>
            <td className='w-full'>
              <SkillBar title='React' maxLevel={65} color='#00D8FF'/>
            </td>
          </tr>
          <tr className='flex items-center gap-5'>
            <td>
              <NodeJSLogo size={50}/>
            </td>
            <td className='w-full'>
              <SkillBar title='NodeJS / Express' maxLevel={40} color='#66a060'/>
            </td>
          </tr>
          <tr className='flex items-center gap-5'>
            <td>
              <CSSLogo size={50}/>
            </td>
            <td className='w-full'>
             <SkillBar title='CSS' maxLevel={50} color='#06b6d4'/>
            </td>
          </tr>
          <tr className='flex items-center gap-5'>
            <td>
              <CSharpLogo size={50}/>
            </td>
            <td className='w-full'>
              <SkillBar title='C# / .NET' maxLevel={25} color='#0994DC'/>
            </td>
          </tr>
        </tbody>
    </table>
  )
}

export default SkillTable