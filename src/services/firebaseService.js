import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { ref, set, get } from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "facturation-cb06a",
  storageBucket: "facturation-cb06a.firebasestorage.app",
  messagingSenderId: "797627921129",
  appId: "1:797627921129:web:3a37dd5b6cd9e7ab76b678",
  measurementId: "G-6RCPZYFJ7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const registerUser = async (nom, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const uid = userCredential.user.uid;

  // Sauvegarde du profil dans Firebase Realtime Database
  await set(ref(db, `users/${uid}`), {
    nom,
    email,
    role: "user", // tout le monde commence en tant que user
    createdAt: new Date().toISOString()
  });

  return userCredential.user;
};
export const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const snapshot = await get(ref(db, `users/${userCredential.user.uid}`));
  return {
    user: userCredential.user,
    role: snapshot.val().role
  };
};
export const getUserRole = async (uid) => {
  const snapshot = await get(ref(db, `users/${uid}`));
  if (snapshot.exists()) {
    return snapshot.val().role;
  }
  return null;
};