import { createContext, useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { setDoc, doc } from 'firebase/firestore';

import { useToast } from '../utils/useToast';

const Auth = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const toast = useToast();

  const SignUp = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/');
        toast.open('Account created successfully.');
      })
      .catch((e) => {
        if (e.code === 'auth/invalid-email') {
          toast.open('Please enter a valid email address.');
        }
        if (e.code === 'auth/email-already-in-use') {
          toast.open('Email account is already registered.');
        }
        if (e.code === 'auth/weak-password') {
          toast.open('Password must be at least 6 characters long.');
        }
        if (e.code === 'auth/internal-error') {
          toast.open('Complete all the fields correctly.');
        }
      });
    await setDoc(doc(db, 'users', email), {
      savedShows: [],
    });
  };

  const LogIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/');
        toast.open('Logged in successfully!');
      })
      .catch((e) => {
        if (e.code === 'auth/invalid-email') {
          toast.open('Please enter a valid email address.');
        }
        if (
          e.code === 'auth/wrong-password' ||
          e.code === 'auth/user-not-found' ||
          e.code === 'auth/internal-error'
        ) {
          toast.open('Incorrect email address or password');
        }
        if (e.code === 'auth/weak-password') {
          toast.open('The login password must contain at least 6 characters.');
        }
      });
  };

  const LogOut = () => {
    window.location.reload(false);
    return signOut(auth)
      .then(() => {
        navigate('/');
        toast.open('Logged out successfully.');
      })
      .catch((e) => {
        toast.open('Error, try again later.');
      });
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
