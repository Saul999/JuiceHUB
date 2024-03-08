import { getAuth, signOut } from "firebase/auth";
import useUser from "../hooks/useUser";

function Logout() {
  const { user } = useUser();

  return (
    <>
      {user ? (
        <button
          onClick={() => {
            signOut(getAuth());
          }}
        >
          Log Out
        </button>
      ) : (
        <h1></h1>
      )}
    </>
  );
}

export default Logout;
