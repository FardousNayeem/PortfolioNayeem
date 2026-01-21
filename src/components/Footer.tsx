import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub,   AiFillRedditSquare, AiOutlineFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-copywright">
          <h3>Copyright © {year} Fardous Nayeem</h3>
        </Col>

        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/FardousNayeem"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.facebook.com/Fardous0Nayeem/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/fardous-nayeem/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.reddit.com/user/xXx_Irrelevant_xXx/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillRedditSquare/>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
