//rfc
// this one is for setup authentication
// able to access the current user anywhere in the application

import React, { Children, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
// auth is a module

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider(children) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return auth.ctreateUserWithEmailAndPassword(email, password);
    // return a promise which return when use this inside of the signup compo to
    // to make sure that the compo is worked successfully. and if there is a
    // failure may redirect the user to the correct page
  }

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChange((user) => {
      setCurrentUser(user);
    });
    return unsubsribe;
  }, []);

  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{Children}</AuthContext.Provider>;
}
