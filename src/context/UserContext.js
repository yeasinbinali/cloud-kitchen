import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const Auth = getAuth(app);

const UserContext = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password);
    }

    const authInfo = {createUser, signIn}
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default UserContext;