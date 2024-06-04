import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

// social auth Provider
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user)

    // create user
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
       
    }

    // observer
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            }
          });      
    }, [])

    // signIn user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // GITHUB login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    // logOut
    const logOut = () =>{
        setUser(null)
        signOut(auth)
    }

    const allvalues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user,
    }

    return (
        <AuthContext.Provider value={allvalues}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;