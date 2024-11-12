// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c3863.firebaseapp.com",
  projectId: "mern-estate-c3863",
  storageBucket: "mern-estate-c3863.firebasestorage.app",
  messagingSenderId: "86919005758",
  appId: "1:86919005758:web:b430bd2fc97756b2b4b36f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);