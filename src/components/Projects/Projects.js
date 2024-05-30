import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import findme from "../../Assets/Projects/findme.png";
import DMS from "../../Assets/Projects/DMS.png";
import petParadiseShop from "../../Assets/Projects/petParadiseShop.png";
import MindShuffle from "../../Assets/Projects/MindShuffle.png";
import QuizApp from "../../Assets/Projects/QuizApp.png";
import Resturant from "../../Assets/Projects/Resturant.png";





function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={findme}
              isBlog={false}
              title="Find Me"
              description="
              FindMe is a revolutionary web app using advanced photo recognition, MERN stack, and AI to swiftly locate individuals by cross-referencing photos with an extensive database. It helps reunite loved ones, provide emergency assistance, and enhance community safety, offering an intuitive interface for seamless user experience."
              ghLink="#"
              // ghLink="https://github.com/soumyajit4419/Chatifysdsdsd"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DMS}
              isBlog={false}
              title="Donation Management System"
              description="The Donation Management System improves the overall donation process by providing users, admins, and reviewers with the necessary tools to manage donations effectively. This system ensures transparency, enhances record-keeping accuracy, and simplifies the management of donation-related tasks."
              ghLink="#"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petParadiseShop}
              isBlog={false}
              title="PetParadise Shop"
              description="PetParadise Shop is a dedicated platform designed to help users find and buy new pets. Our project focuses on creating a user-friendly and visually appealing front-end interface, making it easy for prospective pet owners to browse and select their ideal pets. With PetParadiseShop, you can explore a variety of pets, read detailed profiles."
              ghLink="#"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MindShuffle}
              isBlog={false}
              title="MindShuffle"
              description="MindShuffle is a console-based number puzzle game developed in C, designed to challenge players to arrange numbers in a 4x4 grid from 1 to 15. This engaging game features a text-based console UI with colored text, arrow key controls for moving numbers, and a unique randomized grid for each game. It tracks remaining moves and provides a congratulatory message upon winning. Players can easily exit the game by pressing 'E'."
              ghLink=": https://github.com/RishiGaware/Project-1.0.git"
              // ghLink="https://lorecioni.github.io/fifteen-puzzle-game/"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              isBlog={false}
              title="QuizMaster"
              description="QuizMaster is a user-friendly quiz website designed to provide a seamless experience for users who want to test their knowledge across various subjects. The website features a simple and intuitive interface, allowing users to easily select from a wide range of subjects, take quizzes, and receive instant results. Built with HTML5, CSS3, JavaScript, and the MERN stack technologies, QuizMaster ensures a robust, dynamic, and interactive user experience."
              ghLink="#"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Resturant}
              isBlog={false}
              title="DineDynasty"
              description="DineDynasty is a feature-rich restaurant website offering seamless online reservations, menu browsing, online ordering, special offers, customer reviews, event bookings, and loyalty rewards. With its modern interface and integrated social media, GourmetDelight ensures a delightful dining experience for customers."
              ghLink="#"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
