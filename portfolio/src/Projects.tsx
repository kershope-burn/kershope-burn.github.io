import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
      <Card.Img variant="top" src={src} style={{ padding: '75px' }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="portfolio-section-header">{title}</Card.Title>
        <Card.Text className="portfolio-text">{text}</Card.Text>
        <Container style={{ paddingTop: "10px", paddingBottom: "40px" }}>
          {skills.map(skill => <Badge bg="primary" style={{ margin: '2px', fontSize: '0.9rem' }} className="portfolio-text">{skill}</Badge>)}
        </Container>
        <Container className="d-flex justify-content-center mt-auto">
          <Button variant="outline-primary" className="portfolio-title">Read more</Button>
        </Container>
      </Card.Body>
    </Card>
  );
};

export function Projects() {
  const projects = [
    {
      title: "Digital security and privacy",
      text: "Extensive use of trusted open source software to improve digital security and privacy.",
      skills: ["Linux", "Docker", "Networks", "IoT", "AOSP"],
      src: "/digital-security-and-privacy.png"
    },
    {
      title: "Gaming and social media",
      text: "WordPress blog, social media management, and social media automation.",
      skills: ["WordPress", "Web hosting", "SEO", "Google Analytics", "AWS", "Python"],
      src: "/gaming-and-social-media.png"
    },
    {
      title: "Charity and community",
      text: "Projects to give back.",
      skills: ["WordPress", "Grav CRM", "Web hosting", "Apache HTTP Server", "Linux"],
      src: "/charity-and-community.png"
    },
    {
      title: "Portfolio Site",
      text: "This personal website showcasing my projects and skills!",
      skills: ["React", "TypeScript", "LLM prompt engineering", "GitHub"],
      src: "/portfolio-site.png"
    },
  ];

  return (
    <>
      <Container className="d-flex flex-column justify-content-center" style={{ minHeight: '60vh' }}>
        <Row className="text-center" style={{ paddingBottom: '50px' }}>
          <p className="display-3 portfolio-section-header">Projects</p>
        </Row>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} className="d-flex align-items-stretch">
              <ProjectCard title={project.title} text={project.text} skills={project.skills} src={project.src} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};