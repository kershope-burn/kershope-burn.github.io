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
      return { className: "bg-transparent portfolio-title", "data-bs-theme": "dark" };
    } else {
      return { className: "navbar-white portfolio-title", "data-bs-theme": "light" };
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
              <NavDropdown.Item href="projects/digital-security-and-privacy">Digital security and privacy</NavDropdown.Item>
              <NavDropdown.Item href="projects/gaming-and-social-media">Gaming and social media</NavDropdown.Item>
              <NavDropdown.Item href="projects/charity-and-community">Charity and community</NavDropdown.Item>
              <NavDropdown.Item href="projects/portfolio-site">Portfolio Site</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar> 
    </>
  );
}

export default Navigation;