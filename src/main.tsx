import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import SkillsPage from "./pages/SkillsPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";

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
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div>
    <RouterProvider router={router} />
  </div>,
);
