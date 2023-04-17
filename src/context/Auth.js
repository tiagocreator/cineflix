import { createContext, useEffect, useContext, useState } from 'react';
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { setDoc, doc } from 'firebase/firestore';
const Auth = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const SignUp = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', email), {
      savedShows: [],
    });
  };

  const LogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    window.location.reload(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  });

  return <Auth.Provider value={{ SignUp, LogIn, LogOut, user }}>{children}</Auth.Provider>;
};

export const UserAuth = () => {
  return useContext(Auth);
};
