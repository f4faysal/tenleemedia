import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      {/* <Navbar></Navbar> */}
    
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
            <div className="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2  lg:flex ">
              <Link
                to={"/"}
                aria-current="page"
                aria-label="Homepage"
                className="flex-0 btn btn-ghost px-2"
              >
                <div className="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
                  <span className="lowercase">Voting</span>{" "}
                  <span className="text-base-content uppercase">System</span>
                </div>
              </Link>{" "}
              <Link
                to={"/"}
                className="link link-hover font-mono text-xs text-opacity-50"
              >
                <div data-tip="Changelog" className="tooltip tooltip-bottom">
                  2.51.5
                </div>
              </Link>
            </div>
            <div className="h-4"></div>
            <ul className="menu menu-compact flex flex-col p-0 px-4 gap-1">
              {/* <!-- Sidebar content here --> */}
              <li className="">
                <Link to={"/dashboard/voters-info"}> Voters Info</Link>
              </li>
              <li>
                <Link to={"/dashboard/add-voter-info"}> Add Voter Info </Link>
              </li>
              <li>
                <Link to={"/dashboard/search-voter-status"}>
                  {" "}
                  Search Voter Status{" "}
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
