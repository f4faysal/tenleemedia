import {
  ArrowRightCircleIcon,
  UserIcon
} from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);



  console.log(user);
  return (
    <div className=" bg-black">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
         
        </div>
        <Link className="navbar-center justify-center">
          <img
            className=" w-20 md:w-2/5 "
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
