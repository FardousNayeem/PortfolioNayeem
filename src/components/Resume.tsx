import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "./Particle";


import pdfFile from "../assets/FardousNayeemResume.pdf";

export default function Resume() {
  const googleDriveLink = "https://drive.google.com/file/d/1Q0OoQaDlRIPFfk0lq5X76VhfuxlQadKh/preview";

  return (
    <Container fluid className="resume-section">
      <Particle />

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <h1 className="text-white">My Resume</h1>
      </Row>

      <Row style={{ justifyContent: "center", paddingTop: "10px", paddingBottom: "10px" }}>
        <iframe
          src={googleDriveLink}
          title="Fardous Nayeem Resume"
          style={{
            width: "min(100%, 900px)",
            height: "1150px",
            borderRadius: "4px",
            border: "none",
            background: "#100c19"
          }}
        />
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <a
          className="btn btn-primary"
          href={pdfFile}
          download="Fardous_Nayeem_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={{ maxWidth: "250px", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </a>
      </Row>
    </Container>
  );
}