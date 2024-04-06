import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import useUser from "../hooks/useUser";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import { NavItem } from "react-bootstrap";

const NavBar = () => {
  // const { user } = useUser();

  return (
    <>
      <Navbar expand="lg" className="navbar-dark bg-transparent">
        <Container fluid>
          <Navbar.Brand href="/">JuiceHUB</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/list">List</Nav.Link>
              <Nav.Link href="/songs/:SongId/send-review">Send Review</Nav.Link>
            </Nav>
            <Nav.Link className="white" href="/profile">
              Profile
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
