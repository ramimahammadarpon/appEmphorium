import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState('');
    const [user, setUser] = useState(null)
    console.log(user);
    const registerWithMail = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateInfo = (infos) => {
        return updateProfile(auth.currentUser, infos)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, user=>{
            setUser(user);
            setLoading(false);
        })
        return ()=> unsubscribe();
    },[])

    const value ={
        registerWithMail,
        user,
        setUser,
        loginWithEmail,
        updateInfo,
        logOut,
        googleSignIn,
        forgetPassword,
        loading, 
        err,
        setErr
    }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;