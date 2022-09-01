import {Container, Row, Col, Nav, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import colorSharp2 from "../assets/img/color-sharp2.png";

import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {
                                ({isVisible}) =>
                                    <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <h2>Projects</h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Architecto assumenda at laborum quaerat quas sint!
                                        </p>
                                    </div>
                            }
                        </TrackVisibility>

                                    <Tab.Container id="projects-tab" defaultActiveKey="first">
                                            <Nav variant="pills" className="nav-pills mb-5 align-items-center justify-content-center" id="pills-tab">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="first">
                                                    <Row>
                                                        {
                                                            projects.map((project, index) => {
                                                                return (
                                                                    <ProjectCard key={index} {...project} />
                                                                )
                                                            })
                                                        }
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="second">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, nobis!
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, nobis!
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} className="background-image-right" alt="image"/>
        </section>
    )
}