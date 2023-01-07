// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRcyrCR8evBLiZlmL0VU6MDiDgWaH3ps8",
  authDomain: "nitr-14a1d.firebaseapp.com",
  projectId: "nitr-14a1d",
  storageBucket: "nitr-14a1d.appspot.com",
  messagingSenderId: "710279616105",
  appId: "1:710279616105:web:2d54b824ec19147fc674f8",
  measurementId: "G-RG517KE42K"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db= getFirestore(app);
export{db};