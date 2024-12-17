
import NavBar from './components/NavBar';
import ProgBar from './components/ProgBar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/SkillsPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <div className="h-screen flex flex-col bg-dark text-white">
      <NavBar />
      <div className='h-1 md:h-1.5 bg-gray mb-1.5'></div>
      <ProgBar />
      <div className="scroll-container overflow-x-hidden">
        <WelcomePage />
        <AboutPage />
        <ProjectPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
