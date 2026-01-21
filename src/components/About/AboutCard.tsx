import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export default function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I&apos;m <span className="purple">Fardous Nayeem</span>.
            <br />
            I&apos;m a <span className="purple">Software Developer</span> who
            enjoys building reliable products and learning new technologies.
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing / Sharing Tech ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new things 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Fardous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
