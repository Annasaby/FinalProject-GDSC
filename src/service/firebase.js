import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJcysy0B2TNfz3NRxorg4xdTW75M-4v8k",
  authDomain: "front-end-task-2.firebaseapp.com",
  projectId: "front-end-task-2",
  storageBucket: "front-end-task-2.appspot.com",
  messagingSenderId: "816192642940",
  appId: "1:816192642940:web:cc6dcaa02bf2a9c08c4ef9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}