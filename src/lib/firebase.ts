
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBIZ2dAgvHa3R-y0JIV-4KR1GD2DTqcTws",
  authDomain: "xformai-demo.firebaseapp.com",
  projectId: "xformai-demo",
  storageBucket: "xformai-demo.appspot.com",
  messagingSenderId: "385161304332",
  appId: "1:385161304332:web:b7feace4df9ed573d3ea15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
