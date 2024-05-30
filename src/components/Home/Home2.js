import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Rishi.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
              <br />
              <br />
              👋 Fluent in classics like <span className="purple">C++</span> and <span className="purple">JavaScript</span>, I specialize in backend development with <span className="purple">Node.js</span> and <span className="purple">Express.js</span>. Proficient in <span className="purple">MongoDB</span>, <span className="purple">MySQL</span>, and Spring Boot, I'm ready to tackle innovative projects and drive impactful solutions! 💻✨
              <br />
              <br />
              My passion in <span className="purple">Software Development</span> extends to pioneering advancements in <span className="purple">Web Technologies</span> and <span className="purple">Products Developement</span> , leveraging creativity and innovation to build impactful solutions.              <br />
              <br />
              Whenever possible, I also apply my passion for developing products with <span className="purple">Node.js</span> and modern Javascript libraries and frameworks like <span className="purple">React.js</span>, <span className="purple">Next.js</span>, <span className="purple">Vue.js</span>, and <span className="purple">Angular</span>. Additionally, I stay updated with emerging technologies such as <span className="purple">GraphQL</span>, <span className="purple">TypeScript</span>, and serverless architectures, ensuring our solutions are at the forefront of innovation.              <br />
              <br />
            
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="avatar-container">
                <img src={myImg} className="img-fluid" alt="avatar" />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RishiGaware"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/fullstack-developer-rishi-gaware/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/invites/contact/?igsh=o5i32eb9x2dn&utm_content=2vpq9ul"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
