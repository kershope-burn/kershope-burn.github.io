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

export type ProjectData = {
  projectTitle: string;
  projectImageLocation: string;
  projectDescription: string[];
  projectGoals: string[];
  projectSkills: React.ReactNode[];
  projectOutcome: string[];
};

interface InlineBadgeProps {
  text: string;
}

export const InlineBadge: React.FC<InlineBadgeProps> = ({ text }) => (
  <Badge className="portfolio-text-bold" style={{ fontSize: '0.9rem' }}>{text}</Badge>
);

export const ProjectPage = ({ projectData }: {projectData: ProjectData}) => {
  const { projectTitle, projectImageLocation, projectDescription, projectGoals, projectSkills, projectOutcome } = projectData;

  return (
    <>
      <div style={{ backgroundColor: 'ghostwhite' }}>
        <Container className="d-flex flex-column justify-content-center" style={{ minHeight: '70vh' }}>
          <Row style={{ paddingBottom: '50px' }}>
            <Col xs={3} md={1}>
              <Image src={projectImageLocation} rounded ></Image>
            </Col>
            <Col>
              <p className="display-6 portfolio-section-header">{projectTitle}</p>
            </Col>
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