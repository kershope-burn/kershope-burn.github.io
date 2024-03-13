import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link as ReactRouterLink } from 'react-router-dom';

type LinkProps = React.ComponentProps<typeof ReactRouterLink>;

function Navigation() {
  return (
    <>
      {/* <Container>
        <Nav variant="underline" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">&#123;Æsc&#125;</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">CV</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Projects</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container> */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">ᚫ</Navbar.Brand>
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
        </Container>
      </Navbar> 
    </>
  );
}

export default Navigation;