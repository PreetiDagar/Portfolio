import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg3 from "../assets/img/projImg3.png";
import projImg4 from "../assets/img/projImg4.png";
import projImg5 from "../assets/img/projImg5.png";
import projImg6 from "../assets/img/projImg6.png";
import Imation from "../assets/img/Imation.png";
import Hologram from "../assets/img/Hologram.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "HOME PAGE",
      code:<a href={'https://github.com/PreetiDagar/Cinemake-Bollywood-in-Town'}>code</a>,
      imgUrl: projImg1,
    },
    {
      title: "Profile Page",
      code:<a href={'https://github.com/PreetiDagar/Cinemake-Bollywood-in-Town'}>code</a>, 
      imgUrl: projImg2,
    },
    {
      title: "Market Page",
      code: <a href={'https://github.com/PreetiDagar/Cinemake-Bollywood-in-Town'}>code</a>,
      imgUrl: projImg3,
    },
    {
      title: "Sell Page",
      code:<a href={'https://github.com/PreetiDagar/Cinemake-Bollywood-in-Town'}>code</a>,
      imgUrl: projImg4,
    },
    {
      title: "LogIn page",
      code: <a href={'https://github.com/PreetiDagar/Cinemake-Bollywood-in-Town'}>code</a>,
      imgUrl: projImg5,
    },
    {
      title: "Contact Page",
      code: <a href={'https://github.com/PreetiDagar/Cinemake-Bollywood-in-Town'}>code</a>,
      imgUrl: projImg6,
    },
    
  ];
  const projects1 = [
    {
      title: "Imation",
      code:<a href={'https://github.com/PreetiDagar/Image-Caption-Generator'}>code</a>,
      imgUrl: Imation,
    },];
    const projects2 = [
      {
        title: "Hologram",
        code:<a href={'https://github.com/PreetiDagar/Hologram-with-Speech-Synthesis'}>code</a>,
        imgUrl: Hologram,
      },];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Showcasing a diverse range of projects that demonstrate my skills and expertise in (relevant field), my portfolio highlights my ability to successfully plan, execute, and deliver high-quality results to clients and stakeholders.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">CINEMAKE</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">IMATION</Nav.Link>
                       
    
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Hologram with Speech Synthesis</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      
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
