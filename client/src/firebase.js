// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-af81b.firebaseapp.com",
  projectId: "mern-auth-af81b",
  storageBucket: "mern-auth-af81b.appspot.com",
  messagingSenderId: "463839665593",
  appId: "1:463839665593:web:19645418e02f5b6378aa68",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
