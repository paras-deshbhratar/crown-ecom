import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCydTqZRSWRK8oLQztgYjeC9P14dT55vGQ",
  authDomain: "crown-db-590f7.firebaseapp.com",
  projectId: "crown-db-590f7",
  storageBucket: "crown-db-590f7.appspot.com",
  messagingSenderId: "365336753449",
  appId: "1:365336753449:web:77f796b3c9a853cc057338",
  measurementId: "G-7DLFQWD0EW",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
