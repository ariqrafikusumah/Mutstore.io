// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIBfj671SGIFlqBSMQW3jM-nj5oAcmWNQ",
  authDomain: "mutstore-76fc2.firebaseapp.com",
  databaseURL: "https://mutstore-76fc2-default-rtdb.firebaseio.com",
  projectId: "mutstore-76fc2",
  storageBucket: "mutstore-76fc2.appspot.com",
  messagingSenderId: "773942730058",
  appId: "1:773942730058:web:3fc22eb6aee8cb23c9f5b3",
  measurementId: "G-CPETRLQQQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
