import useVisibility from "../hooks/useVisibility";

function AboutPage() {
  const { ref, isVisible } = useVisibility();

  return (
    <div className='md:snap-start h-full flex flex-col p-6 sm:p-24 md:p-32 justify-start md:justify-center gap-6 md:gap-12' id="about">
      <h1 ref={ref}
              className={`text-2xl lg:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-dark ${
                isVisible ? 'before:animate-eightStepWriter' : ''
            }`}>
          About Me
      </h1>
      <div ref={ref} className={`flex flex-col text-sm sm:text-lg lg:text-xl 2xl:text-2xl gap-6 md:gap-10`}>
        <p>
          I am currently in my third year of studies pursuing a degree in <span className="text-lightblue">Information Techonology</span> engineering. 
          My primary area of interest is <span className="text-lightblue">web development</span>, with additional interests in <span className="text-lightblue">networking</span> and related fields.
        </p>
        <p>
          My most recent work experience was at telecommunications company <span className="text-lightblue">DNA Oyj</span>, where I held the position of a <span className="text-lightblue">sales representative</span>. 
          I'm actively seeking new job and internship opportunities in software engineering or other IT-related fields.
        </p>
        <p>
          In my free time, I engage in activities such as playing the <span className="text-lightblue">guitar</span>, participating in various forms of <span className="text-lightblue">exercise</span> and
           outdoor activities, <span className="text-lightblue">reading</span>, and working on personal <span className="text-lightblue">coding</span> projects.
        </p>
      </div>
    </div>
  )
}

export default AboutPage