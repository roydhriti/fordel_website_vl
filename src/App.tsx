import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import HomeBuyingProgramPage from "./pages/HomeBuyingProgramPage/HomeBuyingProgramPage";
import HomePage from "./pages/HomePage/HomePage";
import VaLoansPage from "./pages/VALoansPage/VALoansPage";
import LayoutPage from "./pages/LayoutPage/LayoutPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LayoutPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/VaLoansPage",
          element: <VaLoansPage />,
        },
        {
          path: "/AboutUsPage",
          element: <AboutUsPage />,
        },
        {
          path: "/HomeBuyingProgramPage",
          element: <HomeBuyingProgramPage />,
        },

        {
          path: "*", // Catch-all route for non-existent paths
          element: <HomePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
