// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "whatsapp-mern-build-3f5ac.firebaseapp.com",
  projectId: "whatsapp-mern-build-3f5ac",
  storageBucket: "whatsapp-mern-build-3f5ac.firebasestorage.app",
  messagingSenderId: "628575651754",
  appId: "1:628575651754:web:806f33f7cbb535af3fcdd3",
  measurementId: "G-J2277VT7M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);