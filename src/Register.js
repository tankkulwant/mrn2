import React, { useState } from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import './Register.css'; // Import your CSS for styling
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import { CircularProgress } from '@mui/material'; // Import Material-UI Circular Progress (or use your own spinner)

const Footer = () => (
  <footer className="footer">
    <div className="footer-menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <p>&copy; {new Date().getFullYear()} MeetMyMate. All rights reserved.</p>
  </footer>
);

const Register = () => {
  const [loading, setLoading] = useState(false); // Manage loading state
  const navigate = useNavigate(); // Hook to navigate between routes

  const signInWithGoogle = () => {
    setLoading(true); // Set loading state to true

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;

        // Show success toast
        toast.success(`Successfully signed in as ${user.displayName}`, {
          position: "top-right",
          autoClose: 3000, // 3 seconds
        });

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

            // Delay the navigation to allow the toast to be visible
            setTimeout(() => {
              setLoading(false); // Stop loading before navigation

              // Redirect to profile form and pass the email
              navigate('/complete-profile', { 
                state: { 
                  email: user.email, 
                  displayName: user.displayName // Include displayName here
                } 
              });
            }, 3000); // 3-second delay
          })
          .catch((error) => {
            setLoading(false); // Stop loading in case of an error
            toast.error('Error saving user data. Please try again.', {
              position: "top-right",
              autoClose: 3000,
            });
            console.error('Error saving user data:', error);
          });
      })
      .catch((error) => {
        setLoading(false); // Stop loading in case of an error
        // Show error toast
        toast.error('Error during sign-in. Please try again.', {
          position: "top-right",
          autoClose: 3000,
        });
        console.error('Error during sign-in:', error);
      });
  };

  return (
    <div>
      <div className='headerlogo'>
        <img src="meetmymatelogo.jpg" alt='logo' style={{ width: '100px', height: '70px', margin: '10px' }} />
      </div>

      <div className="register-container">
        <div className="register-card" style={{ minHeight: '400px', alignItems: 'center', alignContent: 'center' }}>
          <h2 className="register-title">Welcome to Meet My Mate</h2>
          <p className="register-subtitle">Sign in to continue</p>

          {/* Show the spinner if loading, otherwise show the sign-in button */}
          {loading ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CircularProgress size={40} /> {/* Display a loading spinner */}
              <p>Loading... Please Wait...</p>
            </div>
          ) : (
            <button className="google-btn" onClick={signInWithGoogle}>
              <img src="/google-icon.png" alt="Google icon" className="google-icon" />
              Sign in with Google
            </button>
          )}
        </div>
      </div>

      <Footer />

      {/* Toast container to display the notifications */}
      <ToastContainer />
    </div>
  );
};

export default Register;
