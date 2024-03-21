import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ToggleButton from 'react-bootstrap/ToggleButton';

export function Skills() {
  interface BadgeProps {
    content: string;
    category: string;
    flex?: boolean;
  }

  const SkillBadge: React.FC<BadgeProps> = ({ content, category, flex = true }) => {
    const categoryToBgColor: { [key: string]: string; } = {
      language: 'primary',
      management: 'primary',
      soft: 'primary',
      framework: 'info',
      compliance: 'info',
      devops: 'success',
      software: 'dark',
      other: 'secondary',
    };

    const categoryLowerCase = category.toLowerCase();

    if (flex) {
      return (
        <Col xs={10} md={9} lg={8} className="mx-auto">
          <Badge bg={categoryToBgColor[categoryLowerCase]} className="w-100">{content}</Badge>
        </Col>
      );
    } else {
      return (
        <Badge bg={categoryToBgColor[categoryLowerCase]}>{content}</Badge>
      );
    }
  };

  const engineeringSkillBadges = [
    { content: "Python", category: "language", cardTitle: "Advanced" },
    { content: "C#", category: "language", cardTitle: "Advanced" },
    { content: ".NET", category: "framework", cardTitle: "Advanced" },
    { content: "Docker", category: "devops", cardTitle: "Advanced" },
    { content: "AWS", category: "devops", cardTitle: "Advanced" },
    { content: "GitHub", category: "devops", cardTitle: "Advanced" },
    { content: "Linux", category: "software", cardTitle: "Advanced" },
    { content: "Backend development", category: "other", cardTitle: "Advanced" },
    { content: "Data analysis", category: "other", cardTitle: "Advanced" },
    { content: "Performance optimisation", category: "other", cardTitle: "Advanced" },
    { content: "Relational databases", category: "other", cardTitle: "Advanced" },
    { content: "Responsible AI", category: "other", cardTitle: "Advanced" },
    { content: "System design", category: "other", cardTitle: "Advanced" },
    { content: "SDLC", category: "other", cardTitle: "Advanced" },
    { content: "SaaS development", category: "other", cardTitle: "Advanced" },
    { content: "RESTful APIs", category: "other", cardTitle: "Advanced" },
    { content: "SQL", category: "language", cardTitle: "Capable" },
    { content: "C++", category: "language", cardTitle: "Capable" },
    { content: "PostgreSQL", category: "framework", cardTitle: "Capable" },
    { content: "FastAPI", category: "framework", cardTitle: "Capable" },
    { content: "NumPy", category: "framework", cardTitle: "Capable" },
    { content: "Kubernetes", category: "devops", cardTitle: "Capable" },
    { content: "Atlassian", category: "devops", cardTitle: "Capable" },
    { content: "Windows", category: "software", cardTitle: "Capable" },
    { content: "MacOS", category: "software", cardTitle: "Capable" },
    { content: "SSMS", category: "software", cardTitle: "Capable" },
    { content: "Hardware installation", category: "other", cardTitle: "Capable" },
    { content: "Desktop app development", category: "other", cardTitle: "Capable" },
    { content: "TypeScript", category: "language", cardTitle: "Developing" },
    { content: "React", category: "framework", cardTitle: "Developing" },
    { content: "Flask", category: "framework", cardTitle: "Developing" },
    { content: "PyTorch", category: "framework", cardTitle: "Developing" },
    { content: "Athena", category: "devops", cardTitle: "Developing" },
    { content: "Temporal", category: "devops", cardTitle: "Developing" },
    { content: "Frontend development", category: "other", cardTitle: "Developing" },
    { content: "LLM prompt engineering", category: "other", cardTitle: "Developing" },
    { content: "Java", category: "language", cardTitle: "Rusty but Revivable" },
    { content: "VB.NET", category: "language", cardTitle: "Rusty but Revivable" },
    { content: "PowerShell", category: "language", cardTitle: "Rusty but Revivable" },
    { content: "Angular", category: "framework", cardTitle: "Rusty but Revivable" },
    { content: "Azure", category: "devops", cardTitle: "Rusty but Revivable" },
    { content: "Android OS", category: "software", cardTitle: "Rusty but Revivable" },
    { content: "Firefox development", category: "software", cardTitle: "Rusty but Revivable" },
    { content: "Android Studio", category: "software", cardTitle: "Rusty but Revivable" },
    { content: "QT Creator", category: "software", cardTitle: "Rusty but Revivable" },
    { content: "SOC development", category: "other", cardTitle: "Rusty but Revivable" },
    { content: "Enterprise networks", category: "other", cardTitle: "Rusty but Revivable" },
  ];

  const managementSkillBadges = [
    { content: "Project management", category: "management", cardTitle: "Advanced" },
    { content: "Tech leadership", category: "management", cardTitle: "Advanced" },
    { content: "Risk management", category: "management", cardTitle: "Advanced" },
    { content: "Time management", category: "management", cardTitle: "Advanced" },
    { content: "Continuous improvement", category: "management", cardTitle: "Advanced" },
    { content: "Requirements elicitation", category: "management", cardTitle: "Advanced" },
    { content: "Mentoring", category: "management", cardTitle: "Advanced" },
    { content: "Data presentation", category: "management", cardTitle: "Advanced" },
    { content: "ISO shared clauses", category: "compliance", cardTitle: "Advanced" },
    { content: "ISO 14001", category: "compliance", cardTitle: "Advanced" },
    { content: "Greenhouse Gas Protocol", category: "compliance", cardTitle: "Advanced" },
    { content: "SECR", category: "compliance", cardTitle: "Advanced" },
    { content: "Microsoft Office", category: "software", cardTitle: "Advanced" },
    { content: "Policy creation", category: "management", cardTitle: "Capable" },
    { content: "Agile", category: "management", cardTitle: "Capable" },
    { content: "Technical writing", category: "management", cardTitle: "Capable" },
    { content: "ISO 27001", category: "compliance", cardTitle: "Capable" },
    { content: "Monday.com", category: "software", cardTitle: "Capable" },
    { content: "Jira", category: "software", cardTitle: "Capable" },
    { content: "Confluence", category: "software", cardTitle: "Capable" },
    { content: "Line management", category: "management", cardTitle: "Developing" },
    { content: "GDPR", category: "compliance", cardTitle: "Developing" },
    { content: "EU AI Act", category: "compliance", cardTitle: "Developing" },
    { content: "Account management", category: "management", cardTitle: "Rusty but Revivable" },
  ];

  const softSkillBadges = [
    { content: "Communication", category: "soft" },
    { content: "Problem solving", category: "soft" },
    { content: "Collaboration", category: "soft" },
    { content: "Critical thinking", category: "soft" },
    { content: "Adaptability", category: "soft" },
    { content: "Creativity", category: "soft" },
    { content: "Leadership", category: "soft" },
    { content: "Empathy", category: "soft" },
    { content: "Decision making", category: "soft" },
    { content: "Organisation", category: "soft" },
  ];

  const SkillBadges = ({ skillBadgesDescriptions }: { skillBadgesDescriptions: Array<{ content: string; category: string; cardTitle?: string; }>; }) => {
    const cards = [
      { title: "Advanced", subtitle: "Navigates like a pro" },
      { title: "Capable", subtitle: "Gets the job done with confidence" },
      { title: "Developing", subtitle: "Still honing skills, but making strides" },
      { title: "Rusty but Revivable", subtitle: "Primed for improvement" },
    ];

    if (skillBadgesDescriptions.some(badge => badge.cardTitle)) {
      return (
        <CardGroup>
          {cards.map((card) => (
            <Card key={card.title}>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{card.subtitle}</Card.Subtitle>
                <Card.Text>
                  <Stack direction="vertical" gap={2} style={{ fontSize: "1.2rem" }}>
                    {skillBadgesDescriptions
                      .filter((badge) => badge.cardTitle === card.title)
                      .map((badge) => (
                        <SkillBadge content={badge.content} category={badge.category} />
                      ))}
                  </Stack>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      );
    } else {
      return (
        <>
          <Stack className="justify-content-center" direction="horizontal" gap={2} style={{ padding: '10px', fontSize: "1.3rem" }}>
            {skillBadgesDescriptions.slice(0, Math.ceil(skillBadgesDescriptions.length / 2)).map((badge) => (
              <SkillBadge content={badge.content} category={badge.category} flex={false} />
            ))}
          </Stack>
          <Stack className="justify-content-center" direction="horizontal" gap={2} style={{ padding: '10px', fontSize: "1.3rem" }}>
            {skillBadgesDescriptions.slice(Math.ceil(skillBadgesDescriptions.length / 2)).map((badge) => (
              <SkillBadge content={badge.content} category={badge.category} flex={false} />
            ))}
          </Stack>
        </>
      );
    }
  };

  type CheckedCategoriesType = {
    [key: string]: boolean;
  };

  const [checkedEngineeringCategories, setCheckedEngineeringCategories] = useState<CheckedCategoriesType>({
    language: true,
    framework: true,
    devops: true,
    software: true,
    other: true
  });

  const [checkedManagementCategories, setCheckedManagementCategories] = useState<CheckedCategoriesType>({
    management: true,
    compliance: true,
    software: true,
  });

  const toggleManagementCategory = (category: string) => {
    setCheckedManagementCategories((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  const filteredManagementSkillBadges = managementSkillBadges.filter(
    (skill) => checkedManagementCategories[skill.category]
  );

  const toggleEngineeringCategory = (category: string) => {
    setCheckedEngineeringCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }));
  };

  const filteredEngineeringSkillBadges = engineeringSkillBadges.filter(skill => {
    return checkedEngineeringCategories[skill.category];
  });

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
              justify
            >
              <Tab eventKey="engineering-skills" title="Engineering">
                <Row className="align-items-center" style={{ padding: '20px' }}>
                  <Col xs="auto">
                    <h6>Category: </h6>
                  </Col>
                  <Col>
                    <Stack direction="horizontal" gap={2} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                      <ToggleButton
                        id="toggle-language-check"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checkedEngineeringCategories.language}
                        value="1"
                        onChange={() => toggleEngineeringCategory('language')}
                      >
                        Programming languages
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-framework-check"
                        type="checkbox"
                        variant="outline-info"
                        checked={checkedEngineeringCategories.framework}
                        value="1"
                        onChange={() => toggleEngineeringCategory('framework')}
                      >
                        Frameworks and libraries
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-devops-check"
                        type="checkbox"
                        variant="outline-success"
                        checked={checkedEngineeringCategories.devops}
                        value="1"
                        onChange={() => toggleEngineeringCategory('devops')}
                      >
                        DevOps and Cloud
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-software-check"
                        type="checkbox"
                        variant="outline-dark"
                        checked={checkedEngineeringCategories.software}
                        value="1"
                        onChange={() => toggleEngineeringCategory('software')}
                      >
                        Software and operating systems
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-other-check"
                        type="checkbox"
                        variant="outline-secondary"
                        checked={checkedEngineeringCategories.other}
                        value="1"
                        onChange={() => toggleEngineeringCategory('other')}
                      >
                        Other skills
                      </ToggleButton>
                    </Stack>
                  </Col>
                </Row>
                <Row>
                  <SkillBadges skillBadgesDescriptions={filteredEngineeringSkillBadges} />
                </Row>
              </Tab>
              <Tab eventKey="management-skills" title="Management">
                <Row className="align-items-center" style={{ padding: '20px' }}>
                  <Col xs="auto">
                    <h6>Category: </h6>
                  </Col>
                  <Col>
                    <Stack direction="horizontal" gap={2} style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                      <ToggleButton
                        id="toggle-management-elements-check"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checkedManagementCategories.management}
                        value="1"
                        onChange={() => toggleManagementCategory('management')}
                      >
                        Management elements
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-compliance-framework-check"
                        type="checkbox"
                        variant="outline-info"
                        checked={checkedManagementCategories.compliance}
                        value="1"
                        onChange={() => toggleManagementCategory('compliance')}
                      >
                        Compliance framework
                      </ToggleButton>
                      <ToggleButton
                        id="toggle-software-tools-check"
                        type="checkbox"
                        variant="outline-dark"
                        checked={checkedManagementCategories.software}
                        value="1"
                        onChange={() => toggleManagementCategory('software')}
                      >
                        Software and tools
                      </ToggleButton>
                    </Stack>
                  </Col>
                </Row>
                <Row>
                  <SkillBadges skillBadgesDescriptions={filteredManagementSkillBadges} />
                </Row>
              </Tab>
              <Tab eventKey="soft-skills" title="Soft">
                <Row>
                  <SkillBadges skillBadgesDescriptions={softSkillBadges} />
                </Row>
              </Tab>
            </Tabs>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
