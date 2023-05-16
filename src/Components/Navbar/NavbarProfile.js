import React from "react";
// import { RiLogoutCircleRLin } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";

const NavbarProfile = ({ logout, user }) => {
  return (
    <div>
      <div
        tabIndex={0}
        className="dropdown-content card card-compact bg-indigo-950 md:w-72 p-2 shadow   text-primary-content"
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
          <h3 className="card-title">{user ? user.displayName : " name "}</h3>
          <p className="">{user ? user.email : "email"}</p>

          <button
            onClick={logout}
            className="btn btn-ghost text-white  hover:border-solid hover:border-2 hover:border-sky-500 px-2  btn-circle  indicator flex justify-center "
          >
            <TbLogout className="text-white text-2xl" />
            <span className="px-1">logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarProfile;
