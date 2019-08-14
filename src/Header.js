import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import ToggleMenu from "./ToggleMenu";

class Header extends React.Component {
  state = { toggle: false };

  BtnClick = () => {
    this.setState(prevState => {
      return { toggle: !prevState.toggle };
    });
  };

  render() {
    let isToggle = this.state.toggle;
    const isActive = "isActive";

    return (
      <div>
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
              <p className="nav-title">Carlo Anselmi</p>
            </NavLink>
            <ul>
              <NavLink to="/" exact activeClassName="active">
                <li>About me</li>
              </NavLink>
              <NavLink to="/portfolio">
                <li>My work</li>
              </NavLink>
              <NavLink to="/contact">
                <li>Contact me</li>
              </NavLink>
            </ul>
          </nav>
        </div>
        {isToggle ? <ToggleMenu BtnClick={this.BtnClick} /> : ""}
      </div>
    );
  }
}

export default Header;
