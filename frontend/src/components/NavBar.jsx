import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import logo from "@assets/logo.png";
import { FiLogOut } from "react-icons/fi";
import "../styles/Navbar.css";

import ExportContext from "../contexts/Context";

function NavBar() {
  const { isLog, setIsLog } = useContext(ExportContext.Context);

  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return {
        color: "var(--color-orange)",
        textDecoration: "underline var(--color-orange)",
      };
    }
    return null;
  };

  const navLogged = () => {
    return (
      <div className="navbar-links-logged">
        <div className="navbar-profile">
          <p className="user-name">Eugène</p>
          <ul>
            <li>
              <NavLink
                to="/profile"
                className="navLink"
                style={getActiveLinkStyle}
              >
                My profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/board"
                className="navLink"
                style={getActiveLinkStyle}
              >
                <FiLogOut />
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <NavLink to="/board" className="navLink" style={getActiveLinkStyle}>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/form" className="navLink" style={getActiveLinkStyle}>
                <p>Add a project</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  const navLogout = () => {
    return (
      <ul>
        <li>
          <NavLink to="/" className="navlink" style={getActiveLinkStyle}>
            <p>Home</p>
          </NavLink>
        </li>
      </ul>
    );
  };

  console.warn(setIsLog);

  // return (
  //   <div className="container-navbar">
  //     <div className="navbar-logo">
  //       <img src={logo} alt="logo" className="logo" />
  //     </div>
  //     <div className="navbar-info">
  //       <div className="navbar-links">{isLog ? navLogged() : navLogout()}</div>
  //       <div className="navbar-footer">
  //         <p>CONTACT US</p>
  //         <p>ALL RIGHT RESERVED - GCU</p>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="container-navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      {isLog ? navLogged() : navLogout()}
      <div className="navbar-footer">
        <p>CONTACT US</p>
        <p>ALL RIGHT RESERVED - GCU</p>
      </div>
    </div>
  );
}

export default NavBar;
