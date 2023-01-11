import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faMagnifyingGlass,
  faShieldCat,
} from "@fortawesome/free-solid-svg-icons";
import "./nav.css";
import avatar from "../../imgs/avatar.png";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="me-5 d-flex align-items-center">
          <FontAwesomeIcon icon={faShieldCat} className="logo-icon" />
          motiv.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="ms-5">
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex ms-5">
            <Form.Control
              type="search"
              placeholder="Search or type"
              className="me-2"
              aria-label="Search"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Form>
        </Navbar.Collapse>
        <Nav.Link href="#link" className="nav-bell me-4">
          <FontAwesomeIcon icon={faBell} />
        </Nav.Link>
        <Nav.Link href="#link">
          <img src={avatar} alt="avatat" className="nav-avatar" />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;
