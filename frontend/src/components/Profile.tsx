import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import Logout from "./Logout";

function Profile() {
  const { user } = useUser();

  return (
    <>
      <h1>Profile page</h1>
      {user ? (
        <>
          <h1>{user.displayName}</h1>
          {/* <h1>{user.uid}</h1> */}
          <h2>Top 5 songs</h2>
          <ul>
            <li>Song 1</li> {/* Example song */}
            <li>Song 2</li> {/* Example song */}
          </ul>
          <h3>Comments</h3>
          <Logout />
        </>
      ) : (
        <Link to="/login">
          <button>Log in</button>
        </Link>
      )}
    </>
  );
}

export default Profile;
