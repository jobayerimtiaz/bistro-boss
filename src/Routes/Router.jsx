import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        element: <Home></Home>,
        path: "/",
      },
      {
        element: <Menu></Menu>,
        path: "/menu",
      },
    ],
  },
]);
