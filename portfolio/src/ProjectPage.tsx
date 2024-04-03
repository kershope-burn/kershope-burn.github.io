import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './App.css';
import React from 'react';

function ProjectPage() {
  interface InlineBadgeProps {
    text: string;
  }

  const InlineBadge: React.FC<InlineBadgeProps> = ({ text }) => (
    <Badge className="portfolio-text-bold" style={{ fontSize: '0.9rem' }}>{text}</Badge>
  );

  const projectDescription: string[] = [
    "Securing information assets and respecting the privacy of all interested parties are aspects of responsible technology. My understanding of how these concepts encroach on personal digital security and privacy - and why I should care about them - deepened by natural proximity when I worked for a cyber security startup.",
    "This project isn't \"done\" in that it is a lifelong attempt to maintain digital security and privacy as technology, my risk profile, and the law evolves. But this page details some of the bigger steps I've taken to protect my digital life.",
    "There are some more common steps taken by people who wish to protect their digital security and privacy. VPNs, MFA, password managers, ad-blocking browser extensions, and so on. This page is more concerned with steps that, unfortunately, require more technical nous to implement."
  ];

  const projectGoals: string[] = [
    "Inform and educate myself on personal digital security and privacy and what is reasonably possible to improve these.",
    "Improve these aspects by exploring alternative service providers, operating systems, and network hardening.",
    "Balance security and privacy with convenience."
  ];

  const projectSkills: React.ReactElement[] = [
    <ListGroup.Item>Familiarity with multiple <InlineBadge text="Linux" /> distributions, package managers, the command line, and different hardware running Linux.</ListGroup.Item>,
    <ListGroup.Item>The finesse to modify operating systems, drivers, and firmware without bricking devices.</ListGroup.Item>,
    <ListGroup.Item>Use of <InlineBadge text="Docker" /> to run multiple services in parallel. Simple back-up and restore with <InlineBadge text="Docker Compose" />.</ListGroup.Item>,
    <ListGroup.Item>Comfort with <InlineBadge text="open source software" /> and departing from the beaten track.</ListGroup.Item>,
    <ListGroup.Item>Experience with home <InlineBadge text="networking" /> that extends into <InlineBadge text="enterprise networking" />. Willingness to experiment and preparing routes to reverse adverse changes.</ListGroup.Item>,
    <ListGroup.Item>Understanding <InlineBadge text="information security" /> and <InlineBadge text="privacy" /> risks associated with every day activities and engagement with third-parties.</ListGroup.Item>
  ]

  const projectOutcome: string[] = [
    "Well-known service providers that rely on extensive data collection have been replaced with trusted (sometimes paid) alternatives.",
    "Advertisements have been removed from day-to-day browsing in my home network on all devices and within all applications.",
    "The home network has been secured against opportunistic attacks.",
    "Requests to smart devices on the home network now stay within the home network through use of open source software.",
    "Extensive network hardening and use of open source router firmware proved a step too far in introducing significant inconvenience."
  ];

  return (
    <>
      <div style={{ backgroundColor: 'ghostwhite' }}>
        <Container className="d-flex flex-column justify-content-center" style={{ minHeight: '70vh' }}>
          <Row style={{ paddingBottom: '50px' }}>
            <p className="display-6 portfolio-section-header">projects/digital-security-and-privacy</p>
          </Row>
          <Row style={{ minHeight: '40vh' }}>
            <Col style={{ paddingRight: '50px' }}>
              <Row className="portfolio-text">
                {projectDescription.map((paragraph) => (
                  <p style={{ fontSize: '1.1rem' }}>{paragraph}</p>
                ))}
              </Row>
            </Col>
            <Col>
              <Tabs
                defaultActiveKey="goals"
                id="project-summary"
                className="mb-3 portfolio-title"
              >
                <Tab eventKey="goals" title="Goals">
                  <ListGroup className="portfolio-text">
                    {projectGoals.map((goal) => (
                      <ListGroup.Item>{goal}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Tab>
                <Tab eventKey="skills" title="Skills">
                  <ListGroup className="portfolio-text">
                    {projectSkills.map((skill) => skill)}
                  </ListGroup>
                </Tab>
                <Tab eventKey="outcome" title="Outcome">
                  <ListGroup className="portfolio-text">
                    {projectOutcome.map((outcome) => (
                      <ListGroup.Item>{outcome}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div style={{ backgroundColor: '', paddingTop: '50px', paddingBottom: '50px' }}>
        <Container className="d-flex flex-column justify-content-center">
          <Row className="align-items-center"></Row>
            <Col>
              
            </Col>
          </Row>
        </Container>
      </div> */}
    </>
  );
};

export default ProjectPage;