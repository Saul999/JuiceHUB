import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    console.log("SongId:", SongId);
    axios
      .get<Song>(`http://localhost:4000/songs/${SongId}`)
      .then((response) => {
        console.log(response.data);

        setSongs(response.data);
      });
  }, [SongId]);
  return (
    <div>
      {song ? (
        <>
          <h2>{song.name}</h2>
          <p>Era: {song.era}</p>
          <p>Info: {song.info}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SongPage;
