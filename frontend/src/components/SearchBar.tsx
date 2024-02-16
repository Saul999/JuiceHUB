// import { useState } from "react";

function SearchBar() {
  // const [searched, setSearch] = useState("");
  // const [checked, setChecked] = useState();

  return (
    <>
      <div className="Home-search-section">
        <img src="/assets/JWCloudBanner.jpeg" alt="juice wrld search pic" />
        <div className="searchbar-container">
          <label htmlFor="">Search </label>
          <input type="text" />
        </div>
      </div>
    </>
  );
}
export default SearchBar;
