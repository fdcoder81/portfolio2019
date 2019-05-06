import React from "react";
import { NavLink } from "react-router-dom";
import "./ToggleMenu.scss";

class ToggleMenu extends React.Component {
  render() {
    return (
      <div id="toggle-box">
        <ul onClick={this.props.BtnClick}>
          <NavLink to="/" exact activeClassName="active">
            <li>About</li>
          </NavLink>
          <NavLink to="/portfolio">
            <li>My Work</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    );
  }
}

export default ToggleMenu;
