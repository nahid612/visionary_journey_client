import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { setUserId } from "firebase/analytics";

export const AuthContext = createContext(null)


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

    const allvalues = {
        createUser,
        signInUser,
    }

    return (
        <AuthContext.Provider value={allvalues}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;