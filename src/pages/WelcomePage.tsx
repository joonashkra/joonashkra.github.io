import { ArrowDown } from "../assets/ArrowDown";
import useVisibility from "../hooks/useVisibility";

function WelcomePage() {
  const { ref, isVisible } = useVisibility();

  return (
    <div
      className="md:snap-start h-full flex flex-col p-6 sm:p-20 md:p-32 gap-8 justify-center"
      id="home"
    >
      <h1
        ref={ref}
        className={`text-2xl lg:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-offwhite dark:before:bg-dark ${
          isVisible ? "before:animate-sixStepWriter" : ""
        }`}
      >
        Hello,
      </h1>
      <div
        ref={ref}
        className={`flex flex-col text-md sm:text-xl gap-12 md:gap-20 animate-fade ${
          isVisible ? "animate-fade" : "opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 lg:text-xl 2xl:text-2xl ">
          <p>
            My name is{" "}
            <span className="dark:text-lightblue text-blue">
              Joonas Heikura
            </span>
            . I'm a 22-year-old{" "}
            <span className="dark:text-lightblue text-blue">
              IT engineering student
            </span>{" "}
            from Vaasa, Finland.
          </p>
          <p>
            This is my personal portfolio website, where you can find
            comprehensive information about my{" "}
            <span className="dark:text-lightblue text-blue">background</span>,
            interests, and{" "}
            <span className="dark:text-lightblue text-blue">skills</span>, as
            well as my{" "}
            <span className="dark:text-lightblue text-blue">contact </span>
            information.
          </p>
        </div>
        <div className="animate-bounce flex flex-col h-full items-center gap-5 md:hidden">
          <ArrowDown size={24} />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
