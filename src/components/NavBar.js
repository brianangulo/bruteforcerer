import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <div className="container" >
          <Navbar.Brand className="ml-auto" href="#home">Brute Force-It</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="#features">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    );
}

export default NavBar;