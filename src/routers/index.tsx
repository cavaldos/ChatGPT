import { createBrowserRouter } from "react-router-dom";

import Home from "~/pages/home";

export default createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
]);
