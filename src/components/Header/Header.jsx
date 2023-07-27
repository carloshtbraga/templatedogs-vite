import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import logo from '../../assets/pawn.svg'

export default function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-custom">
        <Container className="main-header">
          <Navbar.Brand href="#home" className="brand">
            <img
              className="logo"
              src={logo}
              alt="https://via.placeholder.com/400x400"
            />
            <h2>Sitename</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className="link">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="link">
                Link
              </Nav.Link>
              <NavDropdown
                title="Mais"
                className="link dropdown-link"
                id="basic-nav-dropdown"
                style={{ color: "white" }}
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 180 1440 140" className="svgheader">
        <path
          fill="#af0745"
          fillOpacity="10"
          d="M0,224L180,192L360,288L540,96L720,192L900,192L1080,256L1260,160L1440,320L1440,0L1260,0L1080,0L900,0L720,0L540,0L360,0L180,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
