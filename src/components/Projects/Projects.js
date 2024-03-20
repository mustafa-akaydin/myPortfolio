import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title='Twitter Clone'
              description=''
              ghLink='https://github.com/mustafa-akaydin/twitter-clone-nextjs'
              demoLink='https://twitter-clone-nextjs-ten-dusky.vercel.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title='Search Photo'
              description=' '
              ghLink='https://github.com/mustafa-akaydin/search-photo'
              demoLink='https://search-photo-mu.vercel.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title='Game Portal'
              description=' '
              ghLink='https://github.com/mustafa-akaydin/game-portal-site-scss'
              demoLink='https://game-portal-site-scss.vercel.app/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects;
