import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

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
      {
        element: <SignUp></SignUp>,
        path: "signUp",
      },
      {
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
        path: "secret",
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
    ],
  },
]);
