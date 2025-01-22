import ReactLogo from '../assets/ReactLogo'
import CSSLogo from '../assets/CSSLogo'
import { NodeJSLogo } from '../assets/NodeJsLogo'
import SkillBar from '../components/SkillBar'
import CSharpLogo from '../assets/CSharpLogo'
import { useEffect, useState } from 'react'
import TSLogo from '../assets/TSLogo'

function SkillTable() {

  const [size, setSize] = useState(50);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth < 768 ? 35 : 45);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <table className='flex flex-col gap-10 p-2 mt-2 rounded-md w-full'>
      <tbody className='flex flex-col gap-11'>
          <tr className='flex items-center gap-5'>
            <td>
              <TSLogo size={size} />
            </td>
            <td className='w-full'>
              <SkillBar title='TypeScript / JavaScript' maxLevel={60} color='#007acc'/>
            </td>
          </tr>
          <tr className='flex items-center gap-5'>
            <td>
              <ReactLogo size={size}/>
            </td>
            <td className='w-full'>
              <SkillBar title='React' maxLevel={70} color='#62dafc'/>
            </td>
          </tr>
          <tr className='flex items-center gap-5'>
            <td>
              <NodeJSLogo size={size}/>
            </td>
            <td className='w-full'>
              <SkillBar title='NodeJS / Express' maxLevel={50} color='#549d44'/>
            </td>
          </tr>
          <tr className='flex items-center gap-5'>
            <td>
              <CSharpLogo size={size} />
            </td>
            <td className='w-full'>
              <SkillBar title='C# / .NET' maxLevel={35} color='#a179dc'/>
            </td>
          </tr>
          <tr className='flex items-center gap-5'>
            <td>
              <CSSLogo size={size}/>
            </td>
            <td className='w-full'>
             <SkillBar title='CSS' maxLevel={55} color='#1c88c7'/>
            </td>
          </tr>
        </tbody>
    </table>
  )
}

export default SkillTable