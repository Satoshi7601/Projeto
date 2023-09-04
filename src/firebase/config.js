// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_e-IPOStdpbQTl7gVlGsnf3Pxpl_UgTU",
  authDomain: "miniblog-97ea5.firebaseapp.com",
  projectId: "miniblog-97ea5",
  storageBucket: "miniblog-97ea5.appspot.com",
  messagingSenderId: "1016371302921",
  appId: "1:1016371302921:web:75d2d5192802183b8cded8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}; //exporta o banco firebase para as outras classes do projeto