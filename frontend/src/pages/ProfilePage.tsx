import { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

interface UserData {
  username: string;
  email: string;
  // Add more properties as needed
}

function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:4000/auth/signin", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await res.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        setError("Error");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!userData) return null;

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md="auto">
          <h1>Welcome, {userData.username}</h1>
          <p>Email: {userData.email}</p>
          {/* Add more profile information here */}
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
