import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}

          <div className="h-4"></div>
          <Outlet></Outlet>
        </div>
        <div
          className="drawer-side"
          style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}
        >
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <aside className="bg-base-200 w-80">
            <div className="h-4"></div>
            <ul className="menu menu-compact flex flex-col p-0 px-4 gap-1">
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link to={"/dashboard/reports"}> Reports </Link>
              </li>
              <li>
                <Link> Open a ticket </Link>
              </li>
              <li>
                <Link> Onboarding form </Link>
              </li>
              <li>
                <Link> Book a call with your account manager </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
