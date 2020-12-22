//import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
//import { Button, Navbar, Nav, NavItem } from "react-bootstrap";
import NavbarCustom from './NavbarSideNavDropdown/NavbarCustom'
//import NavbarTheme from './NavbarTheme'
//import TopBar from './topBar'
//import NavOffCanvas from './NavMobileOffcanvas'

const Header = ({ siteTitle }) => (
  <>
  <div style={{
    position: 'fixed',
    width: '100%',
    height: 'auto',
    zIndex: '99'
  }}>
     
      <NavbarCustom />
      </div>
  </>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
