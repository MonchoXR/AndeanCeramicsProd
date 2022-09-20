import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCbprHab5hyRXcss0HiXZhn_fC3Obz0kdU",
    authDomain: "andeanceramics-ecommerce.firebaseapp.com",
    projectId: "andeanceramics-ecommerce",
    storageBucket: "andeanceramics-ecommerce.appspot.com",
    messagingSenderId: "1050543879869",
    appId: "1:1050543879869:web:a5f9c8ffb67595c9fa29d4",
    measurementId: "G-NSDTK1T3S6"
  };


  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);