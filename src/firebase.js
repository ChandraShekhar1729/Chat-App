
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCcROX8uoqH7eRJ0RZSPPj62Li4dnSZnf8",
  authDomain: "chat4-c7046.firebaseapp.com",
  projectId: "chat4-c7046",
  storageBucket: "chat4-c7046.appspot.com",
  messagingSenderId: "1092303362077",
  appId: "1:1092303362077:web:2bf992501aea218dd84ef4"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();







