import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portal from "../../Assets/Projects/portal.png";
import search from '../../Assets/Projects/search.png'
import twitter from '../../Assets/Projects/twitter.png'
import weather from '../../Assets/Projects/weather.png'


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
              imgPath={twitter}
              isBlog={false}
              title='Twitter Clone'
              description=''
              ghLink='https://github.com/mustafa-akaydin/twitter-clone-nextjs'
              demoLink='https://twitter-clone-nextjs-ten-dusky.vercel.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={search}
              isBlog={false}
              title='Search Photo'
              description=' '
              ghLink='https://github.com/mustafa-akaydin/search-photo'
              demoLink='https://search-photo-mu.vercel.app/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={portal}
              isBlog={false}
              title='Game Portal'
              description=' '
              ghLink='https://github.com/mustafa-akaydin/game-portal-site-scss'
              demoLink='https://game-portal-site-scss.vercel.app/'
            />
          </Col>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title='Weather'
              description=' '
              ghLink='https://github.com/mustafa-akaydin/weather-js'
              demoLink='https://weather-js-eight.vercel.app/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects;
