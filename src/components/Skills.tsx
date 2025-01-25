import useVisibility from "../hooks/useVisibility";
import Switch from "../assets/Switch";
import SkillTable from "./SkillTable";

type SkillsProps = {
  content: string;
  setContent: (content: string) => void;
};

function Skills({ content, setContent }: SkillsProps) {
  const { ref, isVisible } = useVisibility();

  return (
    <div
      className={`flex flex-col justify-start md:justify-center md:w-1/2 h-full gap-4 ${content !== "skills" ? "md:flex hidden" : "md:flex"}`}
    >
      <div className="flex justify-between items-center">
        <h1
          ref={ref}
          className={`text-2xl lg:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-offwhite dark:before:bg-dark ${isVisible ? "before:animate-sixStepWriter" : ""}`}
        >
          Skills
        </h1>
        <button
          onClick={() => setContent("projects")}
          className="md:hidden animate-pulse"
        >
          <Switch size={24} />
        </button>
      </div>
      <div
        className={`flex flex-col gap-4 animate-fadeIn text-sm md:text-md lg:text-md xl:text-lg md:text-md`}
      >
        <p>
          Below are listed some of the languages and frameworks I have worked
          with.
        </p>
        <SkillTable />
        <p className="px-2 pt-2">
          I am also familiar with tools and practices such as Git, Docker, and
          CI/CD, along with experience in Linux and an understanding of{" "}
          <a
            title="Link to Credly certification"
            target="_blank"
            href="https://www.credly.com/badges/b2fb17f6-c75f-4157-9613-b5d87f132d3f/public_url"
            className="text-blue dark:text-lightblue hover:underline"
          >
            TCP/IP
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Skills;
