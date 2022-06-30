import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "@assets/logo.png";
import { FiLogOut } from "react-icons/fi";
import "../styles/Navbar.css";

import { api } from "@services/services";
import ExportContext from "../contexts/Context";

function NavBar() {
  const navigate = useNavigate();
  const { isLog, userContext } = useContext(ExportContext.Context);

  const getActiveLinkStyle = ({ isActive }) => {
    if (isActive) {
      return {
        color: "var(--color-orange)",
        textDecoration: "underline var(--color-orange)",
        fontWeight: "var(--semi-bold)",
      };
    }
    return null;
  };

  const logOut = () => {
    const ENDPOINT = "/auth/logout";
    api
      .get(ENDPOINT)
      .then(() => {
        localStorage.clear();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLogged = () => {
    return (
      <div className="navbar-links-logged">
        <div className="navbar-profile">
          <p className="user-name">{`${userContext.firstname} ${userContext.lastname}`}</p>
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
              <button type="button" onClick={logOut}>
                <FiLogOut />
              </button>
            </li>
          </ul>
        </div>
        <div className="navbar-links">
          <ul>
            <li>
              <NavLink
                to="/board"
                className="navLink"
                style={getActiveLinkStyle}
              >
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/form"
                className="navLink"
                style={getActiveLinkStyle}
              >
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
