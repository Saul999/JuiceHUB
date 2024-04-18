import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const googleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        navigate("/");
        console.log(response.user);
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  const githubProvider = new GithubAuthProvider();

  const githubSignUp = () => {
    signInWithPopup(auth, githubProvider)
      .then((response) => {
        navigate("/");
        console.log(response.user);
      })
      .catch((err) => {
        console.log(err.code);
      });
  };

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/");
    } catch (e) {
      setError(error); // Fix: Use the error message from the caught error
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <h1>Log In Page</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={logIn}>
              Log in
            </Button>
            <Link to="/create-account" className="ml-2">
              Create Account Here
            </Link>
          </Form>
          <div className="mt-3">
            <Button variant="outline-danger" onClick={googleSignUp}>
              Sign in with Google
            </Button>{" "}
            <Button variant="outline-dark" onClick={githubSignUp}>
              Sign in with Github
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
