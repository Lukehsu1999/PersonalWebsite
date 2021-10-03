import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ssyWebsite from "../../Assets/Projects/SSYWebsite.JPG";
import ssyChatbot from "../../Assets/Projects/SSYChatbot.JPG";
import arTourguide from "../../Assets/Projects/Tourguide.JPG";
import cityHack from "../../Assets/Projects/CityHack.JPG";
import covidApp from "../../Assets/Projects/CovidApp.JPG";
import rewriter from "../../Assets/Projects/Rewriter.JPG";
import traffic from "../../Assets/Projects/traffic.jpg";
import dsc from "../../Assets/Projects/DSC_Certificate.jpg";
import acm from "../../Assets/Projects/acm2.JPG";
import aws from "../../Assets/Projects/AWS_certificate.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Internship <strong className="purple"> Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Below are the projects I have participated in Sik Sik Yuen,
          I will not share the code here to protect the company's copyrights,
          but I can share the link to the public websites.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ssyWebsite}
              isBlog={false}
              title="Sik Sik Yuen Website"
              description="Sik Sik Yuen is a NGO supporting schools, hospitals, and elderly care centers across Hong Kong. I have worked on the renovation of the website for 4 months and implemeted the search mechanism. Since there's not enough documentation on Sitefinity online, I have to learn how to do indexing and filtering by myself. To make the widgets more flexible, I also study MVC design pattern and widget designers. Written in C#, Javascript, and a bit AngularJS."
              link="https://www2.siksikyuen.org.hk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ssyChatbot}
              isBlog={false}
              title="Sik Sik Yuen Website Chatbot"
              description="To make our services more accesible, I initiated this project to handle queries and other WTS-related services. The chatbot is built on Dialogflow CX with the innovative state machine design. Given that Hong Kong citizens use different languages, the chatbot supports Mandarin, Cantonese, and English. Additionally, we also built a webhook server with Node.js to handle more complex responses."
              link="https://www2.siksikyuen.org.hk/en/index"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={arTourguide}
              isBlog={false}
              title="Wong Tai Sin Temple AR tour guide (still in development)"
              description="With a view to promote the historic temple, I proposed this functionality to integrate into the existing mobile app TOANET (written in React-Native). I use Unity (C#) to realize the AR objects and use Mapbox for geo-computing services such as routing and locating."
              link="https://docs.google.com/document/d/1jyASH9IZ2ZBFTzYmoeKP9D1ZfdY0NINakDhlI5m3JN0/edit?usp=sharing"
            />
          </Col>
        </Row>
          <h1 className="project-heading">
            My Personal and Collaborative <strong className="purple"> Projects </strong>
          </h1>
          <p style={{ color: "white" }}>
            Below are the projects I build with Google Developer Student Club and my personal projects.
          </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cityHack}
              isBlog={false}
              title="CityU Hackathon21 Website (DSC project)"
              description=""
              link="https://github.com/CityU-DSC/cityhack21"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covidApp}
              isBlog={false}
              title="Covid Report App (DSC project)"
              description=""
              link="https://github.com/CityU-DSC/covid19app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rewriter}
              isBlog={false}
              title="Formality Rewriter"
              description=""
              link="https://github.com/Lukehsu1999/Academic-and-Formality-Rewriter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={true}
              title="Ride-Sharing and Transferring Algorithm @ INFORMS Taipei International Conference"
              description="Present research results as “An Efficient Algorithm for Pickup and Delivery Problems with Ride-sharing and Multiple Transfers”              "
              link=""
            />
          </Col>
        </Row>
        <h1 className="project-heading">
            My <strong className="purple"> Achievements </strong>
        </h1>
          
        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acm}
              isBlog={false}
              title="ACM/ICPC Hong Kong site Certificate of Achievements"
              description="Represent CityU to attend the ACM/ICPC contest in 2019."
              link=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dsc}
              isBlog={false}
              title="Google Developer Student Clubs Core Team Member"
              description="Join the CityU DSC club and act as a core team member from 2020 to 2021."
              link=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aws}
              isBlog={false}
              title="AWS Certified Cloud Practitioner"
              description="Pass the Amazon Web Service exam and receive certificate."
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
