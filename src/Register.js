import React from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup } from 'firebase/auth';

const Register = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        // Send user data to the backend
        fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('User data saved:', data);
          })
          .catch((error) => {
            console.error('Error saving user data:', error);
          });
      })
      .catch((error) => {
        console.error('Error during sign-in:', error);
      });
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Register;
