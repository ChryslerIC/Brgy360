// src/services/AuthService.js
import { auth,db } from '../config/firebase-config.js';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const AuthService = {
    signup: async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    },

    login: async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            throw error;
        }
    },

    logout: async () => {
        try {
            await signOut(auth);
        } catch (error) {
            throw error;
        }
    },

    getCurrentUser: () => {
        return auth.currentUser;
    },

    saveUserProfile: async (uid, data) => {
        try {
            await setDoc(doc(db, 'users', uid), {
                ...data,
                createdAt: new Date(),
            });
        } catch (error) {
            throw error;
        }
    },

    forgotPassword: async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
        } catch (error) {
            console.error(error);
            throw error;
        }
    },


    // Add this new method to handle auth state changes
    onAuthStateChanged: (callback) => {
        return onAuthStateChanged(auth, callback);
    },
};