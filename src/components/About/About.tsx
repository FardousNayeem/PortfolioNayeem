import { Container, Row, Col } from "react-bootstrap";

import Github from "./Github";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import Toolstack from "./Toolstack";

import laptopImg from "../../assets/about.png";

import { useEdgeNavigate } from "../Navigate/useEdgeNavigate";
import { NextSectionHint } from "../NextSectionHint";

export default function About() {
  const {
    topRef,
    bottomRef,
    prev,
    next,
    showPrevHint,
    showNextHint,
    goPrev,
    goNext,
  } = useEdgeNavigate({ auto: true });

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

      <Container fluid className="about-section" id="about">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I&apos;M</strong>
              </h1>

              <AboutCard />
            </Col>

            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid"
                loading="lazy"
              />
            </Col>
          </Row>

          <h1 className="project-heading">
            Professional <strong className="purple">Skills & Abilities</strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            My <strong className="purple">Development</strong> Environment
          </h1>

          <Toolstack />

          <Github />
        </Container>
      </Container>

      
      <div ref={bottomRef} style={{ height: 1 }} />
    </>
  );
}
