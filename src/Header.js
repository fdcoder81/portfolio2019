import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div id="header">
      <nav>
        <NavLink to="/">
          <a class="nav-title">
            <p>Carlo Anselmi</p>
          </a>{" "}
        </NavLink>
        <ul>
          <NavLink to="/" exact activeClassName="active">
            <li>
              <a>About me</a>
            </li>
          </NavLink>
          <NavLink to="/portfolio">
            <li>
              <a>My work</a>
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li>
              <a>Contact me</a>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
