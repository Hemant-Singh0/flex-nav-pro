import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";

const NavItem = ({ to, text }) => {
  return (
    <li>
      <NavLink className="nav-link" to={to}>
        {text}
      </NavLink>
    </li>
  );
};

export default NavItem;
