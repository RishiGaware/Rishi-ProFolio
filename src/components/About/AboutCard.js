import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Greetings, I am <span className="purple">Rushikesh Gaware</span>, a dedicated <span className="purple">Software Developer </span> .
  <br /> <br />
  Currently, I am enhancing my skills and knowledge in software development as an integral member of the dynamic team at Gohil Technologies Pvt Ltd. In this role, I actively contribute to the ideation and execution of innovative technological solutions, fostering a culture of excellence and creativity.
  <br />
  I am pursuing a B.Tech degree in Computer Science and Engineering with a specialization in Artificial Intelligence from Parul University. My academic pursuits are driven by a passion for leveraging cutting-edge technologies to address complex challenges and drive impactful results.
  <br />
  <br />
  Beyond my professional endeavors, I find fulfillment in various activities:
</p>
<ul>
  <li className="about-activity">
    <ImPointRight /> Exploring new technologies and frameworks
  </li>
  <li className="about-activity">
    <ImPointRight /> Engaging in problem-solving challenges
  </li>
  <li className="about-activity">
    <ImPointRight /> Collaborating with peers on open-source projects
  </li>
</ul>
          

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rushikesh Gaware</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
