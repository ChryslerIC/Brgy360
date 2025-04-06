    import { createContext, useState, useEffect, useContext } from 'react';
import { AuthService } from './authService.js';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = AuthService.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup subscription
        return () => unsubscribe();
    }, []);

    const signUp = async (email, password) => {
        try{
            const userCredential = await AuthService.signup(email, password);
            setUser(userCredential);
            return userCredential;
        } catch(error) {
            throw error;
        }
    }

    const login = async (email, password) => {
        try {
            const user = await AuthService.login(email, password);
            setUser(user);
            return user;
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        try {
            await AuthService.logout();
            setUser(null);
        } catch (error) {
            throw error;
        }
    };

    const saveUserProfile = async (uid, data) => {
        try {
            await AuthService.saveUserProfile(uid, data);
        } catch (error) {
            throw error;
        }
    };

    const sendForgotPassword = async (email) => {
        try {
            await AuthService.forgotPassword(email);
        } catch (error) {

            console.error(error);
            throw error;
        }
    };


    const value = {
        user,
        loading,
        login,
        logout,
        signUp,
        saveUserProfile,
        sendForgotPassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};