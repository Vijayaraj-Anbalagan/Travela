// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgXWetaGKuRFs5NbtBVKgm0ucuNpHu9CU",
  authDomain: "travela-e32cd.firebaseapp.com",
  projectId: "travela-e32cd",
  storageBucket: "travela-e32cd.appspot.com",
  messagingSenderId: "558107256037",
  appId: "1:558107256037:web:b9544a18eda9140ff0e00c",
  measurementId: "G-71KHKF11MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { auth , app , db , analytics };