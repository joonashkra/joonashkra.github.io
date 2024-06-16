
import NavBar from './components/NavBar';
import ProgBar from './components/ProgBar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectPage from './pages/ProjectPage';
import WelcomePage from './pages/WelcomePage';

function App() {
  return (
    <div className="h-screen flex flex-col bg-dark text-white">
      <NavBar />
      <ProgBar />
      <div className="scroll-container snap-both snap-mandatory snap-center snap-always overflow-y-scroll h-screen no-scrollbar">
        <WelcomePage />
        <AboutPage />
        <ProjectPage />
        <ContactPage />
      </div>
    </div>
  );
}

export default App;
