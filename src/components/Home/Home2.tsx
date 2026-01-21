import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";

import myImg from "../../Assets/avatar.svg";

export default function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a Software Engineer who loves transforming ideas into reliable,
              scalable products. Over time, I’ve explored several technologies
              and found my passion in building smart systems and
              intuitive user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple"> JavaScript, Dart, Python and Java </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple"> Web Applications, Android Applications, Cross Platform Solutions, </b>
              </i>
              and exploring new ways to integrate AI into real world systems.
              <br />
              <br />
              Whenever possible, I love building projects with
                <b className="purple"> Flutter </b>,
                <b className="purple">Flask</b>,
                <b className="purple">Springboot</b> and
                <b className="purple">React.js</b>.
              
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
