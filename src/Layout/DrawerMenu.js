import React, { useState } from "react";
import { TfiAngleDown, TfiMagnet } from "react-icons/tfi";
import { Link } from "react-router-dom";
import CollapsedMenu from "./CollapsedMenu";
const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const toggleMenu = (item) => {
    setActiveItem(item);
    setIsOpen(!isOpen);
  };

  const menuitem = (
    <>
      {" "}
      <li
        className={` ${activeItem === "Reports" ? "bg-black text-white" : ""}`}
        onClick={() => handleItemClick("Reports")}
      >
        <Link to={"/dashboard/reports"}> Reports </Link>
      </li>
      <li
        className={` ${
          activeItem === "Open a ticket" ? "bg-black text-white" : ""
        }`}
        onClick={() => handleItemClick("Open a ticket")}
      >
        <Link to={"/dashboard/open-a-ticket"}> Open a ticket </Link>
      </li>
      <li
        className={` ${
          activeItem === "onboarding-form" ? "bg-black text-white" : ""
        }`}
        onClick={() => handleItemClick("onboarding-form")}
      >
        <Link to={"/dashboard/onboarding-form"}> Onboarding form </Link>
      </li>
      <li
        className={` ${
          activeItem === "account manager" ? "bg-black text-white" : ""
        }`}
        onClick={() => handleItemClick("account manager")}
      >
        <Link to={"/dashboard/book-a-call-with-your-account-manager"}>
          {" "}
          Book a call with your account manager{" "}
        </Link>
      </li>
    </>
  );

  return (
    <div
      className="drawer-side"
      style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}
    >
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

      <aside className="bg-base-200 w-80">
        <div className="h-4"></div>
        <ul className="menu menu-compact flex flex-col p-0 px-4 gap-1">
          {/* <!-- Sidebar content here --> */}

          {menuitem}

          <li
            className={` ${
              activeItem === "Admin Dashborard" ? "bg-black text-white" : ""
            }`}
            onClick={() => toggleMenu("Admin Dashborard")}
          >
            <Link to={"/dashboard/admin"}>
              {" "}
              Admin Dashborard
              {activeItem === "Admin Dashborard" ? (
                <TfiAngleDown />
              ) : (
                <TfiMagnet />
              )}
            </Link>

            {/* <button className="p-2 rounded-md bg-gray-500 text-white">
            </button> */}
          </li>
        </ul>
        <CollapsedMenu isOpen={isOpen} />
      </aside>
    </div>
  );
};

export default DrawerMenu;
