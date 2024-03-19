import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tooltip from 'react-bootstrap/Tooltip';

function About() {
  return (
    <>
      <div style={{ backgroundColor: 'ghostwhite' }}>
        {AboutMe()}
      </div>
      <div style={{ paddingTop: '50px' }}>
        {Skills()}
      </div>
    </>
  );
}

export default About;

function AboutMe() {
  interface LinkProps {
    id: string;
    title: string;
    children: React.ReactNode;
  }

  const Link: React.FC<LinkProps> = ({ id, children, title }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href="#">{children}</a>
    </OverlayTrigger>
  );

  return (
    <Container className="d-flex flex-column justify-content-center" style={{ minHeight: '50vh' }}>
      <Row className="align-items-center" style={{ paddingBottom: '50px' }}>
        <Col xs={6} md={4}>
          <Image src="/persona300.png" roundedCircle />
        </Col>
        <Col>
          <Row className="text-center" style={{ paddingBottom: '50px' }}>
            <p className="display-3">About Me</p>
          </Row>
          <Row className="text-center" style={{ paddingBottom: '20px' }}>
            <p style={{ fontSize: '1.2rem' }}>My name is <Link id="name" title="Pronounced 'ash'" children="Æsc" />. I'm a software engineer and proponent of responsible technology and technology leadership in the spheres of sustainability, information security, data privacy, diversity and inclusion, and AI ethics. This draws me to "tech for good" and companies that practice responsible technology.</p>
            <p style={{ fontSize: '1.2rem' }}>My career of more than a decade has taken me through manufacturing, cyber security, fintech, and other industries. I've developed a strong understanding of Python and its ecosystem, but have a broad set of skills to draw from to benefit many types of organisation.</p>
          </Row>
          <Row className="text-center">
            <Col md={{ span: 6, offset: 3 }}>
              <Button variant="outline-primary" href="resume.pdf" target="_blank">Resume</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

function Skills() {
  interface BadgeProps {
    content: string;
    category: string;
  }

  const SkillBadge: React.FC<BadgeProps> = ({ content, category }) => {
    const categoryToBgColor: { [key: string]: string } = {
      language: 'primary',
      frameworks: 'info',
      devops: 'success',
      software: 'warning',
      other: 'secondary',
    };

    const categoryLowerCase = category.toLowerCase();

    return <Badge bg={categoryToBgColor[categoryLowerCase]}>{content}</Badge>;
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <Row className="text-center" style={{ paddingBottom: '50px' }}>
            <p className="display-3">Skills</p>
          </Row>
          <Row>
            <Tabs
              defaultActiveKey="engineering-skills"
              id="skills"
              className="mb-3"
              fill
            >
              <Tab eventKey="engineering-skills" title="Engineering">
                <Row style={{ padding: '20px' }}>
                  <h5>
                    <Stack direction="horizontal" gap={2}>
                      <SkillBadge content="Programming languages" category="language" />
                      <SkillBadge content="Frameworks and libraries" category="frameworks" />
                      <SkillBadge content="DevOps and Cloud" category="devops" />
                      <SkillBadge content="Software and operating systems" category="software" />
                      <SkillBadge content="Other skills" category="other" />
                    </Stack>
                  </h5>
                </Row>
                <Row>
                  <CardGroup>
                    <Card>
                      <Card.Body>
                        <Card.Title>Advanced</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Navigates like a pro</Card.Subtitle>
                        <Card.Text>
                          <Stack direction="vertical" gap={2}>
                            <SkillBadge content="Python" category="language" />
                            <SkillBadge content="C#" category="language" />
                            <SkillBadge content=".NET" category="frameworks" />
                            <SkillBadge content="Docker" category="devops" />
                            <SkillBadge content="AWS" category="devops" />
                            <SkillBadge content="GitHub" category="devops" />
                            <SkillBadge content="Linux" category="software" />
                            <SkillBadge content="Backend development" category="other" />
                            <SkillBadge content="Relational databases" category="other" />
                            <SkillBadge content="Responsible AI" category="other" />
                          </Stack>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <Card.Title>Capable</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Gets the job done with confidence</Card.Subtitle>
                        <Card.Text>
                          <Stack direction="vertical" gap={2}>
                            <SkillBadge content="SQL" category="language" />
                            <SkillBadge content="PostgreSQL" category="language" />
                            <SkillBadge content="C++" category="language" />
                            <SkillBadge content="FastAPI" category="frameworks" />
                            <SkillBadge content="NumPy" category="frameworks" />
                            <SkillBadge content="Kubernetes" category="devops" />
                            <SkillBadge content="Atlassian" category="devops" />
                            <SkillBadge content="Windows" category="software" />
                            <SkillBadge content="MacOS" category="software" />
                            <SkillBadge content="SSMS" category="software" />
                            <SkillBadge content="Hardware installation" category="other" />
                          </Stack>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <Card.Title>Developing</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Still honing skills, but making strides</Card.Subtitle>
                        <Card.Text>
                          <Stack direction="vertical" gap={2}>
                            <SkillBadge content="TypeScript" category="language" />
                            <SkillBadge content="React" category="frameworks" />
                            <SkillBadge content="Flask" category="frameworks" />
                            <SkillBadge content="PyTorch" category="frameworks" />
                            <SkillBadge content="Athena" category="devops" />
                            <SkillBadge content="Temporal" category="devops" />
                            <SkillBadge content="LLM prompt engineering" category="other" />
                          </Stack>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card>
                      <Card.Body>
                        <Card.Title>Rusty but Revivable</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Primed for improvement</Card.Subtitle>
                        <Card.Text>
                          <Stack direction="vertical" gap={2}>
                            <SkillBadge content="Java" category="language" />
                            <SkillBadge content="VB.NET" category="language" />
                            <SkillBadge content="PowerShell" category="language" />
                            <SkillBadge content="Angular" category="frameworks" />
                            <SkillBadge content="Azure" category="devops" />
                            <SkillBadge content="Android OS" category="software" />
                            <SkillBadge content="Firefox development" category="software" />
                            <SkillBadge content="Android Studio" category="software" />
                            <SkillBadge content="QT Creator" category="software" />
                            <SkillBadge content="SOC development" category="other" />
                            <SkillBadge content="Enterprise networks" category="other" />
                          </Stack>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                </Row>
              </Tab>
              <Tab eventKey="management-skills" title="Management">
                Management skills
              </Tab>
              <Tab eventKey="soft-skills" title="Soft">
                Soft skills
              </Tab>
            </Tabs>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
