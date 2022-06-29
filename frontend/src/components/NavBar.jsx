import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="navbar">
        <ul>
          <NavLink to="/" className="">
            <li>Home</li>
          </NavLink>
          <NavLink to="/board" className="">
            <li>Projects list</li>
          </NavLink>
          <NavLink to="/form" className="">
            <li>Submit project</li>
          </NavLink>
        </ul>
        <button type="button">Log out</button>
      </div>
    </nav>
  );
}

export default NavBar;
