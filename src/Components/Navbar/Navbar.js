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


  console.log(user)
  return (
    <div className="bg-[url('https://tenleemedia.com/wp-content/uploads/2021/07/tenleemedia-slide.jpg')]">
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
          <button className="btn btn-ghost btn-circle">
            <div className="indicator flex justify-center">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg> */}

              <BellAlertIcon className="text-white w-1/2" />
              {/* <hr className="border-gray-200" /> */}
              <span className="badge badge-xs badge-primary indicator-item">
                10
              </span>
            </div>
          </button>

          {user?.email ? (
            <>
              <button onClick={logout} className="btn btn-ghost btn-circle">
                <div className="indicator flex justify-center">
                  <ArrowRightCircleIcon className="text-white w-1/2" />
                </div>
              </button>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} alt="" />
                </div>
              </div>
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
