import { Link as ReactRouterLink, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './App.css';
import './Navigation.css'

type LinkProps = React.ComponentProps<typeof ReactRouterLink>;

function Navigation() {
  const location = useLocation();

  const getTheme = () => {
    const path = location.pathname;
    if (path === "/") {
      return { className: "bg-transparent kode-mono-regular", "data-bs-theme": "dark" };
    } else {
      return { className: "navbar-white kode-mono-regular", "data-bs-theme": "light" };
    }
  };

  return (
    <>
      <Navbar style={{ fontSize: "1.2rem", paddingLeft: "1rem", paddingRight: "1rem" }} expand="lg" fixed="top" {...getTheme()}>
        <Navbar.Brand href="/">__æsc__()</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/resume.pdf" target="_blank">Resume</Nav.Link>
            <Nav.Link as={ReactRouterLink as React.ComponentType<LinkProps>} to="/about">About</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home Assistant</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">PiHole</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Internet Performance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Homes for Ukraine Guide</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Portfolio Site</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">DDWRT and Secure IoT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">GrapheneOS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">Ubuntu on Windows Surface Pro</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">Charity Site on WordPress</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.10">Gaming Blog on WordPress</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.11">Social Media Automation</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    </>
  );
}

export default Navigation;