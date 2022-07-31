import React from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

export function useAuth() {
  const [currentUser, setCurrentUser] = React.useState();

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
