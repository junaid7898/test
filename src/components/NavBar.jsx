import React from "react";
import NavLogo from "../../src/assests/nav-logo.png";
import DropDown from "../assests/vectors/DropDown";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={NavLogo} alt="NAV LOGO" />

        <ul>
          <li>home</li>

          <li className="list-item__drop">
            <p>sevices</p>
            <DropDown className="svg-drop" />
          </li>

          <li className="list-item__drop">
            <p>classes</p>
            <DropDown className="svg-drop" />
          </li>

          <li className="list-item__drop">
            <p>restaurants</p>
            <DropDown className="svg-drop" />
          </li>

          <li>blog</li>

          <li>shop</li>

          <li>language</li>
        </ul>
      </div>

      <div className="navbar-btn">
        <button className="btn">Signin</button>
      </div>
    </div>
  );
};

export default NavBar;
