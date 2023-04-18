import {
  ArrowRightCircleIcon,
  Bars2Icon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const menu = (
    <>
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
    </>
  );

  console.log(user);
  return (
    <div className=" bg-[url('https://tenleemedia.com/wp-content/uploads/2021/07/tenleemedia-slide.jpg')] bg-cover">
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
        <Link to={"/"} className="navbar-center justify-center">
          <img
            className="w-2/5"
            src="https://tenleemedia.com/wp-content/uploads/2020/12/tenleemedia-website-logo.png"
            alt=""
          />{" "}
        </Link>
        <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <UserIcon className="text-white w-1/2" />
            </label>

            <div
              tabIndex={0}
              className="dropdown-content card card-compact md:w-72 p-2 shadow bg-primary text-primary-content"
            >
              <div className="card-body items-center">
                <div className="avatar">
                  <div className="w-20 rounded-full">
                    <img
                      src={
                        user && user.photoURL
                          ? user.photoURL
                          : "https://i.ibb.co/RTpNtp8/icon-01.png"
                      }
                      alt="hi"
                    />
                  </div>
                </div>
                <h3 className="card-title">
                  {user ? user.displayName : " name "}
                </h3>
                <p className="">{user ? user.email : "email"}</p>
                {user?.email ? (
                  <>
                    <button
                      onClick={logout}
                      className="btn btn-ghost text-white  btn-circle  indicator flex justify-center "
                    >
                      <ArrowRightCircleIcon className="text-white w-10 " />

                      <span className="px-1">logout</span>
                    </button>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>

          {/* <button className="btn btn-ghost btn-circle  ">
            <div
              className="indicator flex justify-center tooltip tooltip-bottom"
              data-tip="notification"
            >
              <BellAlertIcon className="text-white w-1/2 " />

              <span className="badge badge-xs badge-primary indicator-item">
                10
              </span>
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
