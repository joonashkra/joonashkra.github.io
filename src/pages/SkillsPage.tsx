import { useState } from "react";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function SkillsPage() {
  const [content, setContent] = useState("skills");

  return (
    <div
      className="md:snap-start md:justify-center h-full flex p-6 md:p-20 md:gap-20"
      id="skills"
    >
      <Skills content={content} setContent={setContent} />
      <Projects content={content} setContent={setContent} />
    </div>
  );
}

export default SkillsPage;
