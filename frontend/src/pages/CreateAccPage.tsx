// import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Alert, Col, Container, Row } from "react-bootstrap";

function CreateAccPage() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPass, setConfirmPass] = useState("");
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    try {
      setLoading(true);
      setError(false);

      e.preventDefault();
      const res = await fetch("http://localhost:4000/auth/signup", {
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
      setLoading(false);
      navigate("/");
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  // const navigate = useNavigate();
  // const createAccount = async () => {
  //   try {
  //     if (password !== confirmPass) {
  //       setError("Passwords do not match !");
  //       return;
  //     }
  //     if (password.length < 6) {
  //       setError("Password must be at least 6 characters long!");
  //       return;
  //     }

  //     await createUserWithEmailAndPassword(getAuth(), email, password);
  //     navigate("/profile");
  //   } catch {
  //     setError(error);
  //   }
  // };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <h1>Create Account Page</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
              />
            </Form.Group>
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
              {loading ? "Loading..." : "Create Account"}
            </Button>
            <Link to="/login" className="btn btn-link">
              Login
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateAccPage;
