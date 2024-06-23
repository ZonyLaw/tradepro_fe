import React from 'react'
import {Navbar, Nav, Container, Row} from 'react-bootstrap'

function Header() {
  return (
    <div>
      <header>
        <Navbar data-bs-theme="dark"  expand="lg" className="bg-primary">
          <Container>
            <Navbar.Brand href="tradePro">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/market"><i className="fas fa-magnifying-glass-chart"></i> Market</Nav.Link>
                <Nav.Link href="/report"><i className="fas fa-magnifying-glass-chart"></i> Report</Nav.Link>
                <Nav.Link href="/login"><i className="fas fa-user"></i> Login</Nav.Link>
               
            
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        
      </header>
    </div>
  );
}

export default Header
