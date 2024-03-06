import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const logIn = async () => {
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/");
    } catch (e) {
      setError(error);
    }
  };

  return (
    <>
      <div className="content-container">
        <h1>Log In Page</h1>
        {error && <p className="error">{error}</p>}
        <input
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={logIn}>Log in</button>
        <Link to="/create-account">Create Account Here</Link>
      </div>
    </>
  );
}

export default LoginPage;
