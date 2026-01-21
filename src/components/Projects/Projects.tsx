import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import BloodaidImg from "../../assets/Projects/BloodAid.png";
import scholarsHubImg from "../../assets/Projects/ScholarsHub.png";
import AniflixImg from "../../assets/Projects/Aniflix.png";
import UmateImg from "../../assets/Projects/Umate.png";

import { useEdgeNavigate } from "../Navigate/useEdgeNavigate";
import { NextSectionHint } from "../NextSectionHint";

type Project = {
  title: string;
  description: string;
  ghLink?: string;
  demoLink?: string;
  imgPath?: string;
};

const ghOgImage = (owner: string, repo: string) =>
  `https://opengraph.githubassets.com/1/${owner}/${repo}`;

const projects: Project[] = [
  {
    title: "BloodAid",
    description:
      "Flask-based web app for managing blood donation posts and donor lists, with profile pages, campaign views, and encrypted storage of sensitive user data in SQLite.",
    ghLink: "https://github.com/FardousNayeem/BloodAid",
    demoLink: "https://bloodaid-2wfk.onrender.com/",
    imgPath: BloodaidImg,
  },
  {
    title: "ScholarsHub",
    description:
      "Full-stack academic portal using React, Spring Boot and PostgreSQL, with secure auth, role-based pages, basic ML-backed features, PDF uploads, and a chat that answers from stored documents.",
    ghLink: "https://github.com/FardousNayeem/ScholarsHub",
    demoLink:
      "https://drive.google.com/file/d/1gm-bpuC18xEBIVqlYitJoTb7ZRKsKvxV/view?usp=sharing",
    imgPath: scholarsHubImg,
  },
  {
    title: "UMate",
    description:
      "Cross-platform study companion built in Flutter and Firebase, offering friend lists, realtime chat, synced notes and simple schedule planning across mobile and desktop.",
    ghLink: "https://github.com/FardousNayeem/UMate",
    demoLink: "https://github.com/FardousNayeem/UMate/releases",
    imgPath: UmateImg,
  },
  {
    title: "AniFlix",
    description:
      "Full-stack anime streaming site built with Django and JavaScript, with Google login, profiles, bookmarks, genre pages, event registration, and a merchandise shop with cart, orders and SSLCommerce payments.",
    ghLink: "https://github.com/FardousNayeem/AniFlix",
    imgPath: AniflixImg,
  },
  {
    title: "AnonChat",
    description:
      "Secure chat app built with React and Firebase with anonymous accounts, realtime messaging, and end-to-end encrypted conversations in the browser.",
    ghLink: "https://github.com/FardousNayeem/AnonChat",
    imgPath: ghOgImage("FardousNayeem", "AnonChat"),
  },
  {
    title: "COSA",
    description:
      "COSA is a winget wrapper that installs open source apps for various functions on Windows 10 and Windows 11 PCs.",
    ghLink: "https://github.com/FardousNayeem/COSA",
    imgPath: ghOgImage("FardousNayeem", "COSA"),
  },
];

export default function Projects() {
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

      <Container fluid className="project-section" id="projects">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>

          <p style={{ color: "white" }}>
            Here are a few projects I&apos;ve worked on recently.
          </p>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {projects.map((p) => (
              <Col key={p.title} md={4} className="project-card">
                <ProjectCard
                  title={p.title}
                  description={p.description}
                  ghLink={p.ghLink}
                  demoLink={p.demoLink}
                  imgPath={p.imgPath}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>

      <div ref={bottomRef} style={{ height: 1 }} />
    </>
  );
}
