import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDL-LVtV7j48ONLHiTViZPoZfU7_UZvIVY",
  authDomain: "neri-chan.firebaseapp.com",
  projectId: "neri-chan",
  storageBucket: "neri-chan.firebasestorage.app",
  messagingSenderId: "77978839609",
  appId: "1:77978839609:web:3fdf03a254ad3062fe7be8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);