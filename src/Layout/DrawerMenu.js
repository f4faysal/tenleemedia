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
        className={` rounded-md ${
          activeItem === "Reports" ? "bg-[#40DAF4] text-white" : ""
        }`}
        onClick={() => handleItemClick("Reports")}
      >
        <Link to={"/dashboard/reports"}> Reports </Link>
      </li>
      <li
        className={` rounded-md ${
          activeItem === "Open a ticket" ? "bg-[#40DAF4] text-white" : ""
        }`}
        onClick={() => handleItemClick("Open a ticket")}
      >
        <Link to={"/dashboard/open-a-ticket"}> Open a ticket </Link>
      </li>
      <li
        className={`rounded-md ${
          activeItem === "onboarding-form" ? "bg-[#40DAF4] text-white" : ""
        }`}
        onClick={() => handleItemClick("onboarding-form")}
      >
        <Link to={"/dashboard/onboarding-form"}> Onboarding form </Link>
      </li>
      <li
        className={`rounded-md ${
          activeItem === "account manager" ? "bg-[#40DAF4] text-white" : ""
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

      <aside className="bg-indigo-950  w-72">
        <div className="bg-black z-20 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 lg:flex ">
          <Link
            to={""}
            aria-current="page"
            aria-label="Homepage"
            className="flex-0 btn btn-ghost px-2"
          >
            <div className="w-full">
              <img
                className="w-10 md:w-[20%] "
                src="https://tenleemedia.com/wp-content/uploads/2020/12/tenleemedia-website-logo.png"
                alt=""
              />
            </div>
          </Link>{" "}
          {/* <Link
            to={""}
            className="link link-hover font-mono text-xs text-opacity-50 text-white"
          >
            <div data-tip="Changelog" className="tooltip tooltip-bottom">
              2.51.5
            </div>
          </Link> */}
        </div>
        <div className="h-4"></div>
        <ul className="menu menu-compact flex flex-col p-0 px-4 gap-1 text-white">
          {/* <!-- Sidebar content here --> */}

          {menuitem}

          <li
            className={` rounded-md ${
              activeItem === "Admin Dashborard" 
                ? "bg-black text-white"
                : ""
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
          </li>
        </ul>
        <CollapsedMenu
          isOpen={isOpen}
          activeItem={activeItem}
          handleItemClick={handleItemClick}
        />
      </aside>
    </div>
  );
};

export default DrawerMenu;
