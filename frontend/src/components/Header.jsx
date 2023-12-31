import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import logo from "..//assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { Badge } from "react-bootstrap";
import { useLogoutMutation } from "../slices/usersApiSlice";
import {logout} from '../slices/authSlice';
import { useNavigate
 } from "react-router-dom";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const [logutApiCall]= useLogoutMutation();
  console.log(cartItems);
  const logoutHandler = async () => {
    try{
      await logutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');

    }catch(error){
      console.log(error);
    }
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="logo" width="50px" height="50px" />
              Ecom App
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart />
                  Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link href="/login">Sign In</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
