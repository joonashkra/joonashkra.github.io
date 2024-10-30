

function AboutPage() {

  return (
    <div className='snap-start h-full flex flex-col p-8 sm:p-32 justify-center gap-12' id="about">
      <h1 className='text-2xl sm:text-3xl'>About Me</h1>
      <div className='flex flex-col text-lg sm:text-2xl gap-10'>
        <p>
          I am currently in my third year as an IT Engineering student at Vaasa University of Applied Sciences. 
          My primary focus has been in web development, with additional interests in networking and related fields.
        </p>
        <p>
          In addition to coding, my hobbies include playing guitar, reading, and engaging in various forms of exercise and outdoor activities.
        </p>
        <p>
          My most recent work experience was at telecommunications company DNA Oyj, where I held the position of a salesman. 
          I am actively seeking new job opportunities and internship positions in software engineering or other IT-related fields.
        </p>
      </div>
    </div>
  )
}

export default AboutPage