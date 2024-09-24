// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDibxEH4BHwEpowwTaw1ypJxlvMwrIf960",
  authDomain: "react-native-todo-app-1298d.firebaseapp.com",
  projectId: "react-native-todo-app-1298d",
  storageBucket: "react-native-todo-app-1298d.appspot.com",
  messagingSenderId: "739869782629",
  appId: "1:739869782629:web:5fac35c4f4db82e7cccc8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;