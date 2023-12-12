// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mean-estate-a6fa3.firebaseapp.com",
  projectId: "mean-estate-a6fa3",
  storageBucket: "mean-estate-a6fa3.appspot.com",
  messagingSenderId: "257419165534",
  appId: "1:257419165534:web:21b8fa79dd74042f75d9cf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);