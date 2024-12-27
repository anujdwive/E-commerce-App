// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTeTSX81qE48XtZvWy2Xw1RaukA2FQdp4",
  authDomain: "e-commerce-67374.firebaseapp.com",
  projectId: "e-commerce-67374",
  storageBucket: "e-commerce-67374.firebasestorage.app",
  messagingSenderId: "580592537183",
  appId: "1:580592537183:web:ddae5490bab9d29c79d5ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireDB = getFirestore(app);
export const auth = getAuth();