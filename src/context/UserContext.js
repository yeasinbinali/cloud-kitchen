import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const Auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const UserContext = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(Auth, email, password);
    }

    const logOut = () => {
        return signOut(Auth);
    }

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(Auth, googleProvider)
    }

    const verifyEmail = () => {
        return sendEmailVerification(Auth.currentUser);
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(Auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribed();
        }
    }, [])

    const authInfo = {user, loading, createUser, signIn, signInGoogle, verifyEmail, logOut}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;