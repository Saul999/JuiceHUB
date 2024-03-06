import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function CreateAccPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const createAccount = async () => {
    try {
      if (password !== confirmPass) {
        setError("Passwords do not match !");
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters long!");
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password);
      navigate("/profile");
    } catch {
      setError(error);
    }
  };

  return (
    <>
      <div className="content-container">
        <h1>Create Account Page</h1>
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        ></input>
        <button onClick={createAccount}>Create Account</button>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
}

export default CreateAccPage;
