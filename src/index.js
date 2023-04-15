import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Faculties from "./pages/Faculties";
import Candidates from "./pages/Candidates";
import { Clubs } from "./pages/Clubs";
import { Obuch } from "./pages/Obuch.js";
import Loader from "./components/Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Faculties",
    element: <Faculties />,
  },
  {
    path: "/candidates/:facultyId",
    element: <Candidates />,
  },
  {
    path: "Clubs",
    element: <Clubs />,
  },
  {
    path: "/candidates/:facultyId",
    element: <Candidates />,
  },
  {
    path: "OOO",
    element: <Obuch />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
