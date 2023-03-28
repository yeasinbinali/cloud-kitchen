// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTO0MW2_Z58NHyQLxLmP74ZcsN7Vzo7cQ",
  authDomain: "cloud-kitchen-24.firebaseapp.com",
  projectId: "cloud-kitchen-24",
  storageBucket: "cloud-kitchen-24.appspot.com",
  messagingSenderId: "79711033173",
  appId: "1:79711033173:web:ec30c2d6fb9f25fda581dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;