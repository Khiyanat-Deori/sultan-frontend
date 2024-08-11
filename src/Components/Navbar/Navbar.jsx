import React, { useState } from "react";
import {
  Header,
  Nav,
  NavData,
  NavItem,
  NavLogo,
  NavMenu,
  NavToggle,
} from "./Navbar-Style.js";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <Nav>
        <NavData>
          <NavLogo to="/">Sultan Hospital</NavLogo>
        </NavData>
        <NavToggle onClick={toggleMenu}>
          {isOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
        </NavToggle>
        <NavMenu isOpen={isOpen}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/login">Admin</NavItem>
        </NavMenu>
      </Nav>
    </Header>
  );
};

export default Navbar;
