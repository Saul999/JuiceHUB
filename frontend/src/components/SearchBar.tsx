import { useState, ChangeEvent } from "react";
import Form from "react-bootstrap/Form";

function SearchBar() {
  const [, setSearch] = useState("");

  const searchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <div className="Home-search-section">
        <img src="/assets/JWCloudBanner.jpeg" alt="juice wrld search pic" />
        <div className="searchbar-container">
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
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
    </>
  );
}
export default SearchBar;
