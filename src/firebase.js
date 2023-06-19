import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getDatabase,ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDpnxA5mQ0Girlfu6c9tr7a_cm6Kqi1K8Y",
  authDomain: "caffee-roast.firebaseapp.com",
  databaseURL: "https://caffee-roast-default-rtdb.firebaseio.com",
  projectId: "caffee-roast",
  storageBucket: "caffee-roast.appspot.com",
  messagingSenderId: "490333382867",
  appId: "1:490333382867:web:0f2c607aa6b676f191cc26",
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);
const database = getDatabase(appFirebase);


export  {appFirebase, db, database, ref, onValue}

