import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-qLpeoPLQ7cuMGC-wL2kGIK08N0WdgdU",
  authDomain: "react-notes-a6397.firebaseapp.com",
  projectId: "react-notes-a6397",
  storageBucket: "react-notes-a6397.appspot.com",
  messagingSenderId: "396214566402",
  appId: "1:396214566402:web:b783ddfd22e7da7eb9f11b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")