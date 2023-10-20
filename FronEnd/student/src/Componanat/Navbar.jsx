import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand >My App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/students">Students</Nav.Link>
        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
        <Nav.Link as={NavLink} to="/signup">Registor</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavigationBar;
