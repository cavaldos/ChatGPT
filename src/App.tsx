import React from "react";
import { RouterProvider } from "react-router-dom";
import routers from "./routers/index.jsx";

const App: React.FC = () => {
  return (
    <>
      <div className="  bg-[#121213] min-h-[100vh] w-[100vw]">
        <RouterProvider router={routers} />
      </div>
    </>
  );
};

export default App;
