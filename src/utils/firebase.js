// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfsVXQv6OrlrVZi94j24vCrVgdEfmKz9s",
  authDomain: "netflixgpt-12310.firebaseapp.com",
  projectId: "netflixgpt-12310",
  storageBucket: "netflixgpt-12310.firebasestorage.app",
  messagingSenderId: "122188917273",
  appId: "1:122188917273:web:4282465032a35389105888",
  measurementId: "G-3P37S7CCS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();