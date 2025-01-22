import useVisibility from "../hooks/useVisibility";

function AboutPage() {
  const { ref, isVisible } = useVisibility();

  return (
    <div className='md:snap-start h-full flex flex-col p-6 sm:p-24 md:p-32 justify-start md:justify-center gap-6 md:gap-12' id="about">
      <h1 ref={ref}
              className={`text-2xl lg:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-white dark:before:bg-dark ${
                isVisible ? 'before:animate-eightStepWriter' : ''
            }`}>
          About Me
      </h1>
      <div ref={ref} className={`flex flex-col text-sm sm:text-lg lg:text-xl 2xl:text-2xl gap-6 md:gap-10`}>
        <p>
          I am currently in my third year of studies pursuing a degree in <span className="dark:text-lightblue text-blue">Information Techonology</span> engineering. 
          My primary area of interest is <span className="dark:text-lightblue text-blue">web development</span>, with additional interests in <span className="dark:text-lightblue text-blue">networking</span> and related fields.
        </p>
        <p>
          My most recent work experience was at telecommunications company <span className="dark:text-lightblue text-blue">DNA Oyj</span>, where I held the position of a <span className="dark:text-lightblue text-blue">sales representative</span>. 
          I'm actively seeking new job and internship opportunities in <span className="dark:text-lightblue text-blue">software engineering</span> or other IT-related fields.
        </p>
        <p>
          In my free time, I engage in activities such as playing the <span className="dark:text-lightblue text-blue">guitar</span>, participating in various forms of <span className="dark:text-lightblue text-blue">exercise</span> and
           outdoor activities, <span className="dark:text-lightblue text-blue">reading</span>, and working on personal <span className="dark:text-lightblue text-blue">coding</span> projects.
        </p>
      </div>
    </div>
  )
}

export default AboutPage