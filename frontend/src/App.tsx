import NavBar from "./components/NavBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SongListPage from "./pages/SongListPage";
import SendReviewPage from "./pages/SendReviewPage";
import ProfilePage from "./pages/ProfilePage";
import SongPage from "./pages/SongPage";
import LoginPage from "./pages/LoginPage";

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
              <Route path="/songs/:id" element={<SongPage></SongPage>}></Route>
              <Route path="/review" element={<SendReviewPage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
