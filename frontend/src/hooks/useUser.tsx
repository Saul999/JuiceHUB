import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth"; // Import User type

const useUser = () => {
  const [user, setUser] = useState<User | null>(null); // Define user as User | null
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(); // Get authentication instance
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Use onAuthStateChanged
      setUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe(); // Return unsubscribe function
  }, []);

  return { user, isLoading };
};

export default useUser;
