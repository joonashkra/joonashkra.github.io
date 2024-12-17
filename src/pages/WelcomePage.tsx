
import { ArrowDown } from "../assets/ArrowDown";
import useVisibility from "../hooks/useVisibility";

function WelcomePage() {
  const { ref, isVisible } = useVisibility()

  return (
    <div className='md:snap-start h-full flex flex-col p-6 sm:p-20 md:p-32 gap-8 justify-center' id="home">
          <h1 ref={ref}
              className={`text-2xl lg:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-dark ${
                isVisible ? 'before:animate-sixStepWriter' : ''
            }`}>
            Hello,
          </h1>
        <div ref={ref} className={`flex flex-col text-md sm:text-xl gap-12 md:gap-20 animate-fade ${
                isVisible ? 'animate-fade' : 'opacity-0'
            }`}>
          <div className="flex flex-col gap-6 lg:text-xl 2xl:text-2xl ">
              <p>My name is Joonas Heikura.</p>
              <p>I'm a 22-year-old IT engineering student from Vaasa, Finland.</p>
              <p>This portfolio website provides comprehensive information about my background, interests, 
                  and skills, as well as my contact information. 
              </p>
          </div>
          <div className="flex flex-col h-full items-center gap-5">
            <p className="text-sm md:text-lg">Scroll for more!</p>
            <div className="animate-bounce">
              <ArrowDown size={22} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default WelcomePage