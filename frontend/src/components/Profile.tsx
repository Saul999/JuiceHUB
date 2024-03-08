// import NavBar from "./NavBar";
import Logout from "./Logout";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";

function Profile() {
  const { user } = useUser();

  return (
    <>
      <h1>Profile page</h1>
      {user ? (
        <Logout></Logout>
      ) : (
        <Link to={"/login"}>
          <button>Log in</button>
        </Link>
      )}
    </>
  );
}

export default Profile;
