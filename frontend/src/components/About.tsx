import Accordion from "react-bootstrap/Accordion";

function About() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Description</Accordion.Header>
        <Accordion.Body>
          The JuiceHub will be an interactive and informative website about the
          late artist Juice WRLD. This platform aims to compile comprehensive
          data for each of his songs, offering users a detailed insight into the
          artist's musical legacy.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>About Us</Accordion.Header>
        <Accordion.Body>
          I am a computer science student working on the JuiceHub for fun and on
          my freetime.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Contact Us</Accordion.Header>
        <Accordion.Body>
          If you have any question or need to contact me email @
          sauljr385@gmail.com
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default About;
