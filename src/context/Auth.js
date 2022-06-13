import { createContext, useEffect, useContext, useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsubscribe;
  });

  return (
    <Auth.Provider value={{ SignUp, LogIn, LogOut, user }}>
      {children}
    </Auth.Provider>
  );
};

export const UserAuth = () => {
  return useContext(Auth);
};
