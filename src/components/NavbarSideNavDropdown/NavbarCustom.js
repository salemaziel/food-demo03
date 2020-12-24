import React, { useState, useEffect } from "react";
import { Link, navigateTo } from "gatsby";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import NavDropdown from "react-bootstrap/NavDropdown";
//import Dropdown from "react-bootstrap/Dropdown";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import SideNav from "react-simple-sidenav";
//import NavItem from 'react-bootstrap/NavItem'
//import NavLink from 'react-bootstrap/NavLink'

//import FaqNav from './FaqNav'

import navStyles from "./navbar.module.css";
//import { LogoSquare } from "../images/index";


import { FaHome, FaPhoneAlt, FaF } from "react-icons/fa";
import LogoWhite from "../../images/generic-logo-white.png";

//import TopBar from '../topBar'

//then

const NavbarCustom = (props) => {
  const [showNav, setShowNav] = useState();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);

  return (
    <>
      <Navbar
        fixed
        bg={scroll ? "darkbrown" : "brownseethru"}
        variant={scroll ? "dark" : "dark"}
        expand="lg"
        className={navStyles.headerNavbar}
        /*style={{
          position: 'sticky'
        }}*/
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" rel="preload">
              <img
                className={scroll ? "d-inline-block align-top navLogo" : "hide"}
                /*src={LogoSquare}*/
                src={LogoWhite}
                alt="Via Del Web Logo"
              ></img>
            </Link>

            <Link to="/" rel="preload">
              <img
                className={scroll ? "hide" : "d-inline-block align-top navLogo"}
                /*src={LogoSquare}*/
                src={LogoWhite}
                alt="Via Del Web Logo"
              ></img>
            </Link>
            {/*<Dropdown className={scroll ? "hide" : "show"}>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                <img
                  className="d-inline-block align-top"
                  src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601579192/rbl-art-designs/united-states-of-america-flag-3d-round-icon-256_gbffry.png"
                  alt="Logo"
                  height="40"
                ></img>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  as={Link}
                  to="/esp/home"
                  className={navStyles.pickLang}
                >
                  {" "}
                  <img
                    className="d-inline-block align-top"
                    src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601552057/rbl-art-designs/mexico-flag-transparent-100x_zmifmm.png"
                    alt="Logo"
                    height="40"
                  ></img>{" "}
                  Español
                </Dropdown.Item>
                {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>* /}
              </Dropdown.Menu>
  </Dropdown>*/}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="border-0"
            onClick={() => setShowNav(true)}
          ></Navbar.Toggle>
          <Navbar
            id="navbar-nav"
            className="justify-content-end NoMobile"
            style={{
              display: "flex",
              flexBasis: "auto",
              flexGrow: "1",
              alignItems: "center",
            }}
          >
            <Nav
              className="ml-auto"
              defaultActiveKey="/"
              onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
            >
              <Nav.Item to="/about" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/about" active={false}>
                  About Us
                </Nav.Link>
              </Nav.Item>

              <Nav.Item to="/" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/menu" active={false}>
                  Menu
                </Nav.Link>
              </Nav.Item>

              <Nav.Item to="/faq" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/faq" active={false}>
                  Faq
                </Nav.Link>
              </Nav.Item>
              {/*<Nav.Item to="/" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/gallery" active={false}>
                  Gallery
                </Nav.Link>
          </Nav.Item>*/}

              <Nav.Item to="/" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/events" active={false}>
                  Events
                </Nav.Link>
              </Nav.Item>

              {/*<Nav.Item to="/faq" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/faq" active={false}>
                  FAQ
                </Nav.Link>
          </Nav.Item>*/}

              {/*<Nav.Item to="/servicios" className={navStyles.navItem}>
                <Nav.Link as={Link} to="/servicios" active={false}>
                  Services
                </Nav.Link>
        </Nav.Item>*/}
              {/*<NavDropdown
                as={Link}
                href="/services"
                to="/service"
                eventKey="services"
                title="Services"
                id="nav-dropdown-about"
                className={navStyles.navItem}
              >
                <NavDropdown.Item eventKey="/#">
                  Item
                </NavDropdown.Item>

                <NavDropdown.Item eventKey="/#">
                  Item
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Item
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  {" "}
                  Item{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  {" "}
                  Item{" "}
                </NavDropdown.Item>
              </NavDropdown>*/}

              {/*<NavDropdown
                as={Link}
                href="/en/more"
                to="/en/more"
                eventKey="more"
                title="More"
                id="nav-dropdown-about"
                className={navStyles.navItem}
              >
                <NavDropdown.Item eventKey="/#">
                  {" "}
                  Dropdown Item 1{" "}
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 2
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 3
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="/#">
                  Dropdown Item 4
                </NavDropdown.Item>
              </NavDropdown>*/}
            </Nav>
            <Nav className="mr-0">
              <Nav.Item to="/#" className={navStyles.navItem}>
                <Button
                  secondary
                  as={Link}
                  to="/"
                  className="uk-button-primary uk-button-large uk-button"
                  active={false}
                >
                  Order Online
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar>
          <SideNav
            openFromRight={true}
            title={
              <div
                style={{
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                {/*
		<img 
		  src=""
		  alt=""
		  style={{
			margin: 'auto'	
		  }} />
		*/}
              </div>
            }
            titleStyle={{
              background: "inherit",
              backgroundColor: "transparent",
              color: "black",
              margin: "auto",
              padding: "1rem",
            }}
            items={[
              <Link rel="preload" className={navStyles.navItem} to="/">
                <FaHome />
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/menu">
                Menu
              </Link>,

              //            <FaqNav
              //            items={[
              //              {
              //                question: "Services",
              //                answer:
              //                  "",
              //                  listItem1: '',
              //                  listItem2: '',
              //                  linkTitle1: 'Item',
              //                  link1: '/#',
              //                  linkTitle2: 'Item',
              //                  link2: '/#',
              //                  linkTitle3: 'Item',
              //                  link3: '/#',
              //                  linkTitle4: 'Item',
              //                  link4: '/#',
              //                  linkTitle5: 'Item',
              //                  link5: '/#',
              //
              //              },
              //            ]}
              //          />,

              <Link rel="preload" className={navStyles.navItem} to="/faq">
                FAQ
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/events">
                Events
              </Link>,
              <Link rel="preload" className={navStyles.navItem} to="/about">
                About Us
              </Link>,
              <Button
              href="tel:555-555-5555"
              className="uk-button-large uk-button btn-lg px-5 py-2"
            >
             <FaPhoneAlt className="pr-1" /> Call Order
            </Button>,
              <Button
                as={Link}
                to="#"
                className="uk-button-primary uk-button-large uk-button btn-lg px-5 py-2"
              >
                Order Online
              </Button>,
            ]}
            itemStyle={{
              background: "transparent!important",
              backgroundColor: "transparent!important",
              color: "#fff!important",
              fontSize: "1.5rem",
              fontWeight: "500",
              padding: "10px 0",
              textAlign: "center",
              margin: "1rem auto",
            }}
            navStyle={{
              width: "70%",
              background: "linear-gradient(60deg, rgba(121, 104, 103, 0.8) 0%, rgba(39, 21, 20, 1) 100%)",
              color: "inherit",
              maxHeight: "100vh",
            }}
            showNav={showNav}
            onHideNav={() => setShowNav(false)}
          />
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
