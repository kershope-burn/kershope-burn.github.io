import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

function ProjectPage() {
  interface InlineBadgeProps {
    text: string;
  }

  const InlineBadge: React.FC<InlineBadgeProps> = ({ text }) => (
    <Badge className="portfolio-text-bold" style={{ fontSize: '0.9rem' }}>{text}</Badge>
  );

  return (
    <>
      <div style={{ backgroundColor: 'ghostwhite' }}>
        <Container className="d-flex flex-column justify-content-center" style={{ minHeight: '60vh' }}>
          <Row className="align-items-center">
            <Col>
              <Row className="text-center" style={{ paddingBottom: '50px' }}>
                <p className="display-5 portfolio-section-header">Digital security and privacy</p>
              </Row>
              <Row className="portfolio-text" style={{ paddingBottom: '20px' }}>
                <p style={{ fontSize: '1.1rem' }}>Securing information assets and respecting the privacy of all interested parties are aspects of responsible technology. My understanding of how these concepts encroach on personal digital security and privacy - and why I should care about them - deepened by natural proximity when I worked for a cyber security startup.</p>
                <p style={{ fontSize: '1.1rem' }}>This project isn't "done" in that it is a lifelong attempt to maintain digital security and privacy as technology, my risk profile, and the law evolves. But this page details some of the bigger steps I've taken to protect my digital life.</p>
                <p style={{ fontSize: '1.1rem' }}>There are some more common steps taken by people who wish to protect their digital security and privacy. VPNs, MFA, password managers, ad-blocking browser extensions, and so on. This page is more concerned with steps that, unfortunately, require more technical nous to implement.</p>
              </Row>
            </Col>
            <Col xs={6} md={4}>
              <Image src="/digital-security-and-privacy.png" rounded fluid style={{ padding: '50px' }}/>
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ backgroundColor: '', paddingTop: '50px', paddingBottom: '50px' }}>
        <Container className="d-flex flex-column justify-content-center">
          <Row className="align-items-center">
            <Col>
              <Row className="text-center">
                <p style={{ fontSize: '1.5rem' }} className="portfolio-title">Demonstrated skills</p>
              </Row>
              <Row>
                <ListGroup className="portfolio-text">
                  <ListGroup.Item>Familiarity with multiple <InlineBadge text="Linux" /> distributions, package managers, the command line, and different hardware running Linux.</ListGroup.Item>
                  <ListGroup.Item>The finesse to modify operating systems, drivers, and firmware without bricking devices.</ListGroup.Item>
                  <ListGroup.Item>Independent working. Identification of a problem, investigation of the solution space, attempt at solutions, and knowing when I've hit a dead-end.</ListGroup.Item>
                  <ListGroup.Item>Use of <InlineBadge text="Docker" /> to run multiple services in parallel. Simple back-up and restore with <InlineBadge text="Docker Compose" />.</ListGroup.Item>
                  <ListGroup.Item>Comfort with <InlineBadge text="open source software" /> and departing from the beaten track.</ListGroup.Item>
                  <ListGroup.Item>Experience with home <InlineBadge text="networking" /> that extends into <InlineBadge text="enterprise networking" />. Willingness to experiment and preparing routes to reverse adverse changes.</ListGroup.Item>
                  <ListGroup.Item>Understanding <InlineBadge text="information security" /> and <InlineBadge text="privacy" /> risks associated with every day activities and engagement with third-parties.</ListGroup.Item>
                </ListGroup>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProjectPage;