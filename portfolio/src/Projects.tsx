import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './App.css';

interface ProjectCardProps {
  title: string;
  text: string;
  skills: string[];
  src: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, skills, src }) => {
  return (
    <Card className="shadow-lg">
      <Card.Img variant="top" src={src} style={{ padding: '10px' }} />
      <Card.Body>
        <Card.Title className="portfolio-section-header">{title}</Card.Title>
        <Card.Text className="portfolio-text">{text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush portfolio-text">
        <ListGroup.Item>Primary skills: {skills.join(', ')}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link className="portfolio-text" href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export function Projects() {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center" style={{ minHeight: '60vh' }}>
        <Row className="text-center" style={{ paddingBottom: '50px' }}>
          <p className="display-3 portfolio-section-header">Projects</p>
        </Row>
        <Row className="align-items-stretch">
          <Col>
            <ProjectCard title="Home Assistant" text="Open source home automation that puts local control and privacy first." skills={["Linux", "Docker", "Networks", "IoT"]} src="/home-assistant_logo_500.png" />
          </Col>
          <Col>
            <ProjectCard title="Pi-hole" text="Network-wide ad blocker that improves network performance and blocks unwanted content." skills={["Linux", "Docker", "Networks"]} src="/pihole_logo_500.png" />
          </Col>
          <Col>
            <ProjectCard title="Portfolio Site" text="This personal website showcasing my projects and skills!" skills={["React", "TypeScript", "LLM prompt engineering", "GitHub"]} src="/react_logo_500.png" />
          </Col>
        </Row>
      </Container>
    </>
  );
};