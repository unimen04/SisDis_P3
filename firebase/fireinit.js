// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcU6aqGkyVcS_x88cZ74Sm6nDUnSto14M",
  authDomain: "sisdis-p3-27ee3.firebaseapp.com",
  projectId: "sisdis-p3-27ee3",
  storageBucket: "sisdis-p3-27ee3.firebasestorage.app",
  messagingSenderId: "594126985888",
  appId: "1:594126985888:web:e3bc3af3bbf2c8c86947c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export function getDB() {
    return db;
}