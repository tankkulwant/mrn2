// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvE1OkC6X2Zs2G3jzCMk5d3HEIy-BGhJM",
    authDomain: "mernshared12.firebaseapp.com",
    projectId: "mernshared12",
    storageBucket: "mernshared12.appspot.com",
    messagingSenderId: "655357062872",
    appId: "1:655357062872:web:a56aeb8036d0fe9c9831ad",
    measurementId: "G-0ZJKBW17QR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Export the auth and googleProvider for use in other files
export { auth, googleProvider };