import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Faq, LandingPage, Team } from "./Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/team",
    element: <Team />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
