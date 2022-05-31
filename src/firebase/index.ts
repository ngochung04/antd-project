// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABpGqv9Z4lYi0rNUCNlTtnehZHV7znv3M",
  authDomain: "ticket-e7851.firebaseapp.com",
  projectId: "ticket-e7851",
  storageBucket: "ticket-e7851.appspot.com",
  messagingSenderId: "706762733011",
  appId: "1:706762733011:web:79cb52243f5e59378d6b26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
