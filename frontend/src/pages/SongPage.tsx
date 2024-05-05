import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, Container, Spinner } from "react-bootstrap";
// import SendReview from "../components/SendReview";

interface Song {
  _id: string;
  era: string;
  name: string;
  info?: string;
  date: string;
  type: string;
  currentlyAvailable: "Full (CDQ)" | "Snippet (CDQ)" | "Full (HQ)";
  circulating?: "Yes" | "No";
}

function SongPage() {
  const [song, setSongs] = useState<Song>();
  const { SongId } = useParams();

  useEffect(() => {
    axios
      .get<Song>(`http://localhost:4000/songs/${SongId}`)
      .then((response) => {
        setSongs(response.data);
      });
  }, [SongId]);
  return (
    <Container className="mt-5">
      {song ? (
        <Card>
          <Card.Body>
            <Card.Title>{song.name}</Card.Title>
            <Card.Text>
              <p>
                Era: {song.era} - Date Leaked: {song.date}
              </p>
              <p>Type: {song.type}</p>
              <p>Info: {song.info || "Not available"}</p>
            </Card.Text>
            <Link to="/contributions">
              <Button variant="primary">Send Contribution</Button>
            </Link>
          </Card.Body>
        </Card>
      ) : (
        <Container className="text-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
      )}
    </Container>
  );
}

export default SongPage;
