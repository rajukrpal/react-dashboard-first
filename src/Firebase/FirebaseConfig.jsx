// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5S9x-ZF55JzroVSDALe1NmcnrqHayjAg",
  authDomain: "react-template-d217b.firebaseapp.com",
  projectId: "react-template-d217b",
  storageBucket: "react-template-d217b.appspot.com",
  messagingSenderId: "861240154634",
  appId: "1:861240154634:web:506256cbd0966c9fa1ddf3",
  measurementId: "G-8YJ433HDS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
