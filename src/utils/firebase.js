// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWr0cIVMdorXtZHXowBN5c2xOvl6bD5WA",
  authDomain: "netflixgpt-ddb35.firebaseapp.com",
  projectId: "netflixgpt-ddb35",
  storageBucket: "netflixgpt-ddb35.appspot.com",
  messagingSenderId: "289343182547",
  appId: "1:289343182547:web:dbd4dde1abcc91e630e626",
  measurementId: "G-5BCBFS6Y1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();