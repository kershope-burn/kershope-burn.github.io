import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ProjectPage() {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center" style={{ minHeight: '60vh' }}>
        <Row className="align-items-center">
          <Col>
            <Row className="text-center" style={{ paddingBottom: '50px' }}>
              <p className="display-5 portfolio-section-header">Digital security and privacy</p>
            </Row>
            <Row className="text-center portfolio-text" style={{ paddingBottom: '20px' }}>
              <p style={{ fontSize: '1.1rem' }}>My name is  I'm a software engineer and proponent of responsible technology, demonstrating leadership in the spheres of sustainability, information security, data privacy, diversity and inclusion, and AI ethics. This draws me to "tech for good" and companies that practice responsible technology.</p>
              <p style={{ fontSize: '1.1rem' }}>My career of more than a decade has taken me through manufacturing, cyber security, fintech, and other industries. I've developed a strong understanding of Python and its ecosystem, including recently working with AI, but have a broad set of skills to draw from to benefit many types of organisation.</p>
            </Row>
          </Col>
          <Col xs={6} md={4}>
            <Image src="/persona300.png" roundedCircle />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectPage;