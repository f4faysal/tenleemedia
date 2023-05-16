import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import DrawerMenu from "./DrawerMenu";

const DashboardLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <div className="h-4"></div>
          <Outlet />
        </div>
        <DrawerMenu />
      </div>
    </div>
  );
};

export default DashboardLayout;
