import React, { useContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "@assets/logo.png";
import { FiLogOut } from "react-icons/fi";
import "../styles/Navbar.css";

import { api } from "@services/services";
import ExportContext from "../contexts/Context";

function NavBar() {
  const navigate = useNavigate();
  const { isLog, setIsLog, userContext } = useContext(ExportContext.Context);
  const [menuNavbar, setMenuNavbar] = useState("");

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
        setIsLog(false);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (isLog) {
      setMenuNavbar(
        <div className="navbar-links-logged">
          <div className="navbar-profile">
            <p className="user-name">Welcome</p>
            <p className="user-name2">{`${userContext.firstname} ${userContext.lastname}`}</p>
            <ul>
              <li>
                <NavLink
                  to="/profil"
                  className="navLink"
                  style={getActiveLinkStyle}
                >
                  My profile
                </NavLink>
              </li>
              <li>
                <button type="button" onClick={logOut} className="btn-logOut">
                  <FiLogOut size="23px" />
                </button>
              </li>
            </ul>
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <NavLink
                  to="/dashboard"
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
              <li>
                <NavLink
                  to="/statistics"
                  className="navLink"
                  style={getActiveLinkStyle}
                >
                  <p>Statistics</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      setMenuNavbar(
        <ul>
          <li>
            <NavLink to="/" className="navlink" style={getActiveLinkStyle}>
              <p>Home</p>
            </NavLink>
          </li>
        </ul>
      );
    }
  }, [isLog]);

  return (
    <div className="container-navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      {menuNavbar}
      <div className="navbar-footer">
        <p>CONTACT US</p>
        <p>ALL RIGHT RESERVED - GCU</p>
      </div>
    </div>
  );
}

export default NavBar;
