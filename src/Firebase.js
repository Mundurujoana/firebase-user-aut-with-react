
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
  } from "firebase/auth";
  import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBFpLbuiFvDr0YyqHIYR8Twhq5t9CQxmsw",
    authDomain: "fir-user-auth-6ca40.firebaseapp.com",
    projectId: "fir-user-auth-6ca40",
    storageBucket: "fir-user-auth-6ca40.appspot.com",
    messagingSenderId: "779744557753",
    appId: "1:779744557753:web:e8eb99aef45b934ea8b968",
    measurementId: "G-8SV0G7E267"
  };


  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app);
  const db = getFirestore(app);
  const googleProvider = new GoogleAuthProvider();
  const analytics = getAnalytics(app);

export default app;

  //  export const signInWithGoogle = () => {
  //   signInWithPopup(auth, googleProvider)
  //   .then((result) =>{
  //     console.log(result)
  //   })

  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }