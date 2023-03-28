import React, { useContext } from "react";
import logo from "../../images/kitchenLogo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
    .then()
    .catch((error) => console.error(error))
  }

  return (
    <div className="navbar bg-orange-50">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          {user?.uid ? (
            <li>
              <button onClick={handleLogout} className='bg-slate-50'>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-start">
        <img className="lg:w-32 md:w-24 w-16" src={logo} alt=""></img>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          {user?.uid ? (
            <li>
              <button onClick={handleLogout} className='bg-slate-50'>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-primary">
          <Link to="/about">About us</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
