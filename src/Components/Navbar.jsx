import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.photoURL);
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Your Logged Out");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li>
        <NavLink className="font-semibold lg:text-xl" to="/">
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink className="font-semibold lg:text-xl" to="/profile">
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
        <Link to="/" className="font-light text-xl lg:text-3xl text-primary">
          App<span className="font-bold text-secondary">Emporium</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-primary px-1 space-x-9">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link to="/profile" className="flex items-center gap-3">
            <div className="relative group">
              <img
                className="w-8 h-8 rounded-full"
                src={user.photoURL ? user.photURL : userImg}
                alt=""
              />
              <p className="absolute opacity-0 group-hover:opacity-100 text-primary left-1/2 -translate-x-1/2 transition">{user.displayName}</p>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-primary text-accent"
            >
              Logout
            </button>
          </Link>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              to="/authentication/login"
              className="btn btn-primary text-accent"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
