import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import DashboardLayout from "../Layout/DashboardLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import Reports from "../Pages/Menu-page/Reports/Reports";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            {" "}
            <Home></Home>
          </PrivateRoute>
        ),
      },
      //     {
      //   path: "/login",
      //   element: <Login />,
      // },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },

  {
    path: "/dashboard/reports",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/reports",
        element: <Reports />,
        // loader: () =>
        //   fetch(`http://localhost:5000/test` , {
        //     headers: {
        //       authorization: `bearer ${localStorage.getItem("access-token")}`,
        //     },
        //   }),
      },
    ],
  },
]);

export default router;
