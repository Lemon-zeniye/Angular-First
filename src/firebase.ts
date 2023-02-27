// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh3-0_DQjHcilmZ2cDxLBmUq0gUpE-NC0",
  authDomain: "angular-195b5.firebaseapp.com",
  projectId: "angular-195b5",
  storageBucket: "angular-195b5.appspot.com",
  messagingSenderId: "826533286607",
  appId: "1:826533286607:web:5e3fe79bfd5c3101515dba",
  measurementId: "G-4Y6ZC8PS4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
// const analytics = getAnalytics(app);