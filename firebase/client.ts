// Import the functions you need from the SDKs you need
import { initializeApp , getApps , getApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBimLGCDw1hiefdSg401yTCrl5lBCNtIJ4",
    authDomain: "interprepp-94c79.firebaseapp.com",
    projectId: "interprepp-94c79",
    storageBucket: "interprepp-94c79.firebasestorage.app",
    messagingSenderId: "199820389258",
    appId: "1:199820389258:web:75f4bc91aaaa0ab0a9f673",
    measurementId: "G-0V7RQ4LW30"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);