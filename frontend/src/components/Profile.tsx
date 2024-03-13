// import NavBar from "./NavBar";
import Logout from "./Logout";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

function Profile() {
  const { user } = useUser();

  return (
    <>
      <h1>Profile page</h1>
      {user ? (
        <>
          <Image
            src="frontend/public/assets/JWCloudBanner.jpeg"
            roundedCircle
          />

          <h1>Name</h1>
          <h2>Top 5 songs</h2>
          <Logout></Logout>
        </>
      ) : (
        <Link to={"/login"}>
          <button>Log in</button>
        </Link>
      )}
    </>
  );
}

export default Profile;
