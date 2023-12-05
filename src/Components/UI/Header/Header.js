import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../../Assets/Icon/logo-full.svg";
import LogoMob from "../../../Assets/Icon/logo.svg";
import { HeaderData } from "../../../Data/Data";
import { NavLink } from "react-router-dom";
import { MenuIcon } from "../../../Assets/Icon/svg/SvgIcons";
import "./Header.scss";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <header className={`header ${scroll ? "header__scrolled" : ""}`}>
      <Navbar expand="xl" className="header__nav">
        <Container>
          <NavLink to="/" className="navbar-brand">
            <img src={Logo} className="d-none d-md-block" alt="logo" />
            <img src={LogoMob} className="d-block d-md-none" alt="logo-mob" />
          </NavLink>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-xl">
            <MenuIcon />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-xl"
            aria-labelledby="offcanvasNavbarLabel-expand-xl"
            placement="end"
            className="header__offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-xl">
                <NavLink to="/" className="navbar-brand">
                  <img src={Logo} className="d-none d-md-block" alt="logo" />
                  <img
                    src={LogoMob}
                    className="d-block d-md-none"
                    alt="logo-mob"
                  />
                </NavLink>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 ">
                {HeaderData.map((data) => {
                  return (
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to={data.to}
                      spy={true}
                      // smooth={true}
                      offset={-130}
                      duration={500}
                      // onClick={() => setExpanded(false)}
                    >
                      {data.name}
                    </Link>
                  );
                })}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
