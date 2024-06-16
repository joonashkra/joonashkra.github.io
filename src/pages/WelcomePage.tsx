import { ArrowDown } from "../assets/ArrowDown"

function WelcomePage() {
  return (
    <div className='snap-start h-full flex flex-col m-8 sm:m-32 justify-around' id="home">
        <h1 className='text-2xl sm:text-3xl'>Welcome!</h1>
        <div className='flex flex-col text-lg sm:text-2xl gap-10'>
          <p>
            My name is Joonas, I am an IT-student specializing in Software Engineering. 
          </p>
          <p>
            This is my personal portfolio website where you can find information about me and my interests, 
            skills and contant information for possible job inquiries, questions or feedback you would like me to recieve. 
          </p>
        </div>
        <div className='flex flex-col items-center gap-5'>
          <p className='text-lg sm:text-2xl text-center'>Scroll for more!</p>
          <ArrowDown size={34}/>
        </div>
    </div>
  )
}

export default WelcomePage