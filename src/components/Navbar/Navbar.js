import React, { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./styledNavBar";

const Navbar = ({ toggle }) => {
  return (
    <Fragment>
      <Nav>
        <NavContainer>
          <NavLogo to="/">Logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to="about">About</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="services">Services</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="register">Register</NavLinks>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">Login</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
