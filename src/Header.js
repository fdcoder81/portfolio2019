import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

class Header extends React.Component {
  state = { toggle: false };

  BtnClick = () => {
    this.setState(prevState => {
      return { toggle: !prevState.toggle };
    });
  };

  render() {
    const isToggle = this.state.toggle;
    const isActive = "isActive";
    console.log(isToggle);

    return (
      <div id="header">
        <nav>
          <div
            onClick={this.BtnClick}
            className={`menu-btn ${isToggle ? isActive : ""}`}
          >
            <div className="btn-line" />
            <div className="btn-line" />
            <div className="btn-line" />
          </div>
          <NavLink to="/">
            <a>
              <p class="nav-title">Carlo Anselmi</p>
            </a>
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
