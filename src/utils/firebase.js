// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxdIjMYeBTxwSrpTyOkkKEavH9-lyLR_M",
  authDomain: "netflixgpt-2e7bb.firebaseapp.com",
  projectId: "netflixgpt-2e7bb",
  storageBucket: "netflixgpt-2e7bb.appspot.com",
  messagingSenderId: "588804912457",
  appId: "1:588804912457:web:4221959265212dfc16d698",
  measurementId: "G-VTP5YFCYGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth()