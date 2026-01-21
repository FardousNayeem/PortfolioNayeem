import { Container, Row } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

import pdfFile from "../assets/FardousNayeemResume.pdf";

import { useEdgeNavigate } from "./Navigate/useEdgeNavigate";
import { NextSectionHint } from "./NextSectionHint";

export default function Resume() {
  const googleDriveLink =
    "https://drive.google.com/file/d/1Q0OoQaDlRIPFfk0lq5X76VhfuxlQadKh/preview";

  const {
    topRef,
    bottomRef,
    prev,
    next,
    showPrevHint,
    showNextHint,
    goPrev,
    goNext,
  } = useEdgeNavigate({ auto: false });

  return (
    <>
      <div ref={topRef} style={{ height: 1 }} />

      {prev ? (
        <NextSectionHint
          visible={showPrevHint}
          position="top"
          text={`Prev: ${prev.label}`}
          onClick={goPrev}
        />
      ) : null}

      {next ? (
        <NextSectionHint
          visible={showNextHint}
          position="bottom"
          text={`Next: ${next.label}`}
          onClick={goNext}
        />
      ) : null}

      <Container fluid className="resume-section" id="resume">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1 className="text-white">My Resume</h1>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <iframe
            src={googleDriveLink}
            title="Fardous Nayeem Resume"
            loading="lazy"
            referrerPolicy="no-referrer"
            allow="autoplay"
            style={{
              width: "min(100%, 900px)",
              height: "clamp(600px, 80vh, 1150px)",
              borderRadius: "8px",
              border: "none",
              background: "#100c19",
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
            style={{
              maxWidth: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <AiOutlineDownload />
            Download CV
          </a>
        </Row>
      </Container>

      <div ref={bottomRef} style={{ height: 1 }} />
    </>
  );
}
