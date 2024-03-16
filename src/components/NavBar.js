import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../styles/navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-links-item">
            View Properties
          </Link>
        </li>
        <li>
          <Link to="add-property" className="navbar-links-item">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
