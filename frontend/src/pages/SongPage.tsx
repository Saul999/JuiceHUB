import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
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
    <div>
      {song ? (
        <>
          <h1>{song.name}</h1>
          <p>
            <p>
              Era: {song.era} - Date Leaked: {song.date}
            </p>
          </p>
          <p></p>

          <p>Type: {song.type}</p>
          <p>Info: {song.info}</p>

          <Link to={"/contributions"} className="">
            <Button>Send Contribution</Button>
          </Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SongPage;
