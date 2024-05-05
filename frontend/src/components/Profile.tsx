import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Logout from "./Logout";

function Profile() {
  const { user } = useUser();

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          {user ? (
            <>
              <h1 className="text-center mb-4">{user.displayName}</h1>
              <Row>
                <Col>
                  <h2>Top 5 Songs</h2>
                  <li>WIP</li>
                </Col>
                <Col>
                  <h2>Comments</h2>
                  <li>wIP</li>
                </Col>
              </Row>
            </>
          ) : (
            <div className="text-center">
              <h1>Welcome to the JuiceHub</h1>
              <p className="mb-4">Please log in to view your profile.</p>
              <Link to="/login">
                <Button variant="primary">Log In</Button>
              </Link>
            </div>
          )}
        </Col>
      </Row>
      {user && (
        <div className="fixed-bottom text-center mb-4">
          <Logout />
        </div>
      )}
    </Container>
  );
}

export default Profile;
