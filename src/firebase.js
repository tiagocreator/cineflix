import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfigKeys as key } from './accessKeys';

const firebaseConfig = {
  apiKey: key.apiKey,
  authDomain: key.authDomain,
  projectId: key.projectId,
  storageBucket: key.storageBucket,
  messagingSenderId: key.messagingSenderId,
  appId: key.appId,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
