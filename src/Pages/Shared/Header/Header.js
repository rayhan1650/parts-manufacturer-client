import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import Loading from "../Loading/Loading";

const Header = ({ displayName }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const dashboardURL = location.pathname.includes("/dashboard");
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  if (loading) {
    return <Loading />;
  }

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

            {user && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}

            <li>
              {user ? (
                <p onClick={logout} className="border">
                  <span className="font-bold text-secondary">
                    {displayName || user?.displayName}
                  </span>
                  Log Out
                </p>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>

        {/* website logo  */}
        <Link
          to="/"
          className="btn btn-ghost normal-case text-primary font-bold text-xl"
        >
          CAR-PARTS
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

          {user && (
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          )}
        </ul>
      </div>
      {/* for end nav  */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            {user ? (
              <p onClick={logout} className="border">
                <span className="font-bold text-secondary">
                  {displayName || user?.displayName}
                </span>
                Log Out
              </p>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
      {/* dashboard button for mobile  */}
      {user && dashboardURL && (
        <div className="navbar-end lg:hidden">
          <label
            tabIndex="1"
            htmlFor="dashboard-sidebar"
            className="btn btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 rotate-180"
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
        </div>
      )}
    </div>
  );
};

export default Header;
