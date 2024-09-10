import React from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import './Register.css'; // Import your CSS for styling
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); // Hook to navigate between routes

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

            // Redirect to profile form after successful registration
            navigate('/profile');
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
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Welcome to Meet My Mate</h2>
        <p className="register-subtitle">Sign in to continue</p>
        <button className="google-btn" onClick={signInWithGoogle}>
          <img src="/google-icon.png" alt="Google icon" className="google-icon" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
