// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsigrSoAa4FouoDSgDLg9cS7FYG-CsDXg",
  authDomain: "proyectoreactcoderhouse-c02db.firebaseapp.com",
  projectId: "proyectoreactcoderhouse-c02db",
  storageBucket: "proyectoreactcoderhouse-c02db.appspot.com",
  messagingSenderId: "788358494772",
  appId: "1:788358494772:web:98baa08ba9ac524766a861"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);