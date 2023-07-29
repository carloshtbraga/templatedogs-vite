import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";

import logo from "../../assets/pawn.svg";
import moon from "../../assets/moon.png";
import normal from "../../assets/normal.png";
import donation from "../../assets/donation.png";

import MyContext from "../../Context/MyContext";
import { useContext } from "react";

export default function Header() {
  const { toggleDarkMode, isDarkMode } = useContext(MyContext);

  return (
    <>
      <Navbar
        expand="lg"
        className={`${isDarkMode ? "bg-custom-dark" : "bg-custom"}`}
      >
        <Container className={isDarkMode ? "main-header-dark" : "main-header"}>
          <Navbar.Brand href="#home" className="brand">
            <img
              className="logo"
              src={logo}
              alt="https://via.placeholder.com/400x400"
            />
            <h2>Dog!</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="links-container sticky-top ">
              <Nav className="me-auto">
                
                <Nav.Link href="#home" className="link">
                  Contato
                </Nav.Link>
                <Nav.Link href="#home" className="link">
                  Equipe
                </Nav.Link>
                

                <Nav.Link href="#link" className="link">
                  
                  <button className="darkbtn" onClick={toggleDarkMode}>
                  <img src={isDarkMode? normal : moon} alt="" className="darkimg" /> {isDarkMode ? "Normal Mode" : "Dark Mode"}
                  </button>
                </Nav.Link>
                <Nav.Link href="#home" className="link">
                <button className="darkbtn">
                <img src={donation} alt="" className="darkimg"/> Doar
                  </button>
           
                </Nav.Link>
                
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <svg
        className={isDarkMode ? "svgdark" : "svglight"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 180 1440 140"
      >
        <path
          fill={isDarkMode ? "rgb(50, 50, 50)" : "#af0745"}
          fillOpacity="10"
          d="M0,224L180,192L360,288L540,96L720,192L900,192L1080,256L1260,160L1440,320L1440,0L1260,0L1080,0L900,0L720,0L540,0L360,0L180,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
