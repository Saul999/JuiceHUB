import Table from "react-bootstrap/Table";
import axios from "axios";
import { useState, useEffect } from "react";

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

function ListSongs() {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    axios.get<Song[]>(`http://localhost:4000/songs`).then((response) => {
      setSongs(response.data);
    });
  }, []);

  return (
    <div className="table-container">
      <Table striped bordered hover size="sm" responsive="lg">
        <thead>
          <tr className="list-header">
            <th>#</th>
            <th>Era</th>
            <th>Title</th>
            <th>Info</th>
            <th>Date Leaked</th>
            <th>Type</th>
            <th>Circulating</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={song._id}>
              <td>{index + 1}</td>
              <td>{song.era}</td>
              <td>{song.name}</td>
              <td>{song.info || "-"}</td>
              <td>{song.date}</td>
              <td>{song.type || "-"}</td>
              <td>{song.circulating || "-"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ListSongs;
