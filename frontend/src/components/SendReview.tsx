import { Form, FormGroup } from "react-bootstrap"; // Import FormGroup from Form
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";

function SendReview() {
  const { user } = useUser();
  return (
    <>
      {user ? (
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <h1>Send Review</h1>
            <Form>
              <FormGroup className="mb-3">
                <Form.Label className="">Title of Song</Form.Label>
                <Form.Control
                  type="title"
                  placeholder="Ex: Starstruck v2"
                  style={{ width: "400px" }}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <Form.Label>Information Review Request</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Place any information that you would like an admin to review"
                  style={{ width: "400px" }}
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

              <Button className="mb-3">Send</Button>
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
