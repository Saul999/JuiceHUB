import { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

function SendReview() {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [information, setInformation] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // State for tracking submission success

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Check if user is null
    if (!user) {
      console.error("User is not authenticated");
      return;
    }

    try {
      const response = await fetch(
        "https://juicehub.onrender.com/contributions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            information,
            userID: user.uid,
          }),
        }
      );

      if (response.ok) {
        console.log("Review submitted successfully");
        setSubmissionSuccess(true); // Set submission success state to true
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
                  value={user.uid}
                  readOnly
                  style={{ width: "400px" }}
                />
              </FormGroup>

              <Button type="submit" className="mb-3">
                Send
              </Button>
            </Form>
            {submissionSuccess && <p>Review submitted successfully!</p>}{" "}
            {/* Conditionally render success message */}
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
