import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SongListPage from "./pages/SongListPage";
import ProfilePage from "./pages/ProfilePage";
import SongPage from "./pages/SongPage";
import LoginPage from "./pages/LoginPage";
import CreateAccPage from "./pages/CreateAccPage";
import ReviewPage from "./pages/ReviewPage";
import AddSongPage from "./pages/AddSongPage";

function App() {
  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        <div className="page-body">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/login" element={<LoginPage></LoginPage>}></Route>
              <Route path="/about" element={<AboutPage />}></Route>
              <Route path="/list" element={<SongListPage />}></Route>
              <Route
                path="/add-song"
                element={<AddSongPage></AddSongPage>}
              ></Route>
              <Route
                path="/songs/:SongId"
                element={<SongPage></SongPage>}
              ></Route>
              <Route path="/contributions" element={<ReviewPage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
              <Route
                path="/create-account"
                element={<CreateAccPage></CreateAccPage>}
              ></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
