import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

function AddSong() {
  const { user } = useUser();
  const [title, setTitle] = useState("");
  const [information, setInformation] = useState("");
  const [date, setDate] = useState("");
  const [era, setEra] = useState("");
  const [type, setType] = useState("");
  const [currentlyAvailable, setCurrentlyAvailable] = useState("");
  const [circulating, setCirculating] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false); // State for tracking submission success

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Check if user is null
    if (!user) {
      console.error("User is not authenticated");
      return;
    }

    try {
      const response = await fetch("https://juicehub.onrender.com/songs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          information,
          date,
          era,
          type,
          currentlyAvailable,
          circulating,
        }),
      });

      if (response.ok) {
        console.log("Song submitted successfully");
        setSubmissionSuccess(true); // Set submission success state to true
        // Optionally, you can redirect the user to another page
      } else {
        console.error("Failed to submit song");
      }
    } catch (error) {
      console.error("Error submitting song:", error);
    }
  };
  return (
    <>
      {user ? (
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <h1>Add New Song</h1>
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
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Date"
                  style={{ width: "400px" }}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Label>Info</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Info"
                  rows={4}
                  style={{ width: "400px" }}
                  value={information}
                  onChange={(e) => setInformation(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Label>Era</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex: JW3"
                  style={{ width: "400px" }}
                  value={era}
                  onChange={(e) => setEra(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type"
                  style={{ width: "400px" }}
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Label>Currently Available</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Currently Available"
                  style={{ width: "400px" }}
                  value={currentlyAvailable}
                  onChange={(e) => setCurrentlyAvailable(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Label>Circulating</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Circulating"
                  style={{ width: "400px" }}
                  value={circulating}
                  onChange={(e) => setCirculating(e.target.value)}
                />
              </FormGroup>
              {/* <FormGroup className="mb-3">
                <Form.Label>User ID</Form.Label>
                <Form.Control
                  type="text"
                  value={user.uid}
                  readOnly
                  style={{ width: "400px" }}
                />
              </FormGroup> */}
              <Button type="submit" className="mb-3">
                Send
              </Button>
            </Form>
            {submissionSuccess && <p>Song submitted successfully!</p>}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1>If you want to contribute to a song's information, sign in</h1>
          <Link to="/login">
            <Button>Log in</Button>
          </Link>
        </div>
      )}
    </>
  );
}
export default AddSong;
