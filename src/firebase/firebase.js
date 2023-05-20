// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdPab2Fxz4tIn8Nf-NrNP5Tamr4CprU-8",
  authDomain: "esp8266-3eb00.firebaseapp.com",
  databaseURL: "https://esp8266-3eb00-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "esp8266-3eb00",
  storageBucket: "esp8266-3eb00.appspot.com",
  messagingSenderId: "811257981933",
  appId: "1:811257981933:web:de9448b9fb049c41cc55e4",
  measurementId: "G-F4E5WEQ34K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const auth = getAuth(app);