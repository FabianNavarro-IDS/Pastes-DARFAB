// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, 
    collection, 
    getDocs, 
    onSnapshot, 
    addDoc, 
    deleteDoc, 
    doc, 
    getDoc, 
    updateDoc } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1szP_zzRFrixdH1_2BftyUFzimgyfqNk",
  authDomain: "prueba1fbd.firebaseapp.com",
  projectId: "prueba1fbd",
  storageBucket: "prueba1fbd.appspot.com",
  messagingSenderId: "132920227547",
  appId: "1:132920227547:web:ad0549584ab26aa9067efe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);