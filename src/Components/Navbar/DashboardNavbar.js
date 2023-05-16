import { useContext, useState } from "react";
import { ImProfile } from "react-icons/im";
import { RxDropdownMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import NavbarProfile from "./NavbarProfile";

const DashboardNavbar = () => {
  const { user, logout } = useContext(AuthContext);

  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
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

  console.log(user);
  return (
    <div className="h-16 w-full bg-slate-300">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown block lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <RxDropdownMenu className="text-black text-2xl" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-indigo-950 rounded-box w-52 text-white"
            >
              {menuitem}
            </ul>
          </div>
        </div>

        <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <ImProfile className="text-black text-xl" />
            </label>
            <NavbarProfile user={user} logout={logout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
