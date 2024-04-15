import Badge from 'react-bootstrap/Badge';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import '../styles/App.css';
import React from 'react';

export type ProjectData = {
  projectTitle: string;
  projectImageLocation: string;
  projectDescription: string[];
  projectGoals: string[];
  projectSkills: React.ReactNode[];
  projectOutcome: string[];
  projectAdditionalDetails: {
    title: string;
    imageLocation: string;
    content: React.ReactNode;
  }[];
};

interface InlineBadgeProps {
  text: string;
}

export const InlineBadge: React.FC<InlineBadgeProps> = ({ text }) => (
  <Badge className="portfolio-text-bold" style={{ fontSize: '0.9rem' }}>{text}</Badge>
);

export const ProjectPage = ({ projectData }: {projectData: ProjectData}) => {
  const { 
    projectTitle,
    projectImageLocation,
    projectDescription,
    projectGoals,
    projectSkills,
    projectOutcome,
    projectAdditionalDetails
  } = projectData;

  return (
    <>
      {/* This first div ensures that the start of the remainder of the content is not obscured by the navbar on small screens */}
      <div style={{ height: '80px', backgroundColor: 'ghostwhite' }} />
      <div style={{ backgroundColor: 'ghostwhite' }}>
        <Container className="d-flex flex-column justify-content-center" style={{ minHeight: '70vh' }}>
          <Row className="align-items-center" style={{ paddingBottom: '40px' }}>
            <Col className="text-center" xs={{ span: 6, offset: 3}} md={{ span: 1, offset: 0}}>
              <Image src={projectImageLocation} fluid rounded />
            </Col>
            <Col>
              <p className="display-6 portfolio-section-header" style={{ paddingTop: '10px' }}>{projectTitle}</p>
            </Col>
          </Row>
          <Row style={{ minHeight: '40vh', paddingBottom: '50px' }}>
            <Col md={5}>
              <Row className="portfolio-text">
                {projectDescription.map((paragraph) => (
                  <p style={{ fontSize: '1.1rem' }}>{paragraph}</p>
                ))}
              </Row>
            </Col>
            <Col md={1}></Col>
            <Col style={{ }}>
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
      {projectAdditionalDetails.map((detail, index) => (
        <div style={{ backgroundColor: index % 2 === 0 ? '' : 'ghostwhite', paddingTop: '50px', paddingBottom: '50px' }}>
          <Container className="d-flex flex-column justify-content-center">
            <Row className="align-items-center">
              { index % 2 === 0 ? (
                <>
                  <Col xs={{ span: 12, order: 'first' }} md={{ span: 3, order: 'first' }} className="text-center">
                    <Image src={detail.imageLocation} fluid roundedCircle style={{ paddingBottom: '50px' }} />
                  </Col>
                  <Col xs={{ span: 12, order: 'last' }} md={{ span: 9, order: 'last' }}>
                    <p className="display-6 portfolio-section-header">{detail.title}</p>
                    {detail.content}
                  </Col>
                </>
              ) : ( 
                <>
                  <Col xs={{ span: 12, order: 'last' }} md={{ span: 9, order: 'first' }}>
                    <p className="display-6 portfolio-section-header">{detail.title}</p>
                    {detail.content}
                  </Col>
                  <Col xs={{ span: 12, order: 'first' }} md={{ span: 3, order: 'last' }} className="text-center">
                    <Image src={detail.imageLocation} fluid roundedCircle style={{ paddingBottom: '50px' }} />
                  </Col>
                </>
              )}
            </Row>
          </Container>
        </div>
      ))}
    </>
  );
};