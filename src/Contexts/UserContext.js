import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const UserContext = ({ children }) => {
    const [user, setUser] = useState([])
    const [uid, setUid] = useState([])
    const provider = new GoogleAuthProvider();
    const googleSignIn = () => signInWithPopup(auth, provider)
    const logOut = () => { return signOut(auth) }
    useEffect(() => {
        const unsubscribe =
            onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                    setUser(currentUser)
                    const uid = currentUser.uid;
                    setUid(uid)
                    console.log(uid)
                } else {
                    return unsubscribe;
                }
            })
    }, [])
    const authInfo = { uid, user, googleSignIn, logOut }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;