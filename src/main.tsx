
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import WelcomePage from './pages/WelcomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ProjectPage from './pages/ProjectPage.tsx';
import ContactPage from './pages/ContactPage.tsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: "/",
            element: <WelcomePage />,
        },
        {
            path: "/about",
            element: <AboutPage />,
        },
        {
            path: "/projects",
            element: <ProjectPage />,
        },
        {
            path: "/contact",
            element: <ContactPage />,
        },
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <div>
        <RouterProvider router={router} />
    </div>
  )