//---- Imports
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { createContext, useEffect, useState } from "react";
import env from "../environment/env";
import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";

//---- Provider
const AuthContext = createContext<AuthContextType>({
    isUserLoggedIn: false,
    isSignInInProgress: false,
    startGoogleSignIn: () => {},
    logOutCurrentUser: () => {}
  });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [isSignInInProgress, setIsSignInInProgress] = useState(false);

    const startGoogleSignIn = async () => {
        console.log("Auth Provider: Google Sign In ")
        try {
            setIsSignInInProgress(true);
            const signInData = await GoogleSignin.signIn();
            if (signInData != null && signInData["data"] != null) {
              const idToken = signInData["data"]["idToken"];
              const googleCredential = auth.GoogleAuthProvider.credential(idToken);
              const firebaseSignIn = await auth().signInWithCredential(googleCredential);
              console.log("Firebase Authentication Success With UID : ", firebaseSignIn["user"]["uid"]);
              setIsUserLoggedIn(true);
            }
          } catch (error) {
            console.log("GoogleSignIn Error ", error);
            setIsUserLoggedIn(false);
          }
          setIsSignInInProgress(false);
    };

    const logOutCurrentUser =() => {
        setIsUserLoggedIn(false);
        auth().signOut();
        GoogleSignin.signOut();
    };

    useEffect(() => {
        console.log("Auth Provider: Sign In Configuring")
        GoogleSignin.configure({
            webClientId: env["googleSignInWebClientId"]
        });
        initFirebase();
    }, []);

    const initFirebase = async () => {
        if (!firebase.apps.length) {
            try {
                const firebaseResult = await firebase.initializeApp();
                console.log("Auth Provider: Firebase init success");
            } catch (error) {
                console.log("Auth Provider: Firebase init failed");
            }
        } else {
            firebase.app();
            console.log("Auth Provider: Firebase using default app");
        }
    };

    return (
        <AuthContext.Provider value={{isUserLoggedIn, isSignInInProgress, startGoogleSignIn, logOutCurrentUser}}>
            {children}
        </AuthContext.Provider>
    );
};

//---- Types
export type AuthContextType = {
    isUserLoggedIn: boolean;
    isSignInInProgress: boolean,
    startGoogleSignIn: () => void,
    logOutCurrentUser: () => void
};

//---- Exports
export default AuthContext;