// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcYvEk68nfDPV-cKDD27h-uXHZp-dwdzk",
  authDomain: "hearts-and-quills.firebaseapp.com",
  projectId: "hearts-and-quills",
  storageBucket: "hearts-and-quills.appspot.com",
  messagingSenderId: "786918412134",
  appId: "1:786918412134:web:f7edd1b918db6789a282a7",
  measurementId: "G-SVJYFBGZLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);