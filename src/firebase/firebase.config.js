// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzKgR-X_B51s_rVZ42oCAugo4_CdkyHF8",
  authDomain: "visionary-journey-34099.firebaseapp.com",
  projectId: "visionary-journey-34099",
  storageBucket: "visionary-journey-34099.appspot.com",
  messagingSenderId: "36231852598",
  appId: "1:36231852598:web:18d6f13c468abdd423de97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
