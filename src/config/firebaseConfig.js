// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL8GRjTzSZdfXFKVFN73AnBtegKabJtsI",
  authDomain: "expense-tracker-62771.firebaseapp.com",
  projectId: "expense-tracker-62771",
  storageBucket: "expense-tracker-62771.appspot.com",
  messagingSenderId: "1076891054672",
  appId: "1:1076891054672:web:e965a8a8bb984780989755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
