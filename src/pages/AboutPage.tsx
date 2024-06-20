

function AboutPage() {

  return (
    <div className='snap-start h-full flex flex-col p-8 sm:p-32 justify-center gap-20' id="about">
      <h1 className='text-2xl sm:text-3xl'>About Me</h1>
      <div className='flex flex-col text-lg sm:text-2xl gap-10'>
        <p>
          I will soon start my thrid year as an IT Engineering student at Vaasa University of Applied Sciences. 
          My main point of focus so far has been in web development, but I also have interest in mobile app development, cybersecurity and networking.
        </p>
        <p>
          My other hobbies besides coding include e.g. playing guitar, and many forms of excercise and outdoor stuff.
        </p>
      </div>
    </div>
  )
}

export default AboutPage