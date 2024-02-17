import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SongListPage from "./pages/SongListPage";
import SendReviewPage from "./pages/SendReviewPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/list" element={<SongListPage />}></Route>
          <Route path="/review" element={<SendReviewPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
