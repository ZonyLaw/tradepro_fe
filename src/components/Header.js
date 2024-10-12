import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {logout} from '../actions/userActions'
import {Link} from 'react-router-dom'

function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
  };

  return (
    <div className='sticky-top'>
      <header>
        <Navbar data-bs-theme="dark" expand="lg" className="bg-primary">
          <Container>
            <Navbar.Brand href="/">TradePro</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/market">
                  <i className="fas fa-magnifying-glass-chart"></i> Market
                </Nav.Link>
                <Nav.Link as={Link} to="/report">
                  <i className="fas fa-magnifying-glass-chart"></i> Report
                </Nav.Link>

                {userInfo ? (
                  <NavDropdown title={userInfo.name} id="username">
                    <LinkContainer to="/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to="/login">
                    <Nav.Link>
                      <i className="fas fa-user"></i> Login
                    </Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
