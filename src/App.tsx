import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <div className="h-screen flex flex-col bg-dark text-white">
      <div className="flex items-center bg-black py-5 justify-center">
        <h1 className='text-xl sm:text-3xl'>joonashkra.github.io</h1>
      </div>
      <div className="snap-both snap-mandatory snap-center snap-always overflow-y-scroll h-screen no-scrollbar">
        <WelcomePage />
        <ProjectPage />
        <AboutPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
