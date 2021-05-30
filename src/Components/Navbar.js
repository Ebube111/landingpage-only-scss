import React from "react";
import { NavLink } from "react-router-dom";

import avatar from "../img/avatar.png";

const Navbar = () => {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={avatar} alt="my profile" />
        </div>
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" exact activeClassName="active">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
        <footer className="footer">slim_dev</footer>
      </nav>
    </div>
  );
};

export default Navbar;
