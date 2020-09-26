// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX3nxvxNWkX_D63CCtNvRGslYAoyxlkq0",
  authDomain: "my-mall-6c923.firebaseapp.com",
  databaseURL: "https://my-mall-6c923.firebaseio.com",
  projectId: "my-mall-6c923",
  storageBucket: "my-mall-6c923.appspot.com",
  messagingSenderId: "900303745259",
  appId: "1:900303745259:web:7a037f694832a3cbf20eae",
  measurementId: "G-WGNERG5737",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;