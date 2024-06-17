

function WelcomePage() {
  return (
    <div className='snap-start h-full flex flex-col m-8 sm:m-32 justify-center gap-20' id="home">
        <h1 className='text-2xl sm:text-3xl'>Welcome!</h1>
        <div className='flex flex-col text-lg sm:text-2xl gap-10'>
          <p>
            My name is Joonas, I am an IT-student specializing in Software Engineering. 
          </p>
          <p>
            This is my personal portfolio website where you can find information about me and my interests, 
            skills and my contact information for possible job opportunities or any questions or feedback you would like me to recieve. 
          </p>
        </div>
    </div>
  )
}

export default WelcomePage