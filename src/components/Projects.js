import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const projects = [
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
    url: "https://github.com/Whis2903/JARVIS-AI-BOT" // replace with the URL of your project
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
    url: "https://example.com/project2" // replace with the URL of your project
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
    url: "https://example.com/project3" // replace with the URL of your project
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg1,
    url: "https://example.com/project4" // replace with the URL of your project
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg2,
    url: "https://example.com/project5" // replace with the URL of your project
  },
  {
    title: "Business Startup",
    description: "Design & Development",
    imgUrl: projImg3,
    url: "https://example.com/project6" // replace with the URL of your project
  },
];

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my project portfolio where technology and creativity converge. These projects reflect my dedication to addressing real-world challenges in web development, app development, data analysis, and beyond. Join me in this showcase of innovative solutions and their impact on the tech landscape.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                url={project.url}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
