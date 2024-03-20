import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// @ts-ignore
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github';
import 'react-social-icons/linkedin';
import 'react-social-icons/email';

function Showcase() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '75vh' }}>
      <Row>
        <Col>
          <p className="display-1" style={{ color: "floralwhite" }}>Æsc George</p>
        </Col>
      </Row>
      <Row style={{ paddingBottom: '50px' }}>
        <Col>
          <p style={{ color: "floralwhite" }}>Backend software engineer and proponent of responsible technology.</p>
        </Col>
      </Row>
      <Row>
        <Col><SocialIcon bgColor="floralwhite" fgColor="black" network="github" url="https://www.github.com/kershope-burn" target="_blank" /></Col>
        <Col><SocialIcon bgColor="floralwhite" fgColor="black" network="linkedin" url="https://www.linkedin.com/in/%C3%A6sc-g-7049226b/" target="_blank" /></Col>
        <Col><SocialIcon bgColor="floralwhite" fgColor="black" network="email" url="mailto:pf.corporal837@passmail.com" target="_blank" /></Col>
      </Row>
    </Container>
  );
}

export default Showcase;