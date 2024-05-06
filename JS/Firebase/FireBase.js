
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
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
  export const auth = getAuth(app)