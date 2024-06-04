import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

// social auth Provider
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()
const twitterProvider = new TwitterAuthProvider()


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

    // github login
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    // facebook login
    const facebookLogin = () =>{
        return signInWithPopup(auth, facebookProvider)
    }

    // twitter login
    const twitterLogin = () =>{
        return signInWithPopup(auth, twitterProvider)
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
        facebookLogin,
        twitterLogin,
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