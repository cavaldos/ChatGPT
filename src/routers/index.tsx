import { createBrowserRouter, Outlet } from "react-router-dom";

import Home from "~/pages/home";
import Auth from "~/pages/auth";
const AuthLayout = () => {
  return <Outlet />;
};
export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Auth />,
      },
    ],
  },
]);
