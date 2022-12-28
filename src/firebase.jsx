// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,

  apiKey: "AIzaSyASiR4yjHpgb43ZVM70RcDy67mNTv0x_3s",
  authDomain: "ceklix-react.firebaseapp.com",
  projectId: "ceklix-react",
  storageBucket: "ceklix-react.appspot.com",
  messagingSenderId: "12625374187",
  appId: "1:12625374187:web:9d11e96fd6534985d387ae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
