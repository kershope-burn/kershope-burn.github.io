import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export interface ProjectCardProps {
  title: string;
  text: string;
  skills: string[];
}

export function ProjectCard({ title, text, skills }: ProjectCardProps) {
  return (
    <Card className="shadow-lg">
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Primary skills:</ListGroup.Item>
        {skills.map((skill, index) => (
          <ListGroup.Item key={index}>{skill}</ListGroup.Item>
        ))}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
};