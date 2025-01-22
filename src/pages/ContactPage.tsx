
import { useEffect, useState } from "react";
import Email from "../assets/Email";
import GitHubLogo from "../assets/GitHubLogo";
import LinkedInLogo from "../assets/LinkedInLogo";
import useVisibility from "../hooks/useVisibility";

function ContactPage() {
  const { ref, isVisible } = useVisibility();
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("joonasheikura1@gmail.com")
        .then(() => {
            alert("Email copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
  };

  const [size, setSize] = useState(50);

  useEffect(() => {
    const updateSize = () => {
      setSize(window.innerWidth < 768 ? 40 : 50);
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="md:snap-start justify-center md:justify-center h-full flex flex-col p-6 md:p-20 lg:p-32 md:gap-12 gap-12" id="contact">
      <div>
        <h1 ref={ref}
                className={`text-xl md:text-2xl lg:text-2xl xl:text-3xl relative w-[max-content] before:absolute before:inset-0 before:bg-white dark:before:bg-dark ${
                  isVisible ? 'before:animate-goodbyeWriter' : ''
            }`}>
              Thank You for Visiting
          </h1>
      </div>
      <div ref={ref} className={`flex flex-col text-md md:text-xl lg:text-xl 2xl:text-2xl gap-10`}>
        <p>
          I appreciate you taking the time to explore my portfolio. 
          If you have any questions, feedback, or job inquiries, feel free to contact me from any of the channels below. 
        </p>
      </div>
      <div>
        <ul className="flex gap-8 text-white items-center">
          <li className="cursor-pointer" onClick={copyEmailToClipboard}><Email size={size-8}/></li>
          <li className=""><a target='_blank' href="https://github.com/joonashkra"><GitHubLogo size={size-8}/></a></li>
          <li className=""><a target='_blank' href="https://www.linkedin.com/in/joonas-heikura-95a837307/"><LinkedInLogo size={size-4}/></a></li>
        </ul>
      </div>
    </div>
  )
}

export default ContactPage