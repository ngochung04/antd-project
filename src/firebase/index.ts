// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6WcvUJWayZxSGV8CDObLtQ-TsGt9DYhs",
  authDomain: "ticket-76665.firebaseapp.com",
  projectId: "ticket-76665",
  storageBucket: "ticket-76665.appspot.com",
  messagingSenderId: "303793692460",
  appId: "1:303793692460:web:1a85915f4e027332719689",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
