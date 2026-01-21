import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export default function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I&apos;m <span className="purple">Fardous Nayeem</span> from Dhaka, Bangladesh.
            I&apos;m a <span className="purple">Software Developer</span> who
            enjoys building reliable products and learning new technologies.
            I completed my Bachelor of Science (BSC) in{" "}
            <span className="purple">Computer Science</span> from{" "}
            <span className="purple">Brac University</span>. 
            I firmly believe that {" "} <span className="purple">Persistence</span>
            {" "} and {" "} <span className="purple">Determination</span> are necessary for Success.
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Historical Fictions 📚
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Tech 👨‍💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Endeavour is its own Reward.
          </p>
          <footer className="blockquote-footer">Lion El'Johnson</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
