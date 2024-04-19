import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SendReview() {
  return (
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
        </Form>
        <Button className="mb-3">Send</Button>
      </div>
    </div>
  );
}

export default SendReview;
