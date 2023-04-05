import {
  ArrowRightCircleIcon,
  Bars2Icon,
  BellAlertIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  console.log(user);
  return (
    <div className=" bg-[url('https://tenleemedia.com/wp-content/uploads/2021/07/tenleemedia-slide.jpg')] bg-cover">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg> */}
              <Bars2Icon className="text-white w-1/2" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center justify-center">
          <img
            className="w-2/5"
            src="https://tenleemedia.com/wp-content/uploads/2020/12/tenleemedia-website-logo.png"
            alt=""
          />{" "}
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg> */}
            <MagnifyingGlassCircleIcon className="text-white w-1/2" />
          </button>
          <button
            className="btn btn-ghost btn-circle  "
            
          >
            <div className="indicator flex justify-center tooltip tooltip-bottom" data-tip="notification">
              <BellAlertIcon className="text-white w-1/2 " />
              {/* <hr className="border-gray-200" /> */}
              <span className="badge badge-xs badge-primary indicator-item">
                10
              </span>
            </div>
          </button>

          {user?.email ? (
            <>
              <button onClick={logout} className="btn btn-ghost btn-circle">
                <div
                  className="indicator flex justify-center tooltip tooltip-bottom "
                  data-tip="Log Out"
                >
                  <ArrowRightCircleIcon className="text-white w-1/2" />
                </div>
              </button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
