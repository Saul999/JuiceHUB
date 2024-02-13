import React from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="application">
      <NavBar></NavBar>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
