//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
//import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import useUser from "../hooks/useUser";
// import { Link } from "react-router-dom";
//import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const { user, isLoading } = useUser();

  // stops "login" rendering when user is logged in
  if (user === null) {
    return null;
  }

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
              <Nav.Link href="/review">Send Review</Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="search-bar"
                aria-label="Search"
              />
              <Button className="search-button">Search</Button>
            </Form> */}
            {user ? (
              <Nav.Link className="white" href="/profile">
                Profile
              </Nav.Link>
            ) : (
              <Nav.Link className="white" href="/login">
                Log In
              </Nav.Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
