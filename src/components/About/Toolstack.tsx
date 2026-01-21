import { Col, Row } from "react-bootstrap";

import EndeavourOS from "../../assets/TechIcons/EndeavourOS.svg";
import Firefox from "../../assets/TechIcons/Firefox.svg";
import Windows from "../../assets/TechIcons/Windows.svg";
import VSCodium from "../../assets/TechIcons/VSCodium.svg";
import GPT from "../../assets/TechIcons/ChatGPT.svg";

export default function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={EndeavourOS} alt="EndeavourOS" className="tech-icon-images" />
        <div className="tech-icons-text">EndeavourOS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Firefox} alt="Firefox" className="tech-icon-images" />
        <div className="tech-icons-text">Firefox</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={VSCodium} alt="VSCodium" className="tech-icon-images" />
        <div className="tech-icons-text">VSCodium</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={GPT} alt="ChatGPT" className="tech-icon-images" />
        <div className="tech-icons-text">ChatGPT</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Windows} alt="Windows 10" className="tech-icon-images" />
        <div className="tech-icons-text">Windows 10</div>
      </Col>
    </Row>
  );
}
