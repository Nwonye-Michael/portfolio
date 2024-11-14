import { useState, useEffect } from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import navIcon5 from "../assets/img/nav-icon5.svg"
import navIcon4 from "../assets/img/nav-icon4.svg"
import { HashLink } from "react-router-hash-link"
import { BrowserRouter as Router } from "react-router-dom"

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/michael-nwonye-2a60b2261/">
                  {/* <img src={navIcon1} alt="" /> */}
                  <FaLinkedin />
                </a>
                {/*    <a href="https://twitter.com/miko_loh">
                  <img src={navIcon4} alt="" />
                </a>
                */}
                <span>
                  <a href="https://github.com/Nwonye-Michael">
                    {/* <img src={navIcon5} alt="" /> */}
                    <FaGithub />
                  </a>
                </span>
              </div>
              {/*   <HashLink to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
