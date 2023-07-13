import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import logo from "..//assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand >
          <img src={logo} alt="logo" width="50px" height="50px" />
          Khareed-O-Farokht</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <LinkContainer to="/cart">
              <Nav.Link >
                <FaShoppingCart />
                Cart
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
              <Nav.Link href="/login">Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
