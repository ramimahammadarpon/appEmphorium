import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink className="font-semibold" to="/">
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold" to="/profile">
          My Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-300 shadow-sm lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-200 text-primary rounded-box z-1 mt-3 w-52 space-y-2 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <p className="font-light text-xl text-primary">
          App<span className="font-bold text-secondary">Emporium</span>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-primary px-1 space-x-9">{links}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center gap-1">
            <img className="w-12" src={user} alt="" />
            <a className="btn btn-primary text-accent">Login</a>
            </div>
      </div>
    </div>
  );
};

export default Navbar;
