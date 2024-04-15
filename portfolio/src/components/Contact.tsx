import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import '../styles/App.css';

export function Contact() {
  return (
    <Container className="d-flex flex-column justify-content-center">
      <Row className="align-items-center" style={{ paddingBottom: '50px' }}>
        <Col>
          <Row className="text-center" style={{ paddingBottom: '50px' }}>
            <p className="display-3 portfolio-section-header">contact_me()</p>
          </Row>
          <Row className="text-center" style={{ paddingBottom: '20px' }}>
            <p className="portfolio-text" style={{ fontSize: '1.1rem' }}>Think I could help you out with something? Just want to ask a question or say hi? Then please <a href="mailto:pf.corporal837@passmail.com">email me!</a></p>
          </Row>
          <Row className="text-center">
            <p className="portfolio-text" style={{ fontSize: '0.8rem', fontStyle: 'italic' }}>Project icons from <a href="https://www.freepik.com/" target="_blank">Freepik</a>.</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};