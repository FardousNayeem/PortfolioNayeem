import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

type ProjectCardProps = {
  title: string;
  description: string;
  imgPath?: string;
  ghLink?: string;
  demoLink?: string;
};

export default function ProjectCards({
  title,
  description,
  imgPath,
  ghLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <Card className="project-card-view">
      {imgPath ? <Card.Img variant="top" src={imgPath} alt={`${title} cover`} /> : null}

      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {ghLink ? (
            <Button variant="primary" href={ghLink} target="_blank" rel="noreferrer">
              <BsGithub /> &nbsp;GitHub
            </Button>
          ) : null}

          {demoLink ? (
            <Button variant="primary" href={demoLink} target="_blank" rel="noreferrer">
              <CgWebsite /> &nbsp;Demo
            </Button>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}
