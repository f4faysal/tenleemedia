import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import DashboardLayout from "../Layout/DashboardLayout";
import AsminDashborard from "../Pages/Admin/AsminDashborard";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
import BookaCallWithYourAccountManager from "../Pages/Menu-page/BookaCallYourAM/BookaCallWithYourAccountManager";
import OnboardingForm from "../Pages/Menu-page/OnboardingForm/OnboardingForm";
import OpenaTicket from "../Pages/Menu-page/OpenaTicket/OpenaTicket";
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/admin",
        element: <AsminDashborard/>,
      },
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
      {
        path: "/dashboard/open-a-ticket",
        element: <OpenaTicket />,
      },
      {
        path: "/dashboard/onboarding-form",
        element: <OnboardingForm />,
      },
      {
        path: "/dashboard/book-a-call-with-your-account-manager",
        element: <BookaCallWithYourAccountManager />,
      },
    ],
  },
]);

export default router;
