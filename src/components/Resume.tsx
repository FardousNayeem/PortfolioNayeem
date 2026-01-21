import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "./Particle";

import pdfFile from "../Assets/FardousNayeemResume.pdf";
import resumeImg from "../Assets/FardousNayeem_CV.jpg";

export default function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <h1>My Resume</h1>
      </Row>

      <Row style={{ justifyContent: "center", paddingTop: "30px", paddingBottom: "30px" }}>
        <img
          src={resumeImg}
          alt="Resume preview"
          style={{
            width: "min(100%, 1000px)",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
          }}
        />
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <a
          className="btn btn-primary"
          href={pdfFile}
          download
          target="_blank"
          rel="noreferrer"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </a>
      </Row>
    </Container>
  );
}
