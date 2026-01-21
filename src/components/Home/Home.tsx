import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/home-main.svg";

import Home2 from "./Home2";
import Type from "./Type";

import { AiFillGithub, AiOutlineFacebook, AiFillRedditSquare } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import { useEdgeNavigate } from "../Navigate/useEdgeNavigate";
import { NextSectionHint } from "../NextSectionHint";

export default function Home() {
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
    <section>
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

      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;M
                <strong className="main-name"> FARDOUS NAYEEM</strong>
              </h1>

              <div style={{ padding: 30, paddingLeft: 50, textAlign: "left" }}>
                <h1>I&apos;M Into</h1> <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/FardousNayeem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.facebook.com/Fardous0Nayeem/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fardous-nayeem/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.reddit.com/user/xXx_Irrelevant_xXx/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillRedditSquare />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div ref={bottomRef} style={{ height: 1 }} />
    </section>
  );
}
