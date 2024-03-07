import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';

function Home() {
  interface LinkProps {
    id: string;
    title: string;
    children: React.ReactNode;
  }

  const Link: React.FC<LinkProps> = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href="#">{children}</a>
    </OverlayTrigger>
  );

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">ᚫ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">CV</Nav.Link>
              <Nav.Link href="https://github.com/kershope-burn">GitHub</Nav.Link>
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
      <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '75vh' }}>
        <Row>
          <Col>
            <p style={{ fontSize: '5rem' }}>Æsc George</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Backend software engineer and proponent of responsible technology.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;