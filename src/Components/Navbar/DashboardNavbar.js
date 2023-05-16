import { Bars2Icon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import NavbarProfile from "./NavbarProfile";

const DashboardNavbar = () => {
  const { user, logout } = useContext(AuthContext);

  const menu = (
    <>
      <li>
        <Link to={"/dashboard/reports"}> Reports </Link>
      </li>
      <li>
        <Link to={"/dashboard/open-a-ticket"}> Open a ticket </Link>
      </li>
      <li>
        <Link to={"/dashboard/onboarding-form"}> Onboarding form </Link>
      </li>
      <li>
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
              <Bars2Icon className="text-white w-1/2" />
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
        </div>

        <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <ImProfile className="text-black w-1/2" />
            </label>
            <NavbarProfile user={user} logout={logout} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
