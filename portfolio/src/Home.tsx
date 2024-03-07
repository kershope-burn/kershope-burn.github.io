import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
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
          <Navbar.Brand href="#home">Developer("Æsc")</Navbar.Brand>
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
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        {/* Can I make this scroll in like it's being typed in a text editor? */}
        <Card bg='dark' text='light'>
          <Card.Body>        
            <p>
              Hello, I'm <Link title="Pronounced &quot;ash&quot;" id="t-1">Æsc</Link>.<br/><br/>
              I'm a software engineer.<br/><br/>
              This is my portfolio site.<br/><br/>
              Here, you can learn more about me:<br/> the things I can do;<br/>the things I <i>have</i> done;<br/>and the things that are important to me.<br/><br/>
            </p>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Home;