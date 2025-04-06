// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4QFs2F3CrRt-8LKR31kOvX9yB80UfGJM",
    authDomain: "brgy360-c3ce4.firebaseapp.com",
    projectId: "brgy360-c3ce4",
    storageBucket: "brgy360-c3ce4.firebasestorage.app",
    messagingSenderId: "562903133325",
    appId: "1:562903133325:web:d1671a60d97b3c353006c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Optional: Export the app instance if you need it elsewhere
export default app;