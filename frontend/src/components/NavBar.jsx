import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import logo from "@assets/logo.png";
import "../styles/Navbar.css";

import ExportContext from "../contexts/Context";

function NavBar() {
  const { isLog } = useContext(ExportContext.Context);

  const navLogged = () => {
    return (
      <ul>
        <NavLink to="/board" className="">
          <li>Log out</li>
        </NavLink>
        <NavLink to="/board" className="">
          <li>Dashboard</li>
        </NavLink>
        <NavLink to="/form" className="">
          <li>Add a project</li>
        </NavLink>
      </ul>
    );
  };

  const navLogout = () => {
    return (
      <ul>
        <NavLink to="/" className="">
          <li>Home</li>
        </NavLink>
      </ul>
    );
  };

  return (
    <div className="container-navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="navbar-links">{isLog ? navLogged() : navLogout()}</div>
      <div className="navbar-footer">
        <p>CONTACT US</p>
        <p>ALL RIGHT RESERVED - GCU</p>
      </div>
    </div>
  );
}

export default NavBar;
