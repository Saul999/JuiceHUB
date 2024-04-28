import { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

function SendReview() {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [information, setInformation] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Check if user is null
    if (!user) {
      console.error("User is not authenticated");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/contributions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          information,
          userID: user.uid, // Since user is not null here, accessing user.uid is safe
        }),
      });

      if (response.ok) {
        console.log("Review submitted successfully");
        // Optionally, you can redirect the user to another page
      } else {
        console.error("Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <>
      {user ? (
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <h1>Song Contribution</h1>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <Form.Label>Title of Song</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex: Starstruck v2"
                  style={{ width: "400px" }}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Label>Information Review Request</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Place any information that you would like an admin to review"
                  style={{ width: "400px" }}
                  value={information}
                  onChange={(e) => setInformation(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Label>User ID</Form.Label>
                <Form.Control
                  as="textarea"
                  value={user.uid} // Since user is not null here, accessing user.uid is safe
                  readOnly
                  style={{ width: "400px" }}
                />
              </FormGroup>

              <Button type="submit" className="mb-3">
                Send
              </Button>
            </Form>
          </div>
        </div>
      ) : (
        <>
          <h1>If you want to contribute to a song's information, sign in</h1>
          <Link to="/login">
            <Button>Log in</Button>{" "}
          </Link>
        </>
      )}
    </>
  );
}

export default SendReview;
