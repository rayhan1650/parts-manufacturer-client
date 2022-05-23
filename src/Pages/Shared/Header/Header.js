import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="navbar bg-base-100 z-50 sticky top-0">
      <div className="navbar-start">
        {/* for dropdown  */}
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>

        {/* website logo  */}
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Manufacturer
        </Link>
      </div>

      {/* for main navigation items  */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>

          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>

      {/* for end nav  */}
      <div className="navbar-end">
        <ul className="menu menu-horizontal p-0">
          <li>
            {user ? (
              <p>
                <span className="font-bold">{user.displayName}</span>
                <button onClick={logout}>Log Out</button>
              </p>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
