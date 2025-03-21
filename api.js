// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8JiywJHrymjczyiDOVCuP3yHB5PUw6PQ",
  authDomain: "lanchonete-imsi31.firebaseapp.com",
  databaseURL: "https://lanchonete-imsi31-default-rtdb.firebaseio.com",
  projectId: "lanchonete-imsi31",
  storageBucket: "lanchonete-imsi31.firebasestorage.app",
  messagingSenderId: "99764514327",
  appId: "1:99764514327:web:e8bc4229e9c8cd0709b652",
  measurementId: "G-JC3DY1JQPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


