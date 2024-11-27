import useVisibility from "../hooks/useVisibility";

function AboutPage() {
  const { ref, isVisible } = useVisibility();

  return (
    <div className='md:snap-start h-full flex flex-col p-6 sm:p-24 md:p-32 justify-start md:justify-center gap-6 md:gap-12' id="about">
      <h1 ref={ref}
              className={`text-2xl md:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-dark ${
                isVisible ? 'before:animate-eightStepWriter' : ''
            }`}>
          About Me
      </h1>
      <div ref={ref} className={`flex flex-col text-sm sm:text-lg lg:text-xl gap-6 md:gap-10`}>
        <p>
          I'm currently on my third year of IT engineering studies. 
          My primary focus so far has been in web development, with additional interests in networking and related fields.
        </p>
        <p>
          My most recent work experience was at telecommunications company DNA Oyj, where I held the position of a sales representative. 
          I'm actively seeking new job and internship opportunities in software engineering or other IT-related fields.
        </p>
        <p>
          In my free time, I engage in activities such as playing the guitar, reading, participating in various forms of exercise and
           outdoor activities, and working on personal coding projects.
        </p>
      </div>
    </div>
  )
}

export default AboutPage