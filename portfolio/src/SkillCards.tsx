import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

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

const SkillCards = ({ skillBadgesDescriptions }: { skillBadgesDescriptions: Array<{ content: string; category: string; cardTitle?: string; }>; }) => {
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
              <Card.Subtitle style={{ minHeight: '5vh' }} className="mb-2 text-muted">{card.subtitle}</Card.Subtitle>
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

export default SkillCards;