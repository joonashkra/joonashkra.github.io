

function WelcomePage() {
  return (
    <div className='snap-start h-full flex flex-col p-8 sm:p-32 justify-center gap-12' id="home">
        <h1 className='text-2xl sm:text-3xl'>Hello,</h1>
        <div className='flex flex-col text-lg sm:text-2xl gap-10'>
          <p>
            My name is Joonas Heikura. I'm a 22-year-old Software Engineering student. 
          </p>
          <p>
            This portfolio website provides comprehensive information about my background, interests, 
            and skills, as well as my contact information for potential job opportunities, inquiries, or feedback. 
          </p>
        </div>
    </div>
  )
}

export default WelcomePage