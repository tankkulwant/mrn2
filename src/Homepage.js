import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut  } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Navbar';

const LogoutButton = () => {
    const auth = getAuth();
  
    const handleLogout = async () => {
      try {
        await signOut(auth);
        toast.success('You have been logged out successfully.');
      } catch (error) {
        toast.error('Error logging out: ' + error.message);
      }
    };
  
    return (
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    );
  };

const Homepage = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        toast.error("You need to be logged in to access this page.");
        navigate('/welcome'); // Redirect to the Welcome page or another appropriate page
      }
    });

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [auth, navigate]);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <LogoutButton />
      {/* Add more content here if needed */}
    </div>
  );
};

export default Homepage;
