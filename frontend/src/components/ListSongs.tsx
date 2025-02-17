import Table from "react-bootstrap/Table";
// import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import { Form } from "react-bootstrap";
import { ChangeEvent } from "react";
import { useState, useEffect } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
// import SongPage from "../pages/SongPage";

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
  const [search, setSearch] = useState("");
  // const [eraVal, setEraVal] = useState<string>("");

  const searchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get<Song[]>(`https://juicehub.onrender.com/songs`)
      .then((response) => {
        setSongs(response.data);
      });
  }, []);

  // const setEra = (era : string)=> {
  //   setEraVal
  // }

  return (
    <>
      <div className="Home-search-section">
        <img src="/assets/JWCloudBanner.jpeg" alt="juice wrld search pic" />
        <div className="searchbar-container">
          {/* <Dropdown className="dropdown-filter">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Search by Eras
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">JuiceTheKid</Dropdown.Item>
              <Dropdown.Item href="#/action-2">JW999</Dropdown.Item>
              <Dropdown.Item href="#/action-3">GBGR</Dropdown.Item>
              <Dropdown.Item href="#/action-3">WOD</Dropdown.Item>
              <Dropdown.Item href="#/action-3">DRFL</Dropdown.Item>
              <Dropdown.Item href="#/action-3">JW3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          <Form className="search-bar">
            <Form.Group className="" controlId="">
              <Form.Label>Search for Song</Form.Label>
              <Form.Control
                onChange={searchValue}
                type="search"
                placeholder="Search"
              />
            </Form.Group>
          </Form>
        </div>
      </div>
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
            {songs
              .filter((item) => {
                const lowercaseSearch = search.toLowerCase();
                const lowercaseName = item.name.toLowerCase();
                const lowercaseEra = item.era.toLowerCase();
                return (
                  lowercaseSearch === "" ||
                  lowercaseName.includes(lowercaseSearch) ||
                  lowercaseEra.includes(lowercaseSearch)
                );
              })
              .map((song, index) => (
                <tr key={song._id}>
                  <td>{index + 1}</td>
                  <td>{song.era}</td>
                  <td>
                    <Link to={`/songs/${song._id}` || "-"}>{song.name}</Link>
                  </td>
                  <td>{song.info} </td>
                  <td>{song.date}</td>
                  <td>{song.type || "-"}</td>
                  <td>{song.circulating || "-"}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ListSongs;
