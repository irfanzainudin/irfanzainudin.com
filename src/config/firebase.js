// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfGX134xNdqq02PJO0foZqoiDAlVU9rQw",
  authDomain: "irfanzainudin-18c25.firebaseapp.com",
  projectId: "irfanzainudin-18c25",
  storageBucket: "irfanzainudin-18c25.appspot.com",
  messagingSenderId: "955863837880",
  appId: "1:955863837880:web:8372200d1e17c255e5984d",
  measurementId: "G-G28G47THEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);