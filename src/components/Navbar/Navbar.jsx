import React, { useState } from "react";
import "./Navbar.css";
import NavItem from "../NavItem";
import { Sling as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">FlexSpace</div>

      <ul className="nav-links">
        <NavItem to="/" text="Home" />
        <NavItem to="/products" text="Products" />
        <NavItem to="/services" text="Services" />
        <NavItem to="/contact" text="Contact" />
      </ul>

      <div className="hamburger-wrapper">
        <Hamburger toggled={isNavOpen} toggle={setIsNavOpen} size={20} />
      </div>

      {isNavOpen && (
        <ul className="mobile-menu">
          <NavItem to="/" text="Home" />
          <NavItem to="/products" text="Products" />
          <NavItem to="/services" text="Services" />
          <NavItem to="/contact" text="Contact" />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
