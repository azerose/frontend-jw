// //////////////////////////파이어 베이스///////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHRdhXbSGAKglujIEwabehPezg06aiCBU",
  authDomain: "codecamp-09-azerose.firebaseapp.com",
  projectId: "codecamp-09-azerose",
  storageBucket: "codecamp-09-azerose.appspot.com",
  messagingSenderId: "69793791158",
  appId: "1:69793791158:web:333ce8366784d78411fa17",
  measurementId: "G-2DHKR7P4R2",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
