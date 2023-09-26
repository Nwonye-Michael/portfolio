import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from "../assets/img/resturant.jpg"
import projImg2 from "../assets/img/eshop.jpg"
import projImg3 from "../assets/img/gpt3.jpg"
import projImg4 from "../assets/img/drag&drop.jpg"
import projImg5 from "../assets/img/moviebox.jpg"
import projImg6 from "../assets/img/moviebox.jpg"
import projImg7 from "../assets/img/vixcalc.jpg"
import projImg8 from "../assets/img/cyptocal.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png"
import "animate.css"
import TrackVisibility from "react-on-screen"

export const Projects = () => {
  const projects = [
    {
      title: "resturant",
      description: "Development",
      imgUrl: projImg1,
      link: "https://resturant-rust.vercel.app/",
    },
    {
      title: "eShop",
      description: "Development",
      imgUrl: projImg2,
      link: "https://e-shop-lsj2.vercel.app/login",
    },
    {
      title: "gpt3",
      description: "Development",
      imgUrl: projImg3,
      link: "https://gpt3-ten-gold.vercel.app/",
    },
    {
      title: "Drag and Drop Gallery",
      description: "Design & Development",
      imgUrl: projImg4,
      link: "https://hng-task3-beta.vercel.app/",
    },
    {
      title: "tmbl movies",
      description: "Development",
      imgUrl: projImg5,
      link: "https://hgn-task2.vercel.app/home",
    },
   {
      title: "vix-risk-calculator",
      description: "Design & Development",
      imgUrl: projImg7,
      link: "https://vix-cal.vercel.app/vix",
    },
    {
      title: "crypto-exchange-rate",
      description: "Design & Development",
      imgUrl: projImg8,
      link: "https://crypto-exchange-theta.vercel.app/market",
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>

                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
