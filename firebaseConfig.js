// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtlLlEFZJAZJiU1Xt8EVLmpVodFrMeaUg",
  authDomain: "react-native-app-e2407.firebaseapp.com",
  projectId: "react-native-app-e2407",
  storageBucket: "react-native-app-e2407.appspot.com",
  messagingSenderId: "644464229134",
  appId: "1:644464229134:web:091e541b54be27025a355f",
  measurementId: "G-ERX607RT1W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;