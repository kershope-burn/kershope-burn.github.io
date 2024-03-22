import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';

import './App.css';

export function Profile() {
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
    <Container className="d-flex flex-column justify-content-center" style={{ minHeight: '75vh' }}>
      <Row className="align-items-center">
        <Col xs={6} md={4}>
          <Image src="/persona300.png" roundedCircle />
        </Col>
        <Col>
          <Row className="text-center" style={{ paddingBottom: '50px' }}>
            <p className="display-3 kode-mono-medium">About Me</p>
          </Row>
          <Row className="text-center kode-mono-regular" style={{ paddingBottom: '20px' }}>
            <p style={{ fontSize: '1.1rem' }}>My name is <Link id="name" title="Pronounced 'ash'" children="Æsc" />. I'm a software engineer and proponent of responsible technology, demonstrating leadership in the spheres of sustainability, information security, data privacy, diversity and inclusion, and AI ethics. This draws me to "tech for good" and companies that practice responsible technology.</p>
            <p style={{ fontSize: '1.1rem' }}>My career of more than a decade has taken me through manufacturing, cyber security, fintech, and other industries. I've developed a strong understanding of Python and its ecosystem, including recently working with AI, but have a broad set of skills to draw from to benefit many types of organisation.</p>
          </Row>
          <Row className="text-center">
            <Col md={{ span: 6, offset: 3 }}>
              <Button className="kode-mono-regular" variant="outline-primary" href="resume.pdf" target="_blank">Resume</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
