import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";

function LoginPage() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      navigate("/profile");
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    try {
      setLoading(true);
      setError(false);

      e.preventDefault();
      const res = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(true);
        return;
      }
      // Save user data to local storage
      localStorage.setItem("user", JSON.stringify(data.user));
      setLoading(false);
      navigate("/profile");
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <h1>Login</h1>
          {error && (
            <Alert variant="danger">Login failed. Please try again.</Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Your email address"
                id="email"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Your password"
                id="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </Button>
            <Link to="/create-account" className="btn btn-link">
              Don't have an account ?
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
