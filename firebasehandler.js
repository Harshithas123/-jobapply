
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCbvtLI6Iw0iYFsgKoV_gU9JMUh0mIx4rg",
  authDomain: "assignment-f1974.firebaseapp.com",
  databaseURL: "https://assignment-f1974-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "assignment-f1974",
  storageBucket: "assignment-f1974.appspot.com",
  messagingSenderId: "1095180867089",
  appId: "1:1095180867089:web:920a9bd35a967dd04a03b0"
};

const app = initializeApp(firebaseConfig);
 export const firebasedatabase = getDatabase(app);
 export const firebaseAuth = getAuth(app);