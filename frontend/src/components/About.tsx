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
          artist's musical legacy. If you want a more detailed report{" "}
          <a
            target="_blank"
            href="https://docs.google.com/document/d/1WpAbp_2ocZH5fRYMviyKkMfK_9chKKvsVLQzYzQp5cE/edit"
          >
            click here
          </a>
          .
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Specific Terms and Meanings</Accordion.Header>
        <Accordion.Body>
          CDQ - "CD Quality" | HQ - "High Quality" | "Circulating" - The songs
          is on the internet and not "vaulted" | "Full" - The full song is
          available
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
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
