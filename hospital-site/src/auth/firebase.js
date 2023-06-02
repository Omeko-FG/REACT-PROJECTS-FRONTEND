// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDlJ4yWdf0OQw8y1UbTdKkKaefetWchws",
  authDomain: "hospital-site-a0a39.firebaseapp.com",
  projectId: "hospital-site-a0a39",
  storageBucket: "hospital-site-a0a39.appspot.com",
  messagingSenderId: "265888259027",
  appId: "1:265888259027:web:0548b9e41fad6d53992d26",
  measurementId: "G-ZQ02QEWYLC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
