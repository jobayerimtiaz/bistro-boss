import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";

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
        path: "menu",
      },
      {
        element: <Order></Order>,
        path: "order",
      },
      {
        element: <Order></Order>,
        path: "order/:category",
      },
      {
        element: <Login></Login>,
        path: "login",
      },
    ],
  },
]);
