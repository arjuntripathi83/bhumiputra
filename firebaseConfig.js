// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIdv8ggweRnEhar6dr_7DU5kVbd_-Za4k",
  authDomain: "bhumiputra-ed2ee.firebaseapp.com",
  projectId: "bhumiputra-ed2ee",
  storageBucket: "bhumiputra-ed2ee.appspot.com",
  messagingSenderId: "760674406484",
  appId: "1:760674406484:web:439383630d7481a3609dc1",
  measurementId: "G-M7LDEXQ9JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;