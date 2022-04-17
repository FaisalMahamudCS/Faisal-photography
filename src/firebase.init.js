// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFku18omCXLdZUAFznuCxY1e1Lfelv67I",
  authDomain: "fir-auth-photo.firebaseapp.com",
  projectId: "fir-auth-photo",
  storageBucket: "fir-auth-photo.appspot.com",
  messagingSenderId: "114206840201",
  appId: "1:114206840201:web:4d855589cc92b830e3fd58",
  measurementId: "G-6N4Q2D6CT4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;