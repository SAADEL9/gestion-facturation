// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBtE30FUQJer853dlhAWaJJA5yaB6lIVs",
  authDomain: "facturation-cb06a.firebaseapp.com",
  projectId: "facturation-cb06a",
  storageBucket: "facturation-cb06a.firebasestorage.app",
  messagingSenderId: "797627921129",
  appId: "1:797627921129:web:3a37dd5b6cd9e7ab76b678",
  measurementId: "G-6RCPZYFJ7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);