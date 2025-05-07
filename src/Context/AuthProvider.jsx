import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
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
        loading
    }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;