import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Login/Signup";
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
            <Home></Home>{" "}
          </PrivateRoute>
        ),
      },
      // {
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


  // {
  //   path: "/dashboard",
  //   element: (
  //     <PrivateRoute>
  //       {" "}
  //       <DashboardLayout></DashboardLayout>{" "}
  //     </PrivateRoute>
  //   ),
  //   children: [
  //     {
  //       path: "/dashboard/voters-info",
  //       element: <VotersInfo />,
  //     },
  //     {
  //       path: "/dashboard/add-voter-info",
  //       element: <AddVoterInfo />,
  //     },
  //     {
  //       path: "/dashboard/search-voter-status",
  //       element: <SearchVoterStatus />,
  //     },
  //     {
  //       path: "/dashboard/unvoted-voter",
  //       element: <UnVotedVoter />,
  //     },
  //     {
  //       path: "/dashboard/voted-voter",
  //       element: <VotedVoter />,
  //     },
  //   ],
  // },
]);

export default router;