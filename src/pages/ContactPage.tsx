import Email from "../assets/Email";
import GitHubLogo from "../assets/GitHubLogo";
import LinkedInLogo from "../assets/LinkedInLogo";

function ContactPage() {

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("joonasheikura1@gmail.com")
        .then(() => {
            alert("Email copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
  };

  return (
    <div className='snap-start h-full flex flex-col p-8 sm:p-32 justify-center gap-12' id="contact">
        <h1 className='text-2xl sm:text-3xl'>Thank You for Visiting,</h1>
        <div className='flex flex-col sm:text-2xl gap-20'>
          <p>
            I appreciate you taking the time to explore my portfolio. 
            If you have any questions, feedback, or job inquiries, feel free to contact me from any of the channels below. 
          </p>
            <ul className="flex gap-16 text-white items-center">
              <li className="cursor-pointer" onClick={copyEmailToClipboard}><Email size={50}/></li>
              <li><a target='_blank' href="https://github.com/joonashkra"><GitHubLogo size={40}/></a></li>
              <li><a target='_blank' href="https://www.linkedin.com/in/joonas-heikura-95a837307/"><LinkedInLogo size={45}/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default ContactPage