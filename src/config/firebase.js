// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "student-dash-bf6ac.firebaseapp.com",
  projectId: "student-dash-bf6ac",
  storageBucket: "student-dash-bf6ac.firebasestorage.app",
  messagingSenderId: "177476150177",
  appId: "1:177476150177:web:222288771e45f23e9e21e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth};