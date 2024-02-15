import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
