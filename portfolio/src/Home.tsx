import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';
// @ts-ignore
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github';
import 'react-social-icons/linkedin';
import 'react-social-icons/email';

function Home() {
  // interface LinkProps {
  //   id: string;
  //   title: string;
  //   children: React.ReactNode;
  // }

  // const Link: React.FC<LinkProps> = ({ id, children, title }) => (
  //   <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
  //     <a href="#">{children}</a>
  //   </OverlayTrigger>
  // );

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
          <Navbar.Brand href="#home">ᚫ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">CV</Nav.Link>
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
            <p className="display-1">Æsc George</p>
          </Col>
        </Row>
        <Row style={{ paddingBottom: '50px' }}>
          <Col>
            <p>Backend software engineer and proponent of responsible technology.</p>
          </Col>
        </Row>
        <Row>
          <Col><SocialIcon bgColor="black" network="github" url="https://www.github.com/kershope-burn" /></Col>
          <Col><SocialIcon bgColor="black" network="linkedin" url="https://www.linkedin.com/in/%C3%A6sc-g-7049226b/" /></Col>
          <Col><SocialIcon bgColor="black" network="email" url="mailto:aesc.george@pm.me" /></Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;