// config.js

// 1. WE USE THESE WEB LINKS (DO NOT CHANGE THESE LINES)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 2. PASTE YOUR KEYS FROM THE SCREEN HERE
const firebaseConfig = {
  apiKey: "AIzaSyALEYQBuvmDD...",  // <--- Paste from your screenshot
  authDomain: "student-story-a.firebaseapp.com",
  projectId: "student-story-a",
  storageBucket: "student-story-a.firebasestorage.app",
  messagingSenderId: "716123142058",
  appId: "1:716123142058:web:fd0e7158326f4653765dd3",
  measurementId: "G-P45WP4B72E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ADDED deleteDoc HERE 👇
export { db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot };