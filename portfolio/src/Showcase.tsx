import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// @ts-ignore
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github';
import 'react-social-icons/linkedin';
import 'react-social-icons/email';

import './App.css';

function Showcase() {
  const [githubHover, setGithubHover] = useState(false);
  const [linkedinHover, setLinkedinHover] = useState(false);
  const [emailHover, setEmailHover] = useState(false);

  const bgColorOnHover = '#ccffff';
  const bgColorOnLeave = 'white';
  const fgColorOnHover = '#282828';
  const fgColorOnLeave = 'black';
  const githubBgColor = githubHover ? bgColorOnHover : bgColorOnLeave;
  const githubFgColor = githubHover ? fgColorOnHover : fgColorOnLeave;
  const linkedinBgColor = linkedinHover ? bgColorOnHover : bgColorOnLeave;
  const linkedinFgColor = linkedinHover ? fgColorOnHover : fgColorOnLeave;
  const emailBgColor = emailHover ? bgColorOnHover : bgColorOnLeave;
  const emailFgColor = emailHover ? fgColorOnHover : fgColorOnLeave;

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
      <Row>
        <p className="display-1 portfolio-title" style={{ color: "floralwhite" }}>Æsc George</p>
      </Row>
      <Row style={{ paddingBottom: '50px' }}>
        <Col></Col>
        <Col xs={10} md={12}>
          <p className="portfolio-title text-center" style={{ color: "floralwhite" }}>Backend software engineer and proponent of responsible technology.</p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <SocialIcon 
            bgColor={githubBgColor} 
            fgColor={githubFgColor} 
            network="github" 
            url="https://www.github.com/kershope-burn" 
            target="_blank" 
            onMouseEnter={() => setGithubHover(true)} 
            onMouseLeave={() => setGithubHover(false)}
          />
        </Col>
        <Col>
          <SocialIcon 
            bgColor={linkedinBgColor} 
            fgColor={linkedinFgColor} 
            network="linkedin" 
            url="https://www.linkedin.com/in/%C3%A6sc-g-7049226b/" 
            target="_blank" 
            onMouseEnter={() => setLinkedinHover(true)} 
            onMouseLeave={() => setLinkedinHover(false)}
          />
        </Col>
        <Col>
          <SocialIcon 
            bgColor={emailBgColor} 
            fgColor={emailFgColor} 
            network="email" 
            url="mailto:pf.corporal837@passmail.com" 
            target="_blank" 
            onMouseEnter={() => setEmailHover(true)} 
            onMouseLeave={() => setEmailHover(false)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Showcase;