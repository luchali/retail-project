// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcrWiHJ9xbpQwHnXMIttS1FcojzZUR86c",
  authDomain: "retail-project-85a34.firebaseapp.com",
  projectId: "retail-project-85a34",
  storageBucket: "retail-project-85a34.firebasestorage.app",
  messagingSenderId: "180100126079",
  appId: "1:180100126079:web:91f249b1cdabe34bc2b64a",
  measurementId: "G-NDPKCNMC9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
