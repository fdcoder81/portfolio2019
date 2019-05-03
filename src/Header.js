import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

class Header extends React.Component {
  state = { toggle: false };

  BtnClick = () => {
    this.setState({ toggle: true });
    console.log(this.state);
  };

  render() {
    return (
      <div id="header">
        <nav>
          <div onClick={this.BtnClick} className="menu-btn">
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
          </div>
          <div className="menu-btn-close">X</div>
          <NavLink to="/">
            <a>
              <p class="nav-title">Carlo Anselmi</p>
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
  }
}

export default Header;
